import aula01Markdown from './aulas/aula-01.md?raw'
import aula02Markdown from './aulas/aula-02.md?raw'

export const AULAS = [
  {
    id: 'aula-01',
    numero: 1,
    slug: 'o-que-e-historia',
    titulo: 'O que é História?',
    subtitulo: 'Entre a Máquina do Tempo e os Vestígios do Passado',
    disciplina: 'História da Educação',
    semestre: '2026',
    dataPublicacao: 'Edição nº 1',
    resumoMarkdown: aula01Markdown,
    pontosIlustrados: [
      {
        id: 'ponto-1',
        numeroRomano: 'I',
        titulo: 'A Fantasia da Máquina do Tempo',
        subtitulo: 'Cultura Pop, McFly e a Ilusão de Alterar o Passado',
        tipoIlustracao: 'delorean',
        imagemUrl: '/resumo1-1.jpeg',
        legendaIlustracao: 'Fig. I: Cartaz oficial de "De Volta para o Futuro" (Zemeckis, 1985) • Marty McFly & Doc Brown',
        destaqueConceito: 'A Ilusão da Ficção Científica',
        paragrafos: [
          'Na cultura pop, é comum depararmos com histórias que brincam com a ideia de viagem no tempo através de máquinas super tecnológicas. Esse tipo de tecnologia ainda está longe de existir, mas isso não impede que apareçam em diversas obras literárias, filmes, quadrinhos, etc.',
          'O filme De Volta para o Futuro (ZEMECKIS, 1985) é um grande exemplo. Marty McFly tem a possibilidade de voltar para o passado e além de poder presenciar os acontecimentos em tempo real, consegue alterá-los, a ponto de modificar toda a cadeia de acontecimentos até o seu presente.'
        ],
        notaRodape: 'Ficção vs. Realidade Histórica: No cinema, a ficção brinca com a ideia de reescrever acontecimentos; na vida real, cada fato passado é irreversível e exige reflexão ética.'
      },
      {
        id: 'ponto-2',
        numeroRomano: 'II',
        titulo: 'A Viagem Real: Vestígios e Fontes',
        subtitulo: 'O Ofício do Historiador e o Rigor Crítico',
        tipoIlustracao: 'manuscrito',
        destaqueConceito: 'O Método Historiográfico',
        paragrafos: [
          'Infelizmente, ainda não temos na vida real nada parecido com o carro futurista que viaja no tempo, igual ao criado por Doc Brown. Então, para "voltarmos ao passado", para conhecermos os acontecimentos precisamos de outros métodos.',
          'O historiador, que faz essa viagem no tempo, utiliza como ferramenta os vestígios materiais deixados pelos antepassados. A partir desses vestígios, também chamados de fontes, o historiador deve fazer um exame crítico, para tentar chegar numa narrativa histórica mais próxima possível da realidade.',
          'Para isso, ao longo dos séculos a área da historiografia foi se aperfeiçoando e criando métodos que possam evitar falsas interpretações e falsificações, a fim de evitar negacionismos e falsos revisionismos.'
        ],
        notaRodape: 'As Fontes como Máquina do Tempo: O documento antigo e o vestígio material são as únicas testemunhas autênticas que chegam até nós.'
      },
      {
        id: 'ponto-3',
        numeroRomano: 'III',
        titulo: 'O Compromisso Ético com o Presente',
        subtitulo: 'A Verdadeira Lição Histórica: Compreender para não Repetir',
        tipoIlustracao: 'fluxo',
        destaqueConceito: 'A Ética da Memória',
        paragrafos: [
          'Conhecer o passado é importante para evitarmos repetir erros já conhecidos. E é imprescindível que esse conhecer seja feito da forma mais criteriosa possível, utilizando métodos éticos que remontem os fatos do passado da forma mais fidedigna possível.',
          'Não é possível viajar no tempo para assistirmos na íntegra os eventos do passado. Muito menos podemos mudar nossos erros precedentes, igual o personagem McFly fez no filme. Mas podemos a partir da história, do estudo crítico dos vestígios do passado, compreendermos os erros e evitar ao máximo repeti-los.'
        ],
        notaRodape: 'Imperativo Ético: O passado não muda, mas nossa compreensão crítica dele pode transformar o futuro da educação.'
      }
    ],
    conceitosChave: [
      {
        termo: 'Vestígios & Fontes',
        descricao: 'A matéria-prima do historiador: documentos, objetos, registros orais e materiais que sobreviveram ao tempo.'
      },
      {
        termo: 'Exame Crítico',
        descricao: 'Metodologia científica para cruzar evidências, checar autenticidade e evitar narrativas anacrônicas.'
      },
      {
        termo: 'Combate ao Negacionismo',
        descricao: 'Defesa ética da memória social contra falsificações históricas e manipulações do passado.'
      }
    ],
    citacaoDestaque: {
      texto: 'Não podemos mudar nossos erros precedentes como na ficção, mas podemos, através da história e do exame dos vestígios, compreendê-los e evitar ao máximo repeti-los.',
      fonte: 'Reflexão crítica • Aula 01'
    },
    curiosidade: {
      titulo: 'Gabinete de Curiosidades: A Origem dos Almanaques',
      texto: 'A palavra almanaque vem do árabe al-manākh (o clima ou calendário). Do século XVI ao XIX, eram os livros mais populares nas casas e vilarejos. Além de prever plantios e luas, os almanaques educavam as pessoas através de crônicas, poesias, gravuras e os primeiros passatempos impressos da história da educação popular!',
      curiosidadeExtra: '💡 Você sabia? No Brasil do século XIX, o famoso "Almanak Laemmert" registrava quase tudo que acontecia no Império: profissões, escolas, médicos e leis.'
    },
    passatempos: {
      cacaPalavras: {
        titulo: 'Caça-Palavras Historiográfico',
        instrucao: 'Encontre na grade as 6 palavras fundamentais do ofício do historiador:',
        palavras: [
          { palavra: 'VESTIGIOS', dica: 'Restos materiais deixados pelas gerações passadas' },
          { palavra: 'FONTES', dica: 'Documentos e testemunhos investigados pelo historiador' },
          { palavra: 'CRITICA', dica: 'Método de checagem para evitar falsificações' },
          { palavra: 'MCFLY', dica: 'Personagem do cinema que viajava e alterava a história' },
          { palavra: 'ETICA', dica: 'Compromisso com a verdade e o rigor na pesquisa' },
          { palavra: 'MEMORIA', dica: 'Patrimônio do passado vivo que precisa ser preservado' }
        ],
        // 10x10 matrix with carefully embedded words and thematic filler letters
        gridSize: 10,
        fixedGrid: [
          ['V', 'E', 'S', 'T', 'I', 'G', 'I', 'O', 'S', 'A'],
          ['C', 'T', 'I', 'Q', 'X', 'C', 'A', 'B', 'C', 'D'],
          ['M', 'I', 'F', 'L', 'Y', 'H', 'I', 'S', 'R', 'O'],
          ['E', 'C', 'T', 'S', 'D', 'A', 'A', 'M', 'I', 'S'],
          ['M', 'A', 'S', 'O', 'P', 'I', 'A', 'E', 'T', 'V'],
          ['D', 'O', 'C', 'B', 'R', 'O', 'W', 'T', 'I', 'B'],
          ['O', 'F', 'I', 'O', 'I', 'O', 'X', 'O', 'C', 'W'],
          ['R', 'A', 'M', 'C', 'F', 'L', 'Y', 'D', 'A', 'D'],
          ['F', 'E', 'N', 'T', 'E', 'S', 'P', 'O', 'E', 'X'],
          ['M', 'A', 'S', 'S', 'F', 'O', 'N', 'T', 'E', 'S']
        ]
      },
      quiz: {
        titulo: 'Quiz do Almanaque: Teste sua Memória Histórica',
        perguntas: [
          {
            id: 1,
            enunciado: 'No cinema pop (como em "De Volta para o Futuro"), viaja-se no tempo em carros velozes. Como o historiador viaja no tempo no mundo real?',
            opcoes: [
              'Criando suposições com base exclusivamente na imaginação e lendas orais.',
              'Pesquisando e interpretando criticamente os vestígios materiais e fontes deixadas pelos antepassados.',
              'Esperando que a tecnologia construa uma máquina real para presenciar os acontecimentos.',
              'Aceitando cegamente qualquer relato sem fazer perguntas ou checagens.'
            ],
            respostaCorreta: 1,
            explicacao: 'O historiador investiga documentos, cartas, vestígios arqueológicos e objetos: são essas fontes que servem de "ponte" até o passado.'
          },
          {
            id: 2,
            enunciado: 'Ao longo dos séculos, para que serviu o aperfeiçoamento dos métodos da historiografia?',
            opcoes: [
              'Para validar mentiras convenientes que facilitem governar.',
              'Para combater falsas interpretações, falsificações, negacionismos e falsos revisionismos.',
              'Para impedir que estudantes tenham acesso aos erros do passado.',
              'Para provar que o cinema sempre retrata a história com exatidão científica.'
            ],
            respostaCorreta: 1,
            explicacao: 'O rigor metodológico da história é a proteção contra fraudes, negacionismo e manipulações ideológicas do passado.'
          },
          {
            id: 3,
            enunciado: 'Qual a principal diferença ética entre Marty McFly no filme e nós no mundo contemporâneo?',
            opcoes: [
              'McFly podia alterar erros precedentes do passado; nós só podemos compreendê-los criticamente para evitar repeti-los.',
              'McFly não cometeu nenhum erro, enquanto os historiadores nunca acertam suas pesquisas.',
              'Na vida real podemos viajar no tempo para corrigir governantes antigos.',
              'Não existe nenhuma diferença entre ficção cinematográfica e método científico.'
            ],
            respostaCorreta: 0,
            explicacao: 'Não temos o poder mágico de apagar erros cometidos, mas a história nos capacita a entendê-los para agir com ética no presente.'
          }
        ]
      }
    }
  },
  {
    id: 'aula-02',
    numero: 2,
    slug: 'historia-politica-da-educacao-1',
    titulo: 'História Política da Educação',
    subtitulo: 'Das Reformas Pombalinas ao Método Intuitivo (1759 – 1889)',
    disciplina: 'História da Educação',
    semestre: '2026',
    dataPublicacao: 'Edição nº 2',
    modulo: 'Educação no Brasil Colônia e Império',
    resumoMarkdown: aula02Markdown,
    pontosIlustrados: [
      {
        id: 'ponto-2-1',
        numeroRomano: 'I',
        titulo: 'A Expulsão dos Jesuítas e as Reformas Pombalinas (1759)',
        subtitulo: 'O Início do Controle Estatal e a Criação das Aulas Régias',
        tipoIlustracao: 'pombal',
        destaqueConceito: 'A Estatização do Ensino',
        paragrafos: [
          'Os jesuítas e a Companhia de Jesus detiveram o monopólio da educação em Portugal e suas colônias até 1759, quando foram expulsos pelo Marquês de Pombal, secretário de Estado do rei D. José I.',
          'A expulsão gerou uma imensa carência de professores, levando à criação da Reforma Pombalina com três pilares centrais: tornar a educação controlada pelo Estado, secular e com currículo padronizado.',
          'As primeiras tentativas estatais de colocar a reforma em prática foram as chamadas Aulas Régias. Contudo, a escassez de verbas para os ordenados docentes e o acesso restrito às elites locais limitaram seu alcance.'
        ],
        notaRodape: 'Transição Histórica: A educação deixava de ser exclusividade da Igreja para tornar-se instrumento político e administrativo do Estado absolutista.'
      },
      {
        id: 'ponto-2-2',
        numeroRomano: 'II',
        titulo: 'A Corte de 1808 e a Lei Geral de 1827',
        subtitulo: 'A Independência, o Método Mútuo e a Divisão de Gênero',
        tipoIlustracao: 'benedicta',
        destaqueConceito: 'O Método Mútuo & Desigualdade',
        paragrafos: [
          'Em 1808, fugindo das invasões napoleônicas, D. João VI e uma corte de milhares de pessoas desembarcaram no Brasil, forçando uma rápida modernização estrutural que impulsionou a educação.',
          'Após a Constituição de 1824, foi promulgada em 15 de outubro de 1827 a Primeira Lei Geral de Educação do país, determinando escolas de primeiras letras em todas as vilas.',
          'A lei estabeleceu o Método Mútuo (monitores adiantados auxiliando o professor) e impôs uma separação rígida de gênero: o currículo das meninas era reduzido, substituindo matérias científicas por "prendas domésticas" (costura e afazeres do lar).'
        ],
        notaRodape: 'Ato Adicional de 1834: Descentralizou o ensino primário, transferindo a responsabilidade fiscal para as províncias e aprofundando as disparidades regionais.'
      },
      {
        id: 'ponto-2-3',
        numeroRomano: 'III',
        titulo: 'Imperial Colégio de Pedro II (1837) e a Reforma de 1854',
        subtitulo: 'A Escola Modelo da Elite e a Exclusão dos Escravizados',
        tipoIlustracao: 'pedroII',
        destaqueConceito: 'Padrão Secundário & Barreiras Sociais',
        paragrafos: [
          'Em 1837, foi criado no Rio de Janeiro o Colégio Pedro II, concebido como referência de excelência educacional. Por suas salas passaram figuras proeminentes como José de Alencar, Álvares de Azevedo, Manuel Bandeira, Fernanda Montenegro e Cássia Eller.',
          'Em 1854, a Reforma Couto Ferraz reorganizou a instrução na Corte: dividiu o primário em dois graus e estabeleceu disparidade salarial entre os mestres.',
          'Apesar da ampliação do sistema, a legislação proibiu categoricamente a matrícula de pessoas escravizadas nas escolas públicas, institucionalizando a exclusão racial e social.'
        ],
        notaRodape: 'Marco de Exclusão: A lei de 1854 consolidou juridicamente o interdito escolar aos escravizados no Brasil imperial.'
      },
      {
        id: 'ponto-2-4',
        numeroRomano: 'IV',
        titulo: 'O Método Intuitivo: "Lições de Coisas" (1879)',
        subtitulo: 'Pestalozzi, Iluminismo e o Contato Direto com a Experiência',
        tipoIlustracao: 'licoesCoisas',
        destaqueConceito: 'As Coisas Antes das Palavras',
        paragrafos: [
          'No final do século XIX, sob a influência do Iluminismo e das ideias pedagógicas de Pestalozzi, difundiu-se no Brasil o método intuitivo, conhecido como "Lições de Coisas".',
          'O princípio fundamental era desenvolver a observação ativa da criança pelo contato direto com objetos, espécimes da natureza e experiências concretas: "as coisas antes das palavras".',
          'Sua formalização ocorreu na reforma de Leôncio de Carvalho (1879) e nos pareceres de Rui Barbosa, transformando a rotina com passeios, coleções e diálogos práticos.'
        ],
        notaRodape: 'Pedagogia Moderna: A superação da memorização verbalista mecânica em favor da inteligência intuitiva e experimental.'
      }
    ],
    conceitosChave: [
      {
        termo: 'Aulas Régias',
        descricao: 'Aulas avulsas criadas pela Reforma Pombalina (1759) após a expulsão dos jesuítas, controladas pelo Estado.'
      },
      {
        termo: 'Método Mútuo / Lancasteriano',
        descricao: 'Sistema adotado pela Lei de 1827 em que alunos monitores mais adiantados ensinavam os colegas.'
      },
      {
        termo: 'Divisão de Gênero & Exclusão',
        descricao: 'Meninas aprendiam "prendas domésticas" em vez de geometria, e pessoas escravizadas eram vetadas por lei (1854).'
      },
      {
        termo: 'Lições de Coisas',
        descricao: 'Método intuitivo de Pestalozzi (1879) valorizando observação direta da natureza e objetos antes dos livros.'
      }
    ],
    citacaoDestaque: {
      texto: 'A educação brasileira no Império avançou entre reformas legislativas e contradições profundas: enquanto criava colégios modelo para a elite, vedava formalmente o acesso dos escravizados às salas de aula.',
      fonte: 'Análise Historiográfica • Aula 02'
    },
    curiosidade: {
      titulo: 'Gabinete de Curiosidades: A Inovadora Mestra Benedicta',
      texto: 'No século XIX, Benedicta da Trindade do Lado de Christo foi uma professora pública em São Paulo que desafiou as imposições da época. Enquanto as leis imperiais obrigavam o ensino de "prendas domésticas" (costura e bordado) exclusivamente às meninas, Benedicta recusou-se a lecionar tais afazeres. Em vez disso, ensinou aritmética, geometria e gramática para suas alunas, subvertendo a barreira de gênero e provando a capacidade intelectual plena das mulheres.',
      curiosidadeExtra: '💡 Você sabia? O Colégio Pedro II, fundado em 1837, foi criado inicialmente para educar o jovem imperador D. Pedro II e acabou se tornando a principal referência de currículo secundário de todo o Brasil Império.'
    },
    passatempos: {
      palavrasCruzadas: {
        titulo: 'Palavras Cruzadas do Império',
        instrucao: 'Preencha a grade cruzada com os conceitos e nomes da educação brasileira imperial:',
        grid: [
          [null, null, null, null, null, null, null, null, null],
          [null, 'P', 'O', 'M', 'B', 'A', 'L', null, null],
          [null, 'E', null, 'U', null, null, 'E', null, null],
          [null, 'D', null, 'T', null, null, 'I', null, null],
          [null, 'R', null, 'U', null, null, null, null, null],
          [null, 'O', null, 'O', null, null, null, null, null],
          [null, null, null, null, null, null, null, null, null],
          ['B', 'E', 'N', 'E', 'D', 'I', 'C', 'T', 'A']
        ],
        words: [
          {
            id: 'h1',
            number: 1,
            orientation: 'horizontal',
            row: 1,
            col: 1,
            word: 'POMBAL',
            clue: 'Primeiro-ministro português que expulsou os jesuítas e instituiu as Aulas Régias em 1759.'
          },
          {
            id: 'v1',
            number: 1,
            orientation: 'vertical',
            row: 1,
            col: 1,
            word: 'PEDRO',
            clue: 'Nome do imperador que batizou o célebre colégio fundado em 1837 no Rio de Janeiro.'
          },
          {
            id: 'v2',
            number: 2,
            orientation: 'vertical',
            row: 1,
            col: 3,
            word: 'MUTUO',
            clue: 'Método de ensino recomendado em 1827 em que monitores adiantados auxiliavam os professores.'
          },
          {
            id: 'v3',
            number: 3,
            orientation: 'vertical',
            row: 1,
            col: 6,
            word: 'LEI',
            clue: 'A primeira norma geral de 1827 que regulamentou a instrução pública no Império.'
          },
          {
            id: 'h4',
            number: 4,
            orientation: 'horizontal',
            row: 7,
            col: 0,
            word: 'BENEDICTA',
            clue: 'Mestra paulista que subverteu o currículo ao recusar-se a ensinar prendas domésticas às meninas.'
          }
        ]
      },
      linhaDoTempo: {
        titulo: 'Desafio da Linha do Tempo da Educação',
        instrucao: 'Reconecte cada grande acontecimento ao seu respectivo marco temporal na história do Brasil:',
        marcos: [
          {
            id: 'm-1759',
            ano: '1759',
            evento: 'Expulsão dos Jesuítas e criação das Aulas Régias',
            detalhe: 'Marquês de Pombal decreta a secularização do ensino e o controle do Estado sobre as escolas.'
          },
          {
            id: 'm-1808',
            ano: '1808',
            evento: 'Chegada da Família Real portuguesa ao Brasil',
            detalhe: 'D. João VI e a corte desembarcam no país, forçando a criação de estruturas culturais e científicas.'
          },
          {
            id: 'm-1827',
            ano: '1827',
            evento: 'Primeira Lei Geral da Educação e Método Mútuo',
            detalhe: 'Criação de escolas de primeiras letras com diferenciação de gênero e uso de monitores em sala.'
          },
          {
            id: 'm-1837',
            ano: '1837',
            evento: 'Fundação do Imperial Colégio de Pedro II',
            detalhe: 'Instituição modelo de ensino secundário que formou poetas, cientistas e líderes da nação.'
          },
          {
            id: 'm-1854',
            ano: '1854',
            evento: 'Reforma Couto Ferraz e Exclusão de Escravizados',
            detalhe: 'Organização do ensino em graus e proibição legal expressa de escravizados nas escolas públicas.'
          },
          {
            id: 'm-1879',
            ano: '1879',
            evento: 'Reforma Leôncio de Carvalho e "Lições de Coisas"',
            detalhe: 'Adoção do método intuitivo de Pestalozzi e Rui Barbosa: "as coisas antes das palavras".'
          }
        ]
      }
    }
  }
]
