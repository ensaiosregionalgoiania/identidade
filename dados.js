// ========== VETORES AUXILIARES (Tabelas de referência) ==========

// 1. Instrumentos
const instrumentos = [
    { id: 1, nome: "VIOLINO" },
    { id: 2, nome: "VIOLONCELO" },
    { id: 3, nome: "FLAUTA" },
    { id: 4, nome: "CLARINETE" },
    { id: 5, nome: "CLARINETE BAIXO" },
    { id: 6, nome: "SAXOFONE SOPRINO" },
    { id: 7, nome: "SAXOFONE SOPRANO RET" },
    { id: 8, nome: "SAXOFONE ALTO" },
    { id: 9, nome: "SAXOFONE TENOR" },
    { id: 10, nome: "SAXOFONE BARÍTONO" },
    { id: 11, nome: "TROMPETE" },
    { id: 12, nome: "TROMBONE" },
    { id: 13, nome: "EUPHONIUM" },
    { id: 14, nome: "TUBA" },
    { id: 15, nome: "ÓRGÃO" }
];

// 2. Congregações
const congregacoes = [
    { id: 1, nome: "2 - JARDIM EUROPA" }
];

// 3. Cargos
const cargos = [
    { id: 1, nome: "MÚSICO" },
    { id: 2, nome: "INSTRUTOR" },
    { id: 3, nome: "INSTRUTORA" },
    { id: 4, nome: "ENCARREGADO LOCAL" },
    { id: 5, nome: "SECRETÁRIO DO GEM" },
    { id: 6, nome: "SECRETÁRIO (A) DA MÚSICA" },
    { id: 7, nome: "ORGANISTA" }
];

// 4. Níveis
const niveis = [
    { id: 1, nome: "OFICIALIZADO(A)" },
    { id: 2, nome: "RJM" },
    { id: 3, nome: "CULTO OFICIAL" },
    { id: 4, nome: "MEIA HORA" }
];

// ========== VETOR PRINCIPAL DE MEMBROS ==========

let membros = [
    { id: 1, nome: "ALEXANDRE SANTOS PEREIRA", instrumentoId: 1, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 2, nome: "ANTONIO EDUARDO ABREU SILVA", instrumentoId: 1, congregacaoId: 1, cargoId: 1, nivelId: 2 },
    { id: 3, nome: "DANIEL DIAS TEIXEIRA", instrumentoId: 1, congregacaoId: 1, cargoId: 2, nivelId: 1 },
    { id: 4, nome: "DAVI ANDRADE DA ANUNCIAÇÃO", instrumentoId: 1, congregacaoId: 1, cargoId: 1, nivelId: 2 },
    { id: 5, nome: "JADERSON WESLEY FERREIRA GALVÃO", instrumentoId: 1, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 6, nome: "JOÃO VITOR DE OLIVEIRA FERREIRA", instrumentoId: 1, congregacaoId: 1, cargoId: 1, nivelId: 3 },
    { id: 7, nome: "KELSON DA SILVA NEVES", instrumentoId: 1, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 8, nome: "LEANDRO DE SOUSA VENTURA BENIGNO", instrumentoId: 1, congregacaoId: 1, cargoId: 2, nivelId: 1 },
    { id: 9, nome: "LEONARDO SILVA SANTOS", instrumentoId: 1, congregacaoId: 1, cargoId: 1, nivelId: 2 },
    { id: 10, nome: "LUCAS CARLOS DOS SANTOS", instrumentoId: 1, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 11, nome: "MATHEUS HENRIQUE SILVA SANTOS", instrumentoId: 1, congregacaoId: 1, cargoId: 1, nivelId: 3 },
    { id: 12, nome: "MAYKO VINICIUS RABELO CALIXTO", instrumentoId: 1, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 13, nome: "THIAGO DOS SANTOS MACHADO", instrumentoId: 1, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 14, nome: "WALEF SOUZA OLIVEIRA", instrumentoId: 1, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 15, nome: "KAUAN DA SILVA NEVES", instrumentoId: 2, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 16, nome: "REINALDO EVANGELISTA CURCINO", instrumentoId: 2, congregacaoId: 1, cargoId: 1, nivelId: 3 },
    { id: 17, nome: "DOUGLAS SILVA DE LIMA", instrumentoId: 3, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 18, nome: "KENNER DA SILVA NEVES", instrumentoId: 3, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 19, nome: "OSEIAS GOMES DE OLIVEIRA", instrumentoId: 3, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 20, nome: "PEDRO RODRIGUES MACHADO", instrumentoId: 3, congregacaoId: 1, cargoId: 4, nivelId: 1 },
    { id: 21, nome: "RENNER SILVA DE OLIVEIRA FILHO", instrumentoId: 3, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 22, nome: "SAMUEL SANTOS MACHADO", instrumentoId: 3, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 23, nome: "BRUNO LUAN CRUZ LEAL", instrumentoId: 4, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 24, nome: "DAVI ASSUNÇÃO LOURENÇO", instrumentoId: 4, congregacaoId: 1, cargoId: 5, nivelId: 1 },
    { id: 25, nome: "DOUGLAS SILVA XAVIER", instrumentoId: 4, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 26, nome: "GUILHERME NEVES ALMEIDA", instrumentoId: 4, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 27, nome: "MUADI GOMES VIANA", instrumentoId: 4, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 28, nome: "OTANIEL FRANCO DE OLIVEIRA", instrumentoId: 4, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 29, nome: "ADRIEL NEVES", instrumentoId: 5, congregacaoId: 1, cargoId: 2, nivelId: 1 },
    { id: 30, nome: "ELIAS SILVA PALHARES SANTOS", instrumentoId: 7, congregacaoId: 1, cargoId: 1, nivelId: 2 },
    { id: 31, nome: "ELVES DOMINGOS SOBRINHO", instrumentoId: 7, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 32, nome: "ALEXANDRE SILVA XAVIER", instrumentoId: 8, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 33, nome: "ALEXSANDRO DA SILVEIRA", instrumentoId: 8, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 34, nome: "ANDRE FERREIRA DO NASCIMENTO", instrumentoId: 8, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 35, nome: "CAIQUE DOMINGOS RODRIGUES NOVAI", instrumentoId: 8, congregacaoId: 1, cargoId: 1, nivelId: 2 },
    { id: 36, nome: "EDUARDO DOMINGOS RODRIGUES NOVAIS", instrumentoId: 8, congregacaoId: 1, cargoId: 1, nivelId: 2 },
    { id: 37, nome: "ENZO MAGALHAES DA SILVEIRA", instrumentoId: 8, congregacaoId: 1, cargoId: 1, nivelId: 3 },
    { id: 38, nome: "FAGNER SILVA DOMINGOS", instrumentoId: 8, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 39, nome: "JOSÉ CARLOS DA SILVA", instrumentoId: 8, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 40, nome: "JOSIMAS EUGÊNIO SILVA", instrumentoId: 8, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 41, nome: "MARCOS ANTÔNIO RODRIGUES DA SILVA", instrumentoId: 8, congregacaoId: 1, cargoId: 1, nivelId: 2 },
    { id: 42, nome: "MATEUS NEVES ALMEIDA", instrumentoId: 8, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 43, nome: "MATEUS RABELO CALIXTO SILVA DOMINGOS", instrumentoId: 8, congregacaoId: 1, cargoId: 1, nivelId: 2 },
    { id: 44, nome: "YKARO MARLON SODRÉ MENDES", instrumentoId: 8, congregacaoId: 1, cargoId: 1, nivelId: 2 },
    { id: 45, nome: "FLAVIO PALHARES SANTOS", instrumentoId: 9, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 46, nome: "JOÃO BATISTA DE SOUZA", instrumentoId: 9, congregacaoId: 1, cargoId: 1, nivelId: 3 },
    { id: 47, nome: "KLEITON EVERTY SERAFIM MENDONÇA MARTINI", instrumentoId: 9, congregacaoId: 1, cargoId: 1, nivelId: 3 },
    { id: 48, nome: "LAWRENCE MONTEIRO ROSA", instrumentoId: 9, congregacaoId: 1, cargoId: 2, nivelId: 1 },
    { id: 49, nome: "PAULO SILVA ALMEIDA", instrumentoId: 9, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 50, nome: "RONAN PEREIRA PASSOS", instrumentoId: 9, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 51, nome: "HELEANDRO RODRIGUES DE FARIA", instrumentoId: 10, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 52, nome: "KAIO VIEIRA DA SILVA", instrumentoId: 10, congregacaoId: 1, cargoId: 1, nivelId: 3 },
    { id: 53, nome: "FERNANDO PEREIRA MONTALVAO CRUZ", instrumentoId: 11, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 54, nome: "ISRAEL FERREIRA BARROS", instrumentoId: 11, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 55, nome: "LEOSMAR HIPÓLITO LEME LEANDRO", instrumentoId: 11, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 56, nome: "EUCELIO CASTRO DE OLIVEIRA", instrumentoId: 12, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 57, nome: "RAFAEL PEREIRA DE BARROS", instrumentoId: 12, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 58, nome: "ISAQUE ALEIXO DA SILVA", instrumentoId: 13, congregacaoId: 1, cargoId: 1, nivelId: 3 },
    { id: 59, nome: "JOSE FERNANDO JOAQUIM DA SILVA", instrumentoId: 13, congregacaoId: 1, cargoId: 2, nivelId: 1 },
    { id: 60, nome: "ADRIANO PEREIRA DE OLIVEIRA", instrumentoId: 14, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 61, nome: "BRUNO FLAVIO GUIMARÃES", instrumentoId: 14, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 62, nome: "DRAKMYLLER SILVA DE OLIVEIRA", instrumentoId: 14, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 63, nome: "EDLANI ALVES GONCALVES", instrumentoId: 14, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 64, nome: "EITOR MAGALHAES DA SILVEIRA", instrumentoId: 14, congregacaoId: 1, cargoId: 1, nivelId: 3 },
    { id: 65, nome: "LEANDRO SEVERINO MIRANDA", instrumentoId: 14, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 66, nome: "MURILO CORRÊA DA SILVA", instrumentoId: 14, congregacaoId: 1, cargoId: 1, nivelId: 1 },
    { id: 67, nome: "ANA MACHADO DE SOUZA MELO", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 4 },
    { id: 68, nome: "CELMY DOS SANTOS SILVA RIBEIRO", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 1 },
    { id: 69, nome: "DANIELLE CALIXTO SANTOS CORDEIRO", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 1 },
    { id: 70, nome: "FABIANA KARLA DA SILVA", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 3 },
    { id: 71, nome: "FABLINE ASSIS DO PRADO", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 4 },
    { id: 72, nome: "GEOVANA ASSIS MIGUEL", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 1 },
    { id: 73, nome: "KASSIA DE CASTRO DA SILVA CALIXTO", instrumentoId: 15, congregacaoId: 1, cargoId: 6, nivelId: 1 },
    { id: 74, nome: "LARISSA MARTINS SILVA", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 3 },
    { id: 75, nome: "LAURA BAKINI DE BARROS", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 2 },
    { id: 76, nome: "LETICIA LUIZ DA SILVA", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 1 },
    { id: 77, nome: "LUANA MACHADO DE SOUZA MELO OLIVEIRA", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 3 },
    { id: 78, nome: "LUCIA HELENA DE ARAUJO", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 1 },
    { id: 79, nome: "LUIZA LUIZ SILVA", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 2 },
    { id: 80, nome: "MARLUZ APARECIDA PEREIRA DE LIMA", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 1 },
    { id: 81, nome: "MIRIANA OLIVEIRA CALIXTO DE ALMEIDA", instrumentoId: 15, congregacaoId: 1, cargoId: 3, nivelId: 1 },
    { id: 82, nome: "NELIA ANDRADE DA SILVA", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 4 },
    { id: 83, nome: "PATRICIA VIEIRA DA SILVA CARVALHO", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 1 },
    { id: 84, nome: "PRISCILA BAKINI DE BARROS", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 1 },
    { id: 85, nome: "TATIELLY DURAES DE FREITAS OLIVEIRA", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 1 },
    { id: 86, nome: "TAYNA MARTINS BARCELOS", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 3 },
    { id: 87, nome: "VANESSA DOMINGOS DA SILVA RODRIGUES", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 4 },
    { id: 88, nome: "WALLERIA BORGES DA SILVA NEVES", instrumentoId: 15, congregacaoId: 1, cargoId: 7, nivelId: 1 }
];

// ========== FUNÇÕES AUXILIARES ==========

function getInstrumentoNome(id) {
    const inst = instrumentos.find(i => i.id === id);
    return inst ? inst.nome : "Desconhecido";
}

function getCongregacaoNome(id) {
    const cong = congregacoes.find(c => c.id === id);
    return cong ? cong.nome : "Desconhecido";
}

function getCargoNome(id) {
    const cargo = cargos.find(c => c.id === id);
    return cargo ? cargo.nome : "Desconhecido";
}

function getNivelNome(id) {
    const nivel = niveis.find(n => n.id === id);
    return nivel ? nivel.nome : "Desconhecido";
}

function getMembroCompleto(membro) {
    return {
        id: membro.id,
        nome: membro.nome,
        instrumento: getInstrumentoNome(membro.instrumentoId),
        congregacao: getCongregacaoNome(membro.congregacaoId),
        cargo: getCargoNome(membro.cargoId),
        nivel: getNivelNome(membro.nivelId)
    };
}

// ========== FUNÇÃO PARA LISTAR TODOS OS MEMBROS COMPLETOS ==========
function listarMembrosCompletos() {
    return membros.map(m => getMembroCompleto(m));
}

// ========== FUNÇÃO PARA BUSCAR MEMBRO POR ID ==========
function getMembroCompletoPorId(id) {
    const membro = membros.find(m => m.id === id);
    if (!membro) return null;
    return getMembroCompleto(membro);
}

// ========== PERSISTÊNCIA (localStorage) ==========

function salvarDados() {
    const dados = {
        instrumentos: instrumentos,
        congregacoes: congregacoes,
        cargos: cargos,
        niveis: niveis,
        membros: membros
    };
    localStorage.setItem('identidadeMinisterial', JSON.stringify(dados));
}

function carregarDados() {
    const dadosSalvos = localStorage.getItem('identidadeMinisterial');
    if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);
        // Recarregar os arrays com os dados salvos
        instrumentos.length = 0;
        congregacoes.length = 0;
        cargos.length = 0;
        niveis.length = 0;
        membros.length = 0;
        
        instrumentos.push(...dados.instrumentos);
        congregacoes.push(...dados.congregacoes);
        cargos.push(...dados.cargos);
        niveis.push(...dados.niveis);
        membros.push(...dados.membros);
    }
}

// Carregar dados ao iniciar
carregarDados();

// Teste para verificar se a função está funcionando
console.log('Total de membros carregados:', membros.length);
console.log('Primeiros membros:', listarMembrosCompletos().slice(0, 3));