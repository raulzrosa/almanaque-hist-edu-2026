import aula01Markdown from './aulas/aula-01.md?raw'
import aula02Markdown from './aulas/aula-02.md?raw'
import aula06Markdown from './aulas/aula-06.md?raw'

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
  },
  {
    id: 'aula-06',
    numero: 6,
    slug: 'historia-da-formacao-docente',
    titulo: 'A História da Formação Docente',
    subtitulo: 'Das Raízes Modernas Europeias à Institucionalização Universitária no Brasil (Séculos XVI – XX)',
    disciplina: 'História da Educação',
    semestre: '2026',
    dataPublicacao: 'Edição nº 6',
    modulo: 'Formação Docente & Escolas Normais',
    resumoMarkdown: aula06Markdown,
    pontosIlustrados: [
      {
        id: 'ponto-6-1',
        numeroRomano: 'I',
        titulo: 'Raízes Modernas: Lutero e Comênio',
        subtitulo: 'A Superação do Dom Acidental pela Arte do Método',
        tipoIlustracao: 'comenius',
        destaqueConceito: 'A Didactica Magna (1657)',
        paragrafos: [
          'A formação de professores começou a ser pensada de maneira mais sistemática a partir da Revolução Francesa, período em que se projetava um plano de instrução pública universal para todos os cidadãos, demandando a constituição de uma formação docente institucionalizada. Antes dessa inflexão histórica, os debates em torno de uma preparação formal e padronizada para os mestres eram escassos e pontuais, dependendo em grande medida de iniciativas eclesiásticas e de tratados filosóficos particulares.',
          'Entre os raros registros precursores sobre a preparação do educador, destacam-se as intervenções de Martinho Lutero (1483–1546) no contexto da Reforma Protestante. Lutero delineou fundamentos indispensáveis ao ofício do educador: o domínio rigoroso das línguas clássicas somado a uma sólida cultura geral, insurgindo-se contra métodos punitivos violentos e defendendo a expansão do ensino para as mulheres.',
          'Jan Amos Comênio (1592–1670) — o "Pai da Didática Moderna" — formalizou o papel teórico e prático do professor em sua obra seminal Didactica Magna (1657). Para Comênio, ensinar não é um dom acidental reservado a poucos intuitivos, mas uma arte que exige método rigoroso, intuição sensível, ética e respeito ao ritmo biológico e cognitivo do educando.'
        ],
        notaRodape: 'Jan Amos Comênio: "Ensinar não é um dom acidental, mas uma arte que exige o domínio de um método rigoroso, capaz de sincronizar o tempo, as lições e os materiais com a natureza humana."'
      },
      {
        id: 'ponto-6-2',
        numeroRomano: 'II',
        titulo: 'A Emergência das Escolas Normais na Europa',
        subtitulo: 'Démia, La Salle e o Padrão Revolucionário de Lakanal',
        destaqueConceito: 'A "Norma" Republicana',
        paragrafos: [
          'Na esteira de Comênio, outras experiências europeias semearam a profissionalização do magistério: Charles Démia (1637–1689) fundou na França os primeiros seminários voltados à preparação docente, e Jean-Baptiste de La Salle (1651–1719) instituiu casas formativas dedicadas a preparar irmãos para o magistério religioso leigo.',
          'Em 1794, no fervor da Revolução Francesa, Joseph Lakanal (1762–1845) propôs a criação das pioneiras Escolas Normais para preparar os educadores da nova República.',
          'O vocábulo "Normal" deriva do latim norma (régua, esquadro, parâmetro padrão), expressando a aspiração iluminista de fixar um modelo metodológico e científico comum para todos os mestres formadores de cidadãos.'
        ],
        notaRodape: 'Etimologia Política: A "Escola Normal" nasceu como o esquadro metodológico padrão para consolidar a instrução pública republicana universal.'
      },
      {
        id: 'ponto-6-3',
        numeroRomano: 'III',
        titulo: 'A Primeira Escola Normal no Brasil (1835)',
        subtitulo: 'Niterói, Fragilidades Provinciais e o Método Lancasteriano',
        tipoIlustracao: 'escolaNormal',
        destaqueConceito: 'O Marco Imperial Inaugural',
        paragrafos: [
          'No Brasil, o marco inaugural da formação docente institucionalizada ocorreu em 1835, com a criação da primeira Escola Normal do país, situada na cidade de Niterói — então capital da Província do Rio de Janeiro.',
          'Até então, o país dependia quase exclusivamente de ordens religiosas ou de mestres régios aprovados por meio de exames sumários e precários, que avaliavam apenas ler, escrever e contar, sem exigência de capacitação didático-pedagógica.',
          'Contudo, a pioneira instituição enfrentou profundos entraves: a descentralização sem recursos do Ato Adicional de 1834, um currículo rudimentar baseado no método Lancasteriano (treinamento mecânico de monitores) e soldos insignificantes que afastavam os candidatos.'
        ],
        notaRodape: 'Ato Adicional de 1834: Ao repassar a instrução primária para as províncias sem dotações orçamentárias suficientes, condenou as primeiras Escolas Normais à precariedade.'
      },
      {
        id: 'ponto-6-4',
        numeroRomano: 'IV',
        titulo: 'A Reforma Caetano de Campos (1890)',
        subtitulo: 'A República, a Escola-Modelo e a Feminização do Magistério',
        destaqueConceito: 'Modernização & Inserção Feminina',
        paragrafos: [
          'Com a Proclamação da República, o debate sobre o magistério adquiriu centralidade no projeto de modernização do Estado. A Reforma Caetano de Campos (1890), em São Paulo, representou um salto qualitativo fundamental na renovação das Escolas Normais.',
          'A reforma introduziu um currículo expandido com música, desenho e educação física pautadas no método intuitivo de Pestalozzi, além de instituir a pioneira Escola-Modelo anexa para estágio e prática pedagógica obrigatória.',
          'O período consolidou também o ingresso expressivo de mulheres na docência. Essa transição atendeu à carência masculina e legitimou o ofício como extensão aceitável do papel maternal; simultaneamente, abriu um canal histórico pioneiro de emancipação cultural e autonomia financeira para gerações de brasileiras.'
        ],
        notaRodape: 'Praça da República: A Escola Normal Caetano de Campos e sua Escola-Modelo anexa estabeleceram o padrão de formação docente e laboratório pedagógico para o país.'
      },
      {
        id: 'ponto-6-5',
        numeroRomano: 'V',
        titulo: 'Os Anos 1930 e os Institutos de Educação',
        subtitulo: 'Anísio Teixeira, Fernando de Azevedo e a Cientifização Universitária',
        tipoIlustracao: 'institutosEducacao',
        destaqueConceito: 'A Cientifização Universitária',
        paragrafos: [
          'Na esteira da Revolução de 1930 e do Manifesto dos Pioneiros da Educação Nova (1932), a formação de professores superou o modelo estritamente artesanal e empírico, abraçando a fundamentação científica sob o primado da psicologia, sociologia e biologia educacional.',
          'No Distrito Federal (Rio de Janeiro, 1932), sob a liderança de Anísio Teixeira, foi criado o Instituto de Educação do Rio de Janeiro (IERJ), concebido para elevar a qualificação dos mestres ao estatuto de nível superior.',
          'Em São Paulo (1933), liderada por Fernando de Azevedo, a Escola Normal transformou-se no Instituto de Educação de São Paulo, sendo anexada em 1934 à recém-fundada Universidade de São Paulo (USP), consolidando a inserção definitiva da formação docente no âmbito universitário.'
        ],
        notaRodape: 'Universidade de São Paulo (1934): A formação docente e as ciências pedagógicas são definitivamente integradas à estrutura universitária superior.'
      },
      {
        id: 'ponto-6-6',
        numeroRomano: 'VI',
        titulo: 'Do Ensino em Ciclos à LDB de 1996',
        subtitulo: 'Lei Orgânica (1946), CEFAMs e a Exigência do Nível Superior',
        destaqueConceito: 'A Hegemonia Universitária',
        paragrafos: [
          'Ao longo da segunda metade do século XX, marcos regulatórios sucessivos remodelaram o magistério: a Lei Orgânica do Ensino Normal (1946) bifurcou a formação em Escolas Normais Regionais (ginasiais, para regentes rurais) e Institutos de Educação (colegiais, para professores primários).',
          'A LDB nº 4.024/1961 ampliou a autonomia curricular e assegurou o direito de ingresso no ensino superior. Na década de 1980, os CEFAMs em São Paulo ofereceram tempo integral e bolsas para revalorizar a carreira.',
          'Por fim, a LDB nº 9.394/1996 estabeleceu como diretriz basilar da educação nacional que a preparação dos profissionais da Educação Básica deve realizar-se prioritariamente em nível superior, por meio de cursos de Pedagogia e licenciaturas plenas, encerrando a hegemonia das Escolas Normais.'
        ],
        notaRodape: 'LDB nº 9.394/1996: Fixou que a formação para a Educação Básica deve ocorrer prioritariamente em cursos superiores universitários (Pedagogia e Licenciaturas).'
      }
    ],
    conceitosChave: [
      {
        termo: 'Escola Normal (Origem do Termo)',
        descricao: 'Instituição criada na Revolução Francesa (norma = régua/esquadro) para fixar parâmetros pedagógicos homogêneos.'
      },
      {
        termo: 'Jan Amos Comênio & Didática',
        descricao: 'Pai da Didática Moderna (1657): transformou o ensino em método rigoroso, rompendo com a crença no dom acidental.'
      },
      {
        termo: '1ª Escola Normal do Brasil (1835)',
        descricao: 'Fundada em Niterói (RJ), sofreu com o desmonte orçamentário do Ato Adicional de 1834 e o método mecânico lancasteriano.'
      },
      {
        termo: 'Feminização do Magistério',
        descricao: 'Transição no final do século XIX que uniu a idealização do cuidado materno à conquista de espaço público e emancipação feminina.'
      },
      {
        termo: 'Cientifização Universitária & LDB 1996',
        descricao: 'Elevação da formação docente ao status acadêmico pelos Institutos de Educação (1930), culminando na exigência de nível superior da LDB 9394/96.'
      }
    ],
    citacaoDestaque: {
      texto: 'Ensinar não é um dom acidental ou privilégio reservado a poucos intuitivos, mas uma arte que exige o domínio de um método rigoroso, capaz de sincronizar o tempo, as lições e os materiais com as leis da própria natureza humana.',
      fonte: 'Jan Amos Comênio • Didactica Magna (1657)'
    },
    curiosidade: {
      titulo: 'Gabinete de Curiosidades: A Praça da República e as Normalistas',
      texto: 'O imponente edifício neoclássico situado na Praça da República, em São Paulo, foi inaugurado em 1894 para abrigar a Escola Normal Caetano de Campos e sua célebre Escola-Modelo anexa. Projetado por Ramos de Azevedo, o prédio simbolizava o ideal republicano de progresso através da instrução. Ao longo das primeiras décadas do século XX, o título de "normalista" conferia imenso prestígio social e cultural, tornando-se símbolo de distinção intelectual e elegância cívica. Hoje, o edifício histórico sedia a Secretaria da Educação do Estado de São Paulo!',
      curiosidadeExtra: '💡 Você sabia? Em 1835, a Primeira Escola Normal de Niterói impunha regras rígidas aos candidatos: apenas homens com mais de 18 anos podiam ingressar, sendo exigida comprovação formal de "conduta moral ilibada" emitida pelo pároco e juiz de paz.'
    },
    passatempos: {
      linhaDoTempo: {
        titulo: 'Linha do Tempo da Formação Docente',
        instrucao: 'Reconecte cada grande marco histórico ao desenvolvimento da formação docente:',
        mensagemVitoria: 'Extraordinário! Toda a Linha do Tempo da Formação Docente foi reconstruída com rigor!',
        marcos: [
          {
            id: 'm-1657',
            ano: '1657',
            evento: 'Publicação da "Didactica Magna" por Comênio',
            detalhe: 'Jan Amos Comênio sistematiza a didática moderna como método científico, superando a visão de dom fortuito.'
          },
          {
            id: 'm-1794',
            ano: '1794',
            evento: 'Criação das Escolas Normais por Joseph Lakanal',
            detalhe: 'A Revolução Francesa institui a "norma" pedagógica republicana para uniformizar a formação de mestres.'
          },
          {
            id: 'm-1835',
            ano: '1835',
            evento: 'Fundação da Primeira Escola Normal do Brasil (Niterói)',
            detalhe: 'Marco inaugural no Império, que enfrentou a escassez de verbas do Ato Adicional de 1834 e baixos salários.'
          },
          {
            id: 'm-1890',
            ano: '1890',
            evento: 'Reforma Caetano de Campos e a Escola-Modelo em SP',
            detalhe: 'Modernização curricular republicana, prática docente obrigatória e consolidação da mulher no magistério.'
          },
          {
            id: 'm-1934',
            ano: '1934',
            evento: 'Anexação do Instituto de Educação à USP',
            detalhe: 'Fernando de Azevedo e Anísio Teixeira consolidam a inserção da formação docente nas universidades brasileiras.'
          },
          {
            id: 'm-1996',
            ano: '1996',
            evento: 'Promulgação da LDB nº 9.394/1996',
            detalhe: 'Estabelece a exigência da formação docente da Educação Básica prioritariamente em nível superior.'
          }
        ]
      },
      quiz: {
        titulo: 'Sabatina Historiográfica: Formação Docente',
        perguntas: [
          {
            id: 1,
            enunciado: 'Por que as instituições criadas na Revolução Francesa receberam historicamente o nome de "Escolas Normais"?',
            opcoes: [
              'Porque atendiam apenas a alunos com comportamento disciplinado e dócil.',
              'Porque derivam do latim norma (régua ou esquadro), visando fixar um padrão metodológico e científico comum para todos os mestres.',
              'Porque seguiam exclusivamente as normas canônicas medievais da Igreja Católica.',
              'Porque eram escolas rotineiras e banais sem nenhuma exigência especial.'
            ],
            respostaCorreta: 1,
            explicacao: 'O termo foi instituído por Joseph Lakanal em 1794: "norma" representava o esquadro ou parâmetro padrão metodológico para toda a República.'
          },
          {
            id: 2,
            enunciado: 'Na obra seminal "Didactica Magna" (1657), Jan Amos Comênio rompeu com qual concepção tradicional sobre a docência?',
            opcoes: [
              'Com a ideia de que ensinar exige livros e cadernos, defendendo a memorização oral estrita.',
              'Com a crença de que ensinar é um "dom acidental" para poucos, demonstrando que é uma arte guiada por método rigoroso.',
              'Com o uso do afeto e da ética, defendendo a volta dos castigos físicos monásticos.',
              'Com o direito de as crianças descansarem entre as lições.'
            ],
            respostaCorreta: 1,
            explicacao: 'Comênio defendeu que o ato de ensinar é uma arte que exige método científico rigoroso ancorado na natureza humana, e não um dom acidental.'
          },
          {
            id: 3,
            enunciado: 'Quais entraves centrais marcaram a criação da Primeira Escola Normal do Brasil em Niterói (1835)?',
            opcoes: [
              'Falta de interesse do governo provincial e concorrência com faculdades de educação federais.',
              'Descentralização sem recursos do Ato Adicional de 1834, soldos irrisórios e método mecânico de monitores (Lancasteriano).',
              'Exigência de pós-graduação e doutorado prévio aos candidatos imperiais.',
              'Excesso de verbas públicas provinciais que inviabilizou a fiscalização dos gastos.'
            ],
            respostaCorreta: 1,
            explicacao: 'As províncias não receberam dotações orçamentárias pelo Ato Adicional de 1834, os soldos eram insignificantes e o currículo apenas treinava monitores lancasterianos.'
          },
          {
            id: 4,
            enunciado: 'Qual a ambivalência histórica da feminização do magistério a partir do final do século XIX?',
            opcoes: [
              'Extinguiu o direito das mulheres ao estudo superior e proibiu sua contratação pelo Estado.',
              'Atendeu à escassez masculina e justificou-se pelo papel maternal do cuidado, mas também abriu uma via inédita de emancipação intelectual e profissional.',
              'Resultou na demissão imediata de todas as normalistas formadas pela Escola Caetano de Campos.',
              'Impediu a criação de Escolas-Modelos anexas nos estados brasileiros.'
            ],
            respostaCorreta: 1,
            explicacao: 'Embora socialmente aceito sob o ideal maternal do cuidado, o magistério abriu às mulheres a conquista da autonomia, do espaço público e da independência financeira.'
          },
          {
            id: 5,
            enunciado: 'Qual diretriz basilar a LDB nº 9.394/1996 estabeleceu para a preparação dos educadores da Educação Básica?',
            opcoes: [
              'O retorno ao modelo das Escolas Normais Regionais de nível ginasial de 4 anos.',
              'A formação prioritariamente em nível superior, por meio de cursos de Pedagogia e licenciaturas universitárias plenas.',
              'A dispensa de diplomas para o ensino nas primeiras letras em escolas públicas.',
              'A substituição das universidades por cursos rápidos telepresenciais de poucas semanas.'
            ],
            respostaCorreta: 1,
            explicacao: 'A LDB de 1996 encerrou historicamente a hegemonia do nível médio das Escolas Normais, determinando que a docência na Educação Básica requer graduação superior plena.'
          }
        ]
      },
      cacaPalavras: {
        titulo: 'Caça-Palavras: Formação Docente',
        instrucao: 'Encontre na grade as 6 palavras fundamentais da história do magistério:',
        palavras: [
          { palavra: 'MAGISTERIO', dica: 'A profissão e vocação do educador e do ofício do ensino' },
          { palavra: 'DIDATICA', dica: 'Arte e método de ensinar formalizada por Jan Amos Comênio' },
          { palavra: 'COMENIO', dica: 'O Pai da Didática Moderna, autor da Didactica Magna' },
          { palavra: 'NORMAL', dica: 'Instituição cuja raiz latina remete a régua, esquadro e parâmetro' },
          { palavra: 'NITEROI', dica: 'Cidade onde foi fundada a primeira Escola Normal do Brasil em 1835' },
          { palavra: 'METODO', dica: 'Conjunto de procedimentos rigorosos que supera a ilusão do dom acidental' }
        ],
        gridSize: 10,
        fixedGrid: [
          ['M', 'A', 'G', 'I', 'S', 'T', 'E', 'R', 'I', 'O'],
          ['E', 'S', 'C', 'O', 'L', 'A', 'U', 'S', 'P', 'P'],
          ['D', 'I', 'D', 'A', 'T', 'I', 'C', 'A', 'F', 'V'],
          ['B', 'R', 'A', 'S', 'I', 'L', 'A', 'N', 'I', 'M'],
          ['C', 'O', 'M', 'E', 'N', 'I', 'O', 'T', 'E', 'E'],
          ['L', 'U', 'T', 'E', 'R', 'O', 'I', 'E', 'R', 'T'],
          ['N', 'O', 'R', 'M', 'A', 'L', 'A', 'S', 'T', 'O'],
          ['P', 'E', 'D', 'A', 'G', 'O', 'G', 'I', 'C', 'D'],
          ['N', 'I', 'T', 'E', 'R', 'O', 'I', 'E', 'N', 'O'],
          ['U', 'N', 'I', 'V', 'E', 'R', 'S', 'O', 'S', 'A']
        ]
      }
    }
  }
]
