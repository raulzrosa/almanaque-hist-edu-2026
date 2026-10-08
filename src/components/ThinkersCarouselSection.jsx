import { useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  School,
  BookOpen,
  Award,
  GraduationCap,
  Scale,
  Users
} from 'lucide-react'

const PENSADORES = [
  {
    id: 'demia',
    nome: 'Charles Démia',
    datas: '1637–1689',
    tituloEpoca: 'Precursor dos Seminários Docentes',
    imagemUrl: '/resumo6-3.png',
    regiao: 'Lyon, França • Século XVII',
    badge: 'Preparação Prévia Obrigatória',
    icone: School,
    teseCentral: 'Nenhum indivíduo deve assumir o ofício de ensinar sem prévia preparação pedagógica e moral examinada.',
    pontos: [
      {
        titulo: 'O Primeiro Seminário de Mestres',
        texto: 'Fundou em Lyon escolas gratuitas para crianças pobres e constatou que o maior gargalo era o despreparo dos professores; instituiu assim os primeiros seminários formativos da França dedicados a capacitar futuros mestres.'
      },
      {
        titulo: 'Fim do Improviso no Magistério',
        texto: 'Defendeu perante os magistrados e a sociedade que ensinar exige instrução prévia sistemática, combatendo a contratação amadora de mestres sem qualquer vocação ou método.'
      },
      {
        titulo: 'Regulamentos e Rotinas Didáticas',
        texto: 'Redigiu os célebres "Remontrances" (1668), pioneiro tratado que organizou regulamentos escolares, regras de convivência, deveres docentes e padrões práticos de aula.'
      }
    ],
    citacaoDestaque: 'A ignorância dos que ensinam é a fonte dos maiores desvios da juventude popular.',
    legado: 'Embrião das instituições modernas de formação docente na Europa ocidental.'
  },
  {
    id: 'lasalle',
    nome: 'Jean-Baptiste de La Salle',
    datas: '1651–1719',
    tituloEpoca: 'Organizador do Magistério Religioso Leigo',
    imagemUrl: '/resumo6-4.png',
    regiao: 'Reims & Paris, França • Séculos XVII – XVIII',
    badge: 'Método Simultâneo & Língua Materna',
    icone: Users,
    teseCentral: 'A primeira congregação dedicada exclusivamente à instrução popular e à formação integral de professores leigos.',
    pontos: [
      {
        titulo: 'Instituto dos Irmãos das Escolas Cristãs',
        texto: 'Instituiu uma ordem exclusivamente formada por irmãos leigos (não sacerdotes), que se dedicavam em tempo integral à docência nas escolas gratuitas para os filhos dos operários e camponeses.'
      },
      {
        titulo: 'Casas Formativas Permanentes em Reims',
        texto: 'Criou em Reims a pioneira casa de preparação contínua de professores para vilarejos e cidades, precursora direta das futuras Escolas Normais.'
      },
      {
        titulo: 'Revolução do Método Simultâneo e Vernáculo',
        texto: 'Superou o arcaico método individual (um aluno por vez) ao agrupar turmas por níveis de aprendizado sob ensino simultâneo, além de alfabetizar pioneiramente em francês (língua materna) em vez do latim.'
      }
    ],
    citacaoDestaque: 'Os mestres devem conduzir os alunos pelo bom exemplo, pela ordem e pela serenidade constante.',
    legado: 'Autor de "Guia das Escolas Cristãs" (1720), manual de referência didática universal.'
  },
  {
    id: 'lakanal',
    nome: 'Joseph Lakanal',
    datas: '1762–1845',
    tituloEpoca: 'Fundador das Escolas Normais Republicanas',
    imagemUrl: '/resumo6-5.png',
    regiao: 'Paris, França • Revolução Francesa (1794)',
    badge: 'A "Norma" Científica Republicana',
    icone: Scale,
    teseCentral: 'Fixar um esquadro metodológico e científico padrão ("norma") para que todos os mestres formem cidadãos da República.',
    pontos: [
      {
        titulo: 'Decreto Revolucionário de 1794',
        texto: 'Apresentou à Convenção Nacional francesa em 1794 o histórico decreto instituidor das pioneiras Écoles Normales, inaugurando a era moderna da formação docente estatal.'
      },
      {
        titulo: 'O Conceito Político da "Norma" (Esquadro)',
        texto: 'O termo deriva do latim "norma" (régua/esquadro padrão), expressando a ambição iluminista de criar um modelo uniforme, racional e laico de ensino contra o monopólio eclesiástico.'
      },
      {
        titulo: 'Multiplicadores e os Maiores Cientistas da Época',
        texto: 'Convocou gênios das ciências (como Laplace, Lagrange e Berthollet) para instruir 1.400 mestres em Paris, que retornaram às suas províncias para disseminar as ciências e os valores republicanos.'
      }
    ],
    citacaoDestaque: 'As Escolas Normais fornecerão à pátria mestres instruídos na arte suprema de formar homens livres.',
    legado: 'Marco inaugural das Escolas Normais como modelo internacional de formação pública de professores.'
  }
]

export default function ThinkersCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentThinker = PENSADORES[currentIndex]
  const IconComponent = currentThinker.icone

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PENSADORES.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === PENSADORES.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="thinkers-carousel-section">
      {/* Cabeçalho Editorial */}
      <div className="thinkers-header">
        <div className="thinkers-badge">
          <Sparkles size={14} /> Sessão Especial • Galeria dos Pioneiros
        </div>
        <h3 className="thinkers-title">
          Os 3 Precursores da Formação Docente na Europa
        </h3>
        <p className="thinkers-subtitle">
          De Démia a Lakanal: navegue pelo carrossel para explorar a trajetória e as ideias fundamentais dos pensadores que pavimentaram o caminho até a criação das Escolas Normais
        </p>
      </div>

      {/* Barra de Seleção Rápida dos Pensadores (Tabs do Carrossel) */}
      <div className="thinkers-tabs">
        {PENSADORES.map((thinker, idx) => {
          const isActive = idx === currentIndex
          return (
            <button
              key={thinker.id}
              type="button"
              className={`thinker-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ver ideias de ${thinker.nome}`}
            >
              <span className="thinker-tab-index">0{idx + 1}</span>
              <div className="thinker-tab-text">
                <span className="thinker-tab-name">{thinker.nome}</span>
                <span className="thinker-tab-dates">{thinker.datas}</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Cartão Principal do Carrossel */}
      <div className="thinker-card-display">
        {/* Painel Esquerdo: Retrato de Época */}
        <div className="thinker-portrait-column">
          <div className="thinker-image-frame">
            <img
              src={currentThinker.imagemUrl}
              alt={`Retrato de ${currentThinker.nome}`}
              className="thinker-img"
            />
            <div className="thinker-image-overlay">
              <span className="thinker-overlay-dates">{currentThinker.datas}</span>
            </div>
          </div>
          <div className="thinker-caption-box">
            <h4 className="thinker-caption-name">{currentThinker.nome}</h4>
            <div className="thinker-caption-role">{currentThinker.tituloEpoca}</div>
            <div className="thinker-caption-region">{currentThinker.regiao}</div>
          </div>
        </div>

        {/* Painel Direito: Resumo Estruturado das Ideias */}
        <div className="thinker-content-column">
          <div className="thinker-content-header">
            <div className="thinker-role-pill">
              <IconComponent size={14} />
              <span>{currentThinker.badge}</span>
            </div>
            <div className="thinker-slide-counter">
              Pensador {currentIndex + 1} de {PENSADORES.length}
            </div>
          </div>

          {/* Tese Central */}
          <div className="thinker-thesis-box">
            <GraduationCap size={16} className="thesis-icon" />
            <div className="thesis-text">
              <strong>Tese Central:</strong> "{currentThinker.teseCentral}"
            </div>
          </div>

          {/* Lista Sucinta das Principais Ideias */}
          <div className="thinker-ideas-list">
            {currentThinker.pontos.map((ponto, pIdx) => (
              <div key={pIdx} className="thinker-idea-item">
                <div className="idea-bullet-num">{pIdx + 1}</div>
                <div className="idea-body">
                  <h5 className="idea-title">{ponto.titulo}</h5>
                  <p className="idea-desc">{ponto.texto}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Citação / Síntese Histórica */}
          <div className="thinker-quote-footer">
            <BookOpen size={14} className="quote-icon" />
            <div className="quote-body">
              <span className="quote-phrase">"{currentThinker.citacaoDestaque}"</span>
              <span className="quote-legacy">✦ Legado: {currentThinker.legado}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Controles de Navegação do Carrossel (Setas & Indicadores) */}
      <div className="thinkers-carousel-controls">
        <button
          type="button"
          className="carousel-nav-btn prev-btn"
          onClick={handlePrev}
          aria-label="Pensador anterior"
        >
          <ChevronLeft size={20} />
          <span>Anterior</span>
        </button>

        <div className="carousel-dots">
          {PENSADORES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir para pensador ${idx + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="carousel-nav-btn next-btn"
          onClick={handleNext}
          aria-label="Próximo pensador"
        >
          <span>Próximo</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}

