const CACHE_NAME = 'identidade-ccb-v3';
const urlsToCache = [
  '/identidade/',
  '/identidade/index.html',
  '/identidade/presenca.html',
  '/identidade/cadastro_evento.html',
  '/identidade/cadastro_congregacao.html',
  '/identidade/cadastro_instrumento.html',
  '/identidade/cadastro_niveis.html',
  '/identidade/login.html',
  '/identidade/manifest.json',
  '/identidade/presenca.png',
  '/identidade/icons/icon-72.png',
  '/identidade/icons/icon-96.png',
  '/identidade/icons/icon-144.png',
  '/identidade/icons/icon-152.png',
  '/identidade/icons/icon-192.png',
  '/identidade/icons/icon-384.png',
  '/identidade/icons/icon-512.png'
];

// Resto do código permanece igual...
// Instalação do Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.log('Erro ao cachear:', err))
  );
  self.skipWaiting();
});

// Ativação
self.addEventListener('activate', event => {
  console.log('Service Worker ativado');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Removendo cache antigo:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Interceptação de requisições
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          return response;
        });
      })
      .catch(() => {
        return caches.match('/index.html');
      })
  );
});