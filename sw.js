// sw.js - Service Worker otimizado para iOS e Android
const CACHE_NAME = 'identidade-v1.0.0';
const ASSETS_TO_CACHE = [
  '/identidade/',
  '/identidade/index.html',
  '/identidade/presenca.html',
  '/identidade/login.html',
  '/identidade/cadastro_evento.html',
  '/identidade/cadastro_congregacao.html',
  '/identidade/cadastro_instrumento.html',
  '/identidade/cadastro_niveis.html',
  '/identidade/cadastrar_admin.html',
  '/identidade/offline.html',
  '/identidade/manifest.json',
  // Ícones
  '/identidade/icons/icon-72.png',
  '/identidade/icons/icon-96.png',
  '/identidade/icons/icon-128.png',
  '/identidade/icons/icon-144.png',
  '/identidade/icons/icon-152.png',
  '/identidade/icons/icon-180.png',
  '/identidade/icons/icon-192.png',
  '/identidade/icons/icon-384.png',
  '/identidade/icons/icon-512.png',
  '/identidade/presenca.png',
  // Splash screens (iOS)
  '/identidade/splash/iPhone-15-Pro-Max-Portrait.png',
  '/identidade/splash/iPhone-15-Pro-Max-Landscape.png',
  '/identidade/splash/iPhone-15-Pro-Portrait.png',
  '/identidade/splash/iPhone-15-Pro-Landscape.png',
  '/identidade/splash/iPhone-14-Portrait.png',
  '/identidade/splash/iPhone-14-Landscape.png',
  '/identidade/splash/iPhone-13-mini-Portrait.png',
  '/identidade/splash/iPhone-13-mini-Landscape.png',
  '/identidade/splash/iPhone-SE-Portrait.png',
  '/identidade/splash/iPhone-SE-Landscape.png',
  '/identidade/splash/iPad-Pro-12.9-Portrait.png',
  '/identidade/splash/iPad-Pro-12.9-Landscape.png',
  '/identidade/splash/iPad-Air-Portrait.png',
  '/identidade/splash/iPad-Air-Landscape.png',
  // Bibliotecas externas
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js',
  'https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js'
];

// Instalação
self.addEventListener('install', event => {
  console.log('[SW] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Cacheando assets...');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        console.log('[SW] Instalação completa!');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('[SW] Erro ao cachear:', error);
      })
  );
});

// Ativação - limpa caches antigos
self.addEventListener('activate', event => {
  console.log('[SW] Ativando...');
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('[SW] Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      console.log('[SW] Ativado e controlando página');
      // iOS precisa disso para funcionar corretamente
      return self.clients.claim();
    })
  );
});

// Interceptação de requisições
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  
  // Ignorar Firebase e APIs externas (dados sensíveis)
  if (url.hostname.includes('firebase') || 
      url.hostname.includes('googleapis.com') ||
      url.pathname.includes('firestore') ||
      url.pathname.includes('analytics')) {
    event.respondWith(fetch(request));
    return;
  }
  
  // Estratégia para HTML: Cache First, Network Fallback
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      caches.match(request)
        .then(cachedResponse => {
          if (cachedResponse) {
            // Atualizar em background (iOS precisa disso)
            fetch(request).then(networkResponse => {
              if (networkResponse && networkResponse.status === 200) {
                caches.open(CACHE_NAME).then(cache => {
                  cache.put(request, networkResponse);
                });
              }
            }).catch(() => {});
            return cachedResponse;
          }
          return fetch(request)
            .then(networkResponse => {
              if (networkResponse && networkResponse.status === 200) {
                return caches.open(CACHE_NAME).then(cache => {
                  cache.put(request, networkResponse.clone());
                  return networkResponse;
                });
              }
              return networkResponse;
            })
            .catch(() => {
              return caches.match('/identidade/offline.html');
            });
        })
    );
    return;
  }
  
  // Estratégia para assets: Cache First
  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        return fetch(request)
          .then(networkResponse => {
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }
            
            // Cachear apenas se for sucesso
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(request, responseToCache);
              })
              .catch(() => {});
            
            return networkResponse;
          })
          .catch(() => {
            // Fallback para imagens
            if (request.url.match(/\.(png|jpg|jpeg|svg|gif|ico)$/)) {
              return caches.match('/identidade/icons/icon-192.png');
            }
            // Fallback para CSS/JS
            if (request.url.match(/\.(css|js)$/)) {
              return new Response('', { status: 200, statusText: 'OK' });
            }
          });
      })
  );
});

// Sincronização em background (Android)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-presenca') {
    console.log('[SW] Sincronizando presenças pendentes...');
    // Implementar sincronização aqui
  }
});

// Push notifications (opcional)
self.addEventListener('push', event => {
  const data = event.data?.json() || {};
  const options = {
    body: data.body || 'Nova notificação',
    icon: '/identidade/icons/icon-192.png',
    badge: '/identidade/icons/icon-96.png',
    vibrate: [200, 100, 200],
    data: {
      url: data.url || '/identidade/'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title || 'Identidade Ministerial', options)
  );
});

// Clique na notificação
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const urlToOpen = event.notification.data?.url || '/identidade/';
  
  event.waitUntil(
    clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    }).then(clientList => {
      for (let client of clientList) {
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});