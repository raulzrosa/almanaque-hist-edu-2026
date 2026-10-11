/**
 * Dados das 8 Professoras Pioneiras para o Jogo da Memória Especial da Aula 5.
 * 
 * Fonte e Pesquisa Histórica:
 * Projeto: "Mulheres e inovação docente (São Paulo e França, nas décadas de 1860 a 1960)"
 * Integração: Faculdade de Educação da USP (Universidade de São Paulo) & USPC (Université Sorbonne Paris Cité).
 * Acervo e Biografias Originais: https://histeduc.wixsite.com/genre-genero
 */

export const PROJETO_INFO = {
  titulo: 'Mulheres e inovação docente (São Paulo e França, nas décadas de 1860 a 1960)',
  url: 'https://histeduc.wixsite.com/genre-genero',
  descricao: 'O projeto, que integra Faculdade de Educação da USP (Universidade de São Paulo) e universidades francesas associadas à USPC (Université Sorbonne Paris Cité), objetiva a elaboração de biografias de professoras que inovaram a prática docente e que permanecem praticamente desconhecidas ainda nos dias de hoje. A maioria dessas mulheres construiu sua trajetória em sala de aula. Foram professoras de escolas primárias e secundárias em zonas urbanas e rurais, criaram metodologias para o ensino de jovens e adultos ou para alunos especiais. No seu conjunto, estas biografias exibem as múltiplas formas de ser mulher e professora em São Paulo e na França nos séculos XIX e XX.'
}

export const PROFESSORAS_MEMORIA = [
  {
    id: 'zuleika-ferreira',
    numero: 1,
    nome: 'Zuleika de Barros Martins Ferreira',
    datas: '1892 – 1956',
    local: 'São Paulo, SP',
    imagem: '/jogo-memoria/1-Zuleika-de-Barros-Martins-Ferreira.png',
    cargoPrincipal: 'Catedrática de Metodologia e Prática do Ensino Primário da Escola Caetano de Campos',
    resumo: 'Atuou por quase três décadas na célebre Escola Normal Caetano de Campos, formando cerca de dois mil professores primários para as salas de aula paulistas. Entusiasta da Escola Nova e dos métodos ativos, criou o projeto "Governo Escolar" — no qual os alunos assumiam a gestão pedagógica e cooperativa da classe pelo "aprender fazendo" —, além de projetos pioneiros com jornais de classe e a autoria do manual pedagógico "É preciso calcular" (1929).',
    inovacao: 'Pioneirismo na criação do primeiro curso de Especialização para o Ensino de Cegos da América Latina em escola pública (1945). Incentivou alunas normandas — entre elas Dorina Nowill, primeira aluna cega da instituição — a elaborar os primeiros livros e cartilhas em Braille do Brasil e a aplicar o método analítico-sintético na alfabetização de crianças com deficiência visual.',
    palavrasChave: ['Ensino de Cegos', 'Sistema Braille', 'Escola Nova', 'Governo Escolar', 'Caetano de Campos'],
    autoriaPesquisa: 'Josiane Acácia de Oliveira Marques (Projeto Mulheres e Inovação Docente - FEUSP/USPC)'
  },
  {
    id: 'olinda-magarotto',
    numero: 2,
    nome: 'Olinda Magarotto dos Santos',
    datas: '1934 – Presente',
    local: 'Marília, SP',
    imagem: '/jogo-memoria/2-Olinda-Magarotto-dos-Santos.png',
    cargoPrincipal: 'Professora Normalista de Escolas Rurais Isoladas e Coordenadora Pedagógica',
    resumo: 'Formou-se em 1953 pela Escola Normal Livre Sagrado Coração de Jesus em Marília. Iniciou o magistério em 1967 nas desafiadoras escolas isoladas rurais de Caiuá, no extremo oeste paulista, enfrentando longos percursos em trens, caminhões, charretes e animais. Graduou-se em Pedagogia pela UNESP em 1979 e lecionou por mais de 25 anos, superando barreiras de gênero, políticas e o isolamento geográfico do sertão.',
    inovacao: 'Implementação de metodologias e práticas inovadoras no cotidiano adverso das salas multisseriadas de escolas isoladas rurais. Adaptou currículos e materiais à realidade camponesa, lutando ativamente pelo acolhimento, acesso e permanência escolar de crianças socialmente desfavorecidas que o sistema hegemônico frequentemente excluía.',
    palavrasChave: ['Escola Isolada Rural', 'Ensino Multisseriado', 'Permanência Escolar', 'Escola Normal Livre'],
    autoriaPesquisa: 'Angélica Pall Oriani (Projeto Mulheres e Inovação Docente - FEUSP/USPC)'
  },
  {
    id: 'noemy-rudolfer',
    numero: 3,
    nome: 'Noemy da Silveira Rudolfer',
    datas: '1902 – 1980',
    local: 'Santa Rosa de Viterbo / São Paulo, SP',
    imagem: '/jogo-memoria/3-Noemy-da-Silveira-Rudolfer.png',
    cargoPrincipal: 'Catedrática de Psicologia Educacional no Instituto de Educação da USP e FFCL/USP',
    resumo: 'Iniciou como professora primária, tornando-se assistente de Lourenço Filho e catedrática na USP. Estudou no conceituado Teachers College da Universidade de Columbia (EUA) e chefiou o Serviço de Psicologia Aplicada de SP. Publicou o clássico "Introdução à psicologia educacional" (1938) e traduziu obras essenciais de William Kilpatrick e Adolphe Ferrière para as editoras Melhoramentos e Saraiva.',
    inovacao: 'Uma das únicas três mulheres a assinar o histórico "Manifesto dos Pioneiros da Educação Nova" (1932) entre 26 signatários. Foi pioneira nacional na fundamentação científica da educação e no uso da psicologia experimental aplicada ao magistério, defendendo métodos ativos, orientação vocacional e autonomia do aluno no ensino superior.',
    palavrasChave: ['Manifesto de 1932', 'Psicologia Educacional', 'Escola Nova', 'Teachers College / Columbia', 'USP'],
    autoriaPesquisa: 'Acervo e Historiografia FEUSP/USPC (Warde, Campos, Moraes, Golombek)'
  },
  {
    id: 'alice-meirelles',
    numero: 4,
    nome: 'Alice Meirelles Reis',
    datas: '1898 – 1981',
    local: 'São Paulo, SP',
    imagem: '/jogo-memoria/4-Alice-Meirelles-Reis.png',
    cargoPrincipal: 'Especialista em Educação Infantil Pré-Primária da Escola Caetano de Campos',
    resumo: 'Diplomada pela Escola Normal do Brás com o prêmio "Prudente de Morais", assumiu a regência de turmas no Jardim de Infância da Caetano de Campos entre 1923 e 1935. Fundou em 1938 o pioneiro Centro de Estudos de Educação Infantil para aperfeiçoar educadoras pré-escolares e liderou campanhas públicas apaixonadas pela ampliação de vagas em creches e jardins de infância municipais.',
    inovacao: 'Revolucionou a educação infantil no Brasil ao integrar o valor do brincar, trabalhos em equipe (Cousinet), centros de interesse (Decroly) e método de projetos (Kilpatrick). Foi pioneira absoluta no uso da fotografia pedagógica para registrar o cotidiano real e a autonomia das crianças, acervo que deu origem ao Museu da Educação e do Brinquedo (MEB/USP).',
    palavrasChave: ['Educação Infantil', 'Jardim de Infância', 'Valor do Brincar', 'Fotografia Escolar', 'MEB/USP'],
    autoriaPesquisa: 'Tizuko Morchida Kishimoto e Maria Walburga dos Santos (Projeto Mulheres e Inovação Docente - FEUSP/USPC)'
  },
  {
    id: 'maria-jose-parise',
    numero: 5,
    nome: 'Maria José Tristão Parise',
    datas: '1933 – Presente',
    local: 'São Joaquim da Barra, SP',
    imagem: '/jogo-memoria/5-Maria-Jose-Tristao-Parise.png',
    cargoPrincipal: 'Professora de Escolas Isoladas Rurais e Grupos Escolares do Interior Paulista',
    resumo: 'Formada em 1953 pela Escola Normal Oficial de São Joaquim da Barra, dedicou mais de 30 anos ao magistério público em salas de aula rurais e urbanas, formando-se Pedagoga nos anos 1970. Caracterizou-se pelo uso inovador do canto e da música como ferramenta didática para criar um clima de acolhimento e confiança, promovendo a integração e o orgulho das famílias camponesas.',
    inovacao: 'Em 1960, na escola rural da Fazenda Santa Terezinha, acolheu a aluna Neuza Tomazini da Silva — que nasceu sem as mãos e havia sido recusada por três professoras — e inventou um método didático inédito ensinando-a a segurar a caneta de madeira com a boca. Alfabetizou-a em apenas três meses, permitindo que Neuza prosseguisse os estudos e também se formasse professora, antecipando em mais de três décadas os princípios da Declaração de Salamanca e da Educação Inclusiva.',
    palavrasChave: ['Educação Inclusiva', 'Alfabetização com a Boca', 'Sala Rural Multisseriada', 'Música no Ensino'],
    autoriaPesquisa: 'Paula Perin Vicentini e Rita de Cassia Gallego (Projeto Mulheres e Inovação Docente - FEUSP/USPC)'
  },
  {
    id: 'madre-ninetta-jonata',
    numero: 6,
    nome: 'Madre Ninetta Jonata',
    datas: '1887 – 1976',
    local: 'Guglionesi (Itália) / São Paulo, SP',
    imagem: '/jogo-memoria/6-Madre-Ninetta-Jonata.png',
    cargoPrincipal: 'Superiora Geral do Pontifício Instituto das Mestras Pias Filippini',
    resumo: 'Nascida na nobreza italiana, abraçou cedo o magistério comunitário. Atuou nos EUA e em Roma antes de desembarcar no Brasil em 1961. Escolheu fixar residência na então carente periferia paulistana da Itaberaba, onde mobilizou recursos para erguer escolas confessionais populares, garantindo que mães trabalhadoras tivessem onde deixar seus filhos em segurança.',
    inovacao: 'Criação de um complexo comunitário integral para escolarização de meninas e crianças socialmente desfavorecidas. Em suas escolas da periferia, integrou pré-primário, ginásio, Escola Normal e ensino profissionalizante (contabilidade e secretariado), associando as disciplinas a clubes de ciência, literatura, artes industriais, cinema educativo e assistência social.',
    palavrasChave: ['Educação Popular', 'Escolação de Meninas', 'Mestras Pias Filippini', 'Ensino Comunitário'],
    autoriaPesquisa: 'Acervo M.P.F. e Paula Leonardi (Projeto Mulheres e Inovação Docente - FEUSP/USPC)'
  },
  {
    id: 'carolina-ribeiro',
    numero: 7,
    nome: 'Carolina Ribeiro',
    datas: '1892 – 1982',
    local: 'Tatuí / São Paulo, SP',
    imagem: '/jogo-memoria/7-Carolina-Ribeiro.png',
    cargoPrincipal: 'Primeira Mulher Secretária da Educação do Estado de São Paulo e Diretora da Caetano de Campos',
    resumo: 'Formada pela Escola Normal Peixoto Gomide de Itapetininga, dirigiu o Grupo Escolar São José, o Grupo Erasmo Braga e, por mais de uma década, a Escola Normal Caetano de Campos. Atuou como líder de organizações do magistério, dirigiu a assistência a combatentes de 1932 e criou serviços assistenciais escolares fundamentais, como o "Serviço do Lanche Sadio" e centros de puericultura.',
    inovacao: 'Inovou na cultura escolar ao fundar veículos de imprensa pedagógica produzidos pelos próprios estudantes, destacando-se o célebre jornal escolar "Nosso Esforço" (1936), que durou décadas formando alunos-jornalistas. Em 1955, quebrou paradigmas históricos de gênero ao tornar-se a primeira mulher nomeada Secretária da Educação do Estado de São Paulo.',
    palavrasChave: ['Imprensa Pedagógica', 'Jornal Nosso Esforço', '1ª Secretária da Educação', 'Liderança Feminina'],
    autoriaPesquisa: 'Ana Regina Pinheiro (Projeto Mulheres e Inovação Docente - FEUSP/USPC)'
  },
  {
    id: 'amelia-americano-castro',
    numero: 8,
    nome: 'Amélia Americano Franco Domingues de Castro',
    datas: '1920 – Presente',
    local: 'Rio de Janeiro / São Paulo, SP',
    imagem: '/jogo-memoria/8-Amelia-Americano-Franco-Domingues-de-Castro.png',
    cargoPrincipal: 'Catedrática de Didática Geral da USP e Diretora do Colégio de Aplicação da USP',
    resumo: 'Ingressou na recém-criada FFCL da USP em 1938, licenciando-se em Geografia, História e Filosofia. Aos 21 anos tornou-se docente assistente da Cadeira de Didática, obtendo doutorado em 1950 e livre-docência em 1963. Dirigiu o Colégio de Aplicação da USP, fundou o Centro de Treinamento de Professores de Ciências e tomou posse na Academia Paulista de Educação.',
    inovacao: 'Pesquisadora pioneira na introdução e articulação das bases psicogenéticas de Jean Piaget com a Didática escolar no Brasil. Fundou os inovadores "Seminários de Didática", instalou em 1966 o primeiro programa de Pós-Graduação em Metodologia do Ensino Médio da USP e tornou-se a única educadora na história homenageada com o título de Professora Emérita pelas três universidades estaduais paulistas (USP, UNESP e UNICAMP).',
    palavrasChave: ['Didática Psicogenética', 'Jean Piaget no Brasil', 'Pós-Graduação em Metodologia', 'Professora Emérita Tríplice'],
    autoriaPesquisa: 'Katiene Nogueira da Silva (Projeto Mulheres e Inovação Docente - FEUSP/USPC)'
  }
]

