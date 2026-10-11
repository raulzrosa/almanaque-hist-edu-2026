import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import { 
  Sparkles, 
  Orbit, 
  Telescope, 
  Compass, 
  Eye, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Atom,
  Clock,
  Users,
  Feather,
  Globe2
} from 'lucide-react'

// Componentes SVG de Gravura Astronômica para cada Objeto Celeste
function PlanetCelestialSvg({ isSelected }) {
  return (
    <svg viewBox="0 0 160 160" className="celestial-object-svg" aria-hidden="true">
      <defs>
        <radialGradient id="grad-planet" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#fff8e7" />
          <stop offset="40%" stopColor="#dfb25f" />
          <stop offset="85%" stopColor="#8c641c" />
          <stop offset="100%" stopColor="#3d2a0d" />
        </radialGradient>
      </defs>
      {/* Estrelas de fundo */}
      <circle cx="25" cy="30" r="1.5" fill="#fcf6e6" opacity="0.7" />
      <circle cx="135" cy="45" r="1.2" fill="#fcf6e6" opacity="0.6" />
      <circle cx="30" cy="130" r="1" fill="#fcf6e6" opacity="0.5" />
      <circle cx="140" cy="120" r="1.8" fill="#dfb25f" opacity="0.8" />
      
      {/* Órbitas secundárias pontilhadas */}
      <ellipse cx="80" cy="80" rx="72" ry="72" fill="none" stroke="#b38634" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
      <ellipse cx="80" cy="80" rx="60" ry="24" fill="none" stroke="#b38634" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" transform="rotate(-15 80 80)" />

      {/* Anel de Saturno/Planeta (Atrás) */}
      <path 
        d="M 18 80 A 66 18 0 0 1 142 80" 
        fill="none" 
        stroke="#dfb25f" 
        strokeWidth="5" 
        opacity="0.85" 
        strokeLinecap="round"
        transform="rotate(-22 80 80)"
      />

      {/* Globo Planetário Central */}
      <circle cx="80" cy="80" r="36" fill="url(#grad-planet)" stroke="#5a3d12" strokeWidth="1.6" />

      {/* Faixas de relevo / textura gravada no planeta */}
      <path d="M 47 70 Q 80 82 113 70" fill="none" stroke="#684714" strokeWidth="1.4" opacity="0.7" />
      <path d="M 45 84 Q 80 96 115 84" fill="none" stroke="#5a3d12" strokeWidth="1.2" opacity="0.6" />
      <path d="M 50 94 Q 80 104 110 94" fill="none" stroke="#3d2a0d" strokeWidth="1" opacity="0.5" />

      {/* Anel de Saturno/Planeta (Frente) */}
      <path 
        d="M 142 80 A 66 18 0 0 1 18 80" 
        fill="none" 
        stroke="#ffd57b" 
        strokeWidth="5" 
        opacity="0.95" 
        strokeLinecap="round"
        transform="rotate(-22 80 80)"
      />
      <path 
        d="M 142 80 A 66 18 0 0 1 18 80" 
        fill="none" 
        stroke="#8c2418" 
        strokeWidth="1.2" 
        opacity="0.6" 
        transform="rotate(-22 80 80)"
      />

      {/* Lua / Satélite em Órbita */}
      <circle cx="126" cy="48" r="5" fill="#fdfaf2" stroke="#8c2418" strokeWidth="1" />
    </svg>
  )
}

function SupernovaCelestialSvg({ isSelected }) {
  return (
    <svg viewBox="0 0 160 160" className="celestial-object-svg" aria-hidden="true">
      <defs>
        <radialGradient id="grad-nova" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#ffe699" />
          <stop offset="55%" stopColor="#dfb25f" />
          <stop offset="75%" stopColor="#ab382a" />
          <stop offset="100%" stopColor="#400b06" />
        </radialGradient>
      </defs>
      {/* Raios de explosão maiores */}
      {[0, 24, 48, 72, 96, 120, 144, 168, 192, 216, 240, 264, 288, 312, 336].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const len = i % 2 === 0 ? 68 : 52
        const x1 = 80 + Math.cos(rad) * 16
        const y1 = 80 + Math.sin(rad) * 16
        const x2 = 80 + Math.cos(rad) * len
        const y2 = 80 + Math.sin(rad) * len
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={i % 2 === 0 ? '#dfb25f' : '#ab382a'}
            strokeWidth={i % 2 === 0 ? 2 : 1.4}
            opacity="0.9"
            strokeLinecap="round"
          />
        )
      })}

      {/* Ondas de choque cósmicas */}
      <circle cx="80" cy="80" r="48" fill="none" stroke="#dfb25f" strokeWidth="1" strokeDasharray="5 3" opacity="0.6" />
      <circle cx="80" cy="80" r="62" fill="none" stroke="#8c2418" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.5" />

      {/* Estrela de 8 pontas no centro */}
      <path 
        d="M 80 34 L 88 72 L 126 80 L 88 88 L 80 126 L 72 88 L 34 80 L 72 72 Z" 
        fill="url(#grad-nova)" 
        stroke="#b38634" 
        strokeWidth="1.2" 
      />

      {/* Núcleo Incandescente */}
      <circle cx="80" cy="80" r="14" fill="#ffffff" stroke="#dfb25f" strokeWidth="2" />
      
      {/* Partículas e centelhas */}
      <circle cx="48" cy="48" r="2.5" fill="#ffd57b" />
      <circle cx="116" cy="52" r="2" fill="#ffffff" />
      <circle cx="118" cy="112" r="2.5" fill="#ffd57b" />
      <circle cx="44" cy="108" r="1.8" fill="#ffffff" />
    </svg>
  )
}

function OrbitCelestialSvg({ isSelected }) {
  return (
    <svg viewBox="0 0 160 160" className="celestial-object-svg" aria-hidden="true">
      {/* Círculo graduado de relógio solar e astrolábio */}
      <circle cx="80" cy="80" r="68" fill="none" stroke="#b38634" strokeWidth="1.5" />
      <circle cx="80" cy="80" r="64" fill="none" stroke="#8c2418" strokeWidth="0.8" strokeDasharray="3 2" />
      
      {/* Marcações de graus celestes */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const x1 = 80 + Math.cos(rad) * 64
        const y1 = 80 + Math.sin(rad) * 64
        const x2 = 80 + Math.cos(rad) * 68
        const y2 = 80 + Math.sin(rad) * 68
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#b38634" strokeWidth="1.2" />
      })}

      {/* Órbitas Elípticas entrelaçadas */}
      <ellipse cx="80" cy="80" rx="58" ry="22" fill="none" stroke="#dfb25f" strokeWidth="1.5" transform="rotate(-30 80 80)" />
      <ellipse cx="80" cy="80" rx="58" ry="22" fill="none" stroke="#8c2418" strokeWidth="1.2" transform="rotate(30 80 80)" />
      <ellipse cx="80" cy="80" rx="58" ry="22" fill="none" stroke="#b38634" strokeWidth="1" transform="rotate(90 80 80)" />

      {/* Astro Central (O Sol das Horas) */}
      <circle cx="80" cy="80" r="16" fill="#fbf5e6" stroke="#8c2418" strokeWidth="1.6" />
      <circle cx="80" cy="80" r="10" fill="#dfb25f" opacity="0.6" />

      {/* Corpos em órbita pontual */}
      <circle cx="120" cy="56" r="4.5" fill="#fdfaf2" stroke="#8c2418" strokeWidth="1.2" />
      <circle cx="44" cy="98" r="4" fill="#dfb25f" stroke="#4a3726" strokeWidth="1" />
      <circle cx="80" cy="24" r="3.5" fill="#ffffff" stroke="#b38634" strokeWidth="1" />

      {/* Linhas de quadrante astronômico */}
      <line x1="80" y1="18" x2="80" y2="142" stroke="#b38634" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.5" />
      <line x1="18" y1="80" x2="142" y2="80" stroke="#b38634" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.5" />
    </svg>
  )
}

function TravelersCelestialSvg({ isSelected }) {
  return (
    <svg viewBox="0 0 160 160" className="celestial-object-svg" aria-hidden="true">
      <defs>
        <linearGradient id="grad-comet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#dfb25f" />
          <stop offset="100%" stopColor="#8c2418" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Trajetória de gravidade curvilínea */}
      <path 
        d="M 20 140 Q 60 70 140 30" 
        fill="none" 
        stroke="#dfb25f" 
        strokeWidth="1.4" 
        strokeDasharray="4 3" 
        opacity="0.7" 
      />
      <path 
        d="M 30 145 Q 85 95 145 50" 
        fill="none" 
        stroke="#8c2418" 
        strokeWidth="1" 
        strokeDasharray="3 3" 
        opacity="0.5" 
      />

      {/* Cauda Luminosa do Cometa Viajante */}
      <path 
        d="M 125 45 Q 75 90 25 130 Q 70 100 120 50 Z" 
        fill="url(#grad-comet)" 
        opacity="0.75" 
      />

      {/* Núcleo do Cometa (Estudante/Docente Navegante) */}
      <circle cx="124" cy="46" r="9" fill="#ffffff" stroke="#dfb25f" strokeWidth="2" />
      <circle cx="124" cy="46" r="5" fill="#8c2418" />

      {/* Dois astros em atração mútua (Professor & Turma) */}
      <circle cx="60" cy="65" r="16" fill="#fbf5e6" stroke="#8c2418" strokeWidth="1.5" />
      <circle cx="60" cy="65" r="10" fill="#dfb25f" opacity="0.5" />
      <circle cx="95" cy="105" r="11" fill="#fbf5e6" stroke="#b38634" strokeWidth="1.5" />
      <circle cx="95" cy="105" r="7" fill="#8c641c" opacity="0.4" />

      {/* Linhas de Força Gravitacional entre os dois corpos */}
      <line x1="60" y1="65" x2="95" y2="105" stroke="#b38634" strokeWidth="1.2" strokeDasharray="3 2" />
      <path d="M 68 58 Q 80 82 88 100" fill="none" stroke="#dfb25f" strokeWidth="1" opacity="0.8" />
    </svg>
  )
}

function ArtifactsCelestialSvg({ isSelected }) {
  return (
    <svg viewBox="0 0 160 160" className="celestial-object-svg" aria-hidden="true">
      {/* Nebulosa de partículas e poeira cósmica */}
      {[
        [28, 40], [42, 28], [118, 36], [132, 54],
        [32, 120], [46, 134], [120, 126], [136, 110],
        [74, 22], [88, 138], [20, 80], [142, 80]
      ].map(([cx, cy], i) => (
        <circle 
          key={i} 
          cx={cx} 
          cy={cy} 
          r={i % 3 === 0 ? 2 : 1.2} 
          fill={i % 2 === 0 ? '#dfb25f' : '#fcf6e6'} 
          opacity={0.65} 
        />
      ))}

      {/* Círculo do Telescópio / Lente Astronômica */}
      <circle cx="80" cy="80" r="54" fill="#fdfaf2" stroke="#b38634" strokeWidth="2" opacity="0.95" />
      <circle cx="80" cy="80" r="48" fill="none" stroke="#7e2014" strokeWidth="1" strokeDasharray="4 2" />

      {/* Instrumento: O Telescópio de Latão */}
      <g transform="translate(80, 80) rotate(-35)">
        {/* Tubo Óptico Principal */}
        <polygon points="-44,-8 34,-12 34,12 -44,8" fill="#d4aa50" stroke="#4a3726" strokeWidth="1.4" />
        <line x1="-12" y1="-9.5" x2="-12" y2="9.5" stroke="#7e2014" strokeWidth="1.2" />
        <line x1="12" y1="-11" x2="12" y2="11" stroke="#7e2014" strokeWidth="1.2" />
        {/* Lente Objetiva */}
        <ellipse cx="34" cy="0" rx="4" ry="12" fill="#fff8e7" stroke="#4a3726" strokeWidth="1.2" />
        {/* Ocular */}
        <rect x="-52" y="-5" width="8" height="10" fill="#8c641c" stroke="#4a3726" strokeWidth="1" />
        {/* Tripé de Latão */}
        <line x1="0" y1="8" x2="-22" y2="44" stroke="#4a3726" strokeWidth="1.8" />
        <line x1="0" y1="8" x2="22" y2="44" stroke="#4a3726" strokeWidth="1.8" />
        <line x1="0" y1="8" x2="0" y2="46" stroke="#8c2418" strokeWidth="1.4" />
      </g>

      {/* Caderno Escolar e Tinteiro gravados na base */}
      <g transform="translate(80, 118)">
        <polygon points="-24,-4 24,-4 20,12 -20,12" fill="#eeddbb" stroke="#4a3726" strokeWidth="1" />
        <circle cx="0" cy="4" r="3" fill="#8c2418" />
      </g>
    </svg>
  )
}

function GalaxyCelestialSvg({ isSelected }) {
  return (
    <svg viewBox="0 0 160 160" className="celestial-object-svg" aria-hidden="true">
      <defs>
        <radialGradient id="grad-galaxy" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#ffe699" />
          <stop offset="70%" stopColor="#dfb25f" />
          <stop offset="95%" stopColor="#8c2418" />
          <stop offset="100%" stopColor="#29120e" />
        </radialGradient>
      </defs>

      {/* Halo Exterior da Galáxia */}
      <ellipse cx="80" cy="80" rx="68" ry="46" fill="none" stroke="#dfb25f" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.5" transform="rotate(-20 80 80)" />
      <ellipse cx="80" cy="80" rx="60" ry="36" fill="none" stroke="#8c2418" strokeWidth="0.9" opacity="0.4" transform="rotate(-20 80 80)" />

      {/* Braços Espirais da Galáxia */}
      {/* Braço 1 */}
      <path 
        d="M 80 80 Q 95 65 118 70 Q 138 78 144 94 Q 138 114 112 118" 
        fill="none" 
        stroke="#dfb25f" 
        strokeWidth="3.2" 
        strokeLinecap="round" 
        opacity="0.85" 
      />
      <path 
        d="M 80 80 Q 95 65 118 70 Q 138 78 144 94 Q 138 114 112 118" 
        fill="none" 
        stroke="#ffffff" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
        opacity="0.9" 
      />

      {/* Braço 2 */}
      <path 
        d="M 80 80 Q 65 95 42 90 Q 22 82 16 66 Q 22 46 48 42" 
        fill="none" 
        stroke="#dfb25f" 
        strokeWidth="3.2" 
        strokeLinecap="round" 
        opacity="0.85" 
      />
      <path 
        d="M 80 80 Q 65 95 42 90 Q 22 82 16 66 Q 22 46 48 42" 
        fill="none" 
        stroke="#ffffff" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
        opacity="0.9" 
      />

      {/* Núcleo Brilhante Galáctico */}
      <ellipse cx="80" cy="80" rx="20" ry="14" fill="url(#grad-galaxy)" stroke="#dfb25f" strokeWidth="1.5" transform="rotate(-20 80 80)" />
      <circle cx="80" cy="80" r="7" fill="#ffffff" />

      {/* Radiação de Luz transbordando */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const x1 = 80 + Math.cos(rad) * 22
        const y1 = 80 + Math.sin(rad) * 16
        const x2 = 80 + Math.cos(rad) * 36
        const y2 = 80 + Math.sin(rad) * 26
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#dfb25f" strokeWidth="1" opacity="0.6" />
      })}
    </svg>
  )
}

export default function CelestialSchoolGame({ config }) {
  const objetos = config?.objetos || []
  const [selectedId, setSelectedId] = useState(objetos[0]?.id || '')
  const [discoveredIds, setDiscoveredIds] = useState(new Set([objetos[0]?.id || '']))
  const [hasCelebratedAll, setHasCelebratedAll] = useState(false)

  // Objeto celeste atualmente selecionado
  const selectedObject = objetos.find((obj) => obj.id === selectedId) || objetos[0]
  const currentIndex = objetos.findIndex((obj) => obj.id === selectedId)

  // Ao selecionar um objeto celeste
  const handleSelectObject = (id) => {
    setSelectedId(id)
    setDiscoveredIds((prev) => {
      const next = new Set(prev)
      next.add(id)
      return next
    })
  }

  // Efeito de celebração quando todos os 6 objetos celestes forem visitados
  useEffect(() => {
    if (!hasCelebratedAll && objetos.length > 0 && discoveredIds.size === objetos.length) {
      setHasCelebratedAll(true)
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#dfb25f', '#8c2418', '#b38634', '#ffd57b', '#ffffff']
        })
      } catch (err) {
        // silencioso
      }
    }
  }, [discoveredIds, objetos.length, hasCelebratedAll])

  const handlePrev = () => {
    if (currentIndex > 0) {
      handleSelectObject(objetos[currentIndex - 1].id)
    }
  }

  const handleNext = () => {
    if (currentIndex < objetos.length - 1) {
      handleSelectObject(objetos[currentIndex + 1].id)
    }
  }

  // Renderizador do SVG correspondente
  const renderCelestialSvg = (tipo, isSelected) => {
    switch (tipo) {
      case 'planetas':
      case 'corpos':
        return <PlanetCelestialSvg isSelected={isSelected} />
      case 'supernova':
        return <SupernovaCelestialSvg isSelected={isSelected} />
      case 'orbitas':
        return <OrbitCelestialSvg isSelected={isSelected} />
      case 'viajantes':
        return <TravelersCelestialSvg isSelected={isSelected} />
      case 'artefatos':
        return <ArtifactsCelestialSvg isSelected={isSelected} />
      case 'galaxia':
        return <GalaxyCelestialSvg isSelected={isSelected} />
      default:
        return <PlanetCelestialSvg isSelected={isSelected} />
    }
  }

  const getObjectIcon = (tipo) => {
    switch (tipo) {
      case 'planetas':
      case 'corpos':
        return <Globe2 size={15} />
      case 'supernova':
        return <Sparkles size={15} />
      case 'orbitas':
        return <Clock size={15} />
      case 'viajantes':
        return <Users size={15} />
      case 'artefatos':
        return <Feather size={15} />
      case 'galaxia':
        return <Atom size={15} />
      default:
        return <Orbit size={15} />
    }
  }

  return (
    <div className="celestial-game-container">
      {/* ========================================================
          CABEÇALHO EDITORIAL DO OBSERVATÓRIO CELESTE
          ======================================================== */}
      <header className="celestial-header">
        <div className="celestial-header-top">
          <span className="celestial-badge">
            <Telescope size={13} /> Observatório Astronômico do Almanaque
          </span>
          <span className="celestial-counter">
            <Compass size={13} /> Descobertas: <strong>{discoveredIds.size} / {objetos.length}</strong> astros
          </span>
        </div>

        <h3 className="celestial-title">
          {config?.titulo || 'O Cosmos da Cultura Escolar'}
        </h3>
        
        <p className="celestial-lead">
          {config?.subtitulo || 'A escola não é um espelho passivo do céu exterior; ela é um universo próprio com gravidade, atmosfera e matéria viva.'}
        </p>

        <div className="celestial-instructions">
          ✦ <em>Clique nos objetos celestes abaixo para abrir a luneta e descobrir como cada elemento astronômico explica o funcionamento real da escola:</em>
        </div>
      </header>

      {/* ========================================================
          GRADE DE IMAGENS CLICÁVEIS DOS OBJETOS CELESTES
          ======================================================== */}
      <div className="celestial-objects-grid" role="region" aria-label="Objetos celestes clicáveis">
        {objetos.map((item, index) => {
          const isSelected = item.id === selectedId
          const isDiscovered = discoveredIds.has(item.id)

          return (
            <button
              key={item.id}
              type="button"
              className={`celestial-card-btn ${isSelected ? 'selected' : ''} ${isDiscovered ? 'discovered' : ''}`}
              onClick={() => handleSelectObject(item.id)}
              aria-pressed={isSelected}
              title={`Clique para explorar: ${item.nomeAstro}`}
            >
              {/* Emblema numérico romano */}
              <div className="celestial-card-numeral">
                {['I', 'II', 'III', 'IV', 'V', 'VI'][index] || index + 1}
              </div>

              {/* Selo de Descoberto */}
              {isDiscovered && (
                <div className="celestial-check-badge" title="Astro explorado">
                  <CheckCircle2 size={13} />
                </div>
              )}

              {/* Gravura Astronômica do Objeto */}
              <div className="celestial-art-frame">
                {renderCelestialSvg(item.tipo, isSelected)}
              </div>

              {/* Rótulo do Objeto */}
              <div className="celestial-card-info">
                <span className="celestial-card-name">{item.nomeAstro}</span>
                <span className="celestial-card-metaphor">
                  {getObjectIcon(item.tipo)} {item.analogiaCurta}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* ========================================================
          PAINEL TELESCÓPICO: A REVELAÇÃO DO ASTRO SELECIONADO
          ======================================================== */}
      {selectedObject && (
        <article className="celestial-revelation-panel" aria-live="polite">
          <div className="revelation-inner">
            {/* Cabeçalho do Painel Revelador */}
            <div className="revelation-header">
              <div className="revelation-titles">
                <span className="revelation-kicker">
                  {getObjectIcon(selectedObject.tipo)} Objeto Celeste • {selectedObject.disticoLatino || 'Astro Scholasticus'}
                </span>
                <h4 className="revelation-astro-name">
                  {selectedObject.nomeAstro}: {selectedObject.analogiaCurta}
                </h4>
              </div>

              {/* Controles de Navegação Rápida entre Astros */}
              <div className="revelation-nav-arrows">
                <button
                  type="button"
                  className="btn-celestial-nav"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  title="Astro Anterior"
                >
                  <ChevronLeft size={16} /> Anterior
                </button>
                <span className="revelation-index-indicator">
                  {currentIndex + 1} de {objetos.length}
                </span>
                <button
                  type="button"
                  className="btn-celestial-nav"
                  onClick={handleNext}
                  disabled={currentIndex === objetos.length - 1}
                  title="Próximo Astro"
                >
                  Próximo <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Conteúdo em Duas Colunas: Metáfora Poética vs Explicação da Escola */}
            <div className="revelation-body-grid">
              {/* Lado Esquerdo: A Metáfora Astronômica no Almanaque */}
              <div className="revelation-column metaphor-column">
                <div className="revelation-box-label">
                  <Sparkles size={14} /> A Metáfora Astronômica do Almanaque
                </div>
                <blockquote className="metaphor-quote">
                  "{selectedObject.textoMetfora}"
                </blockquote>
                <div className="metaphor-engraving-preview">
                  <div className="mini-engraving-badge">
                    {renderCelestialSvg(selectedObject.tipo, true)}
                  </div>
                  <span className="metaphor-hint">
                    ✦ Representação astronômica da dinâmica escolar
                  </span>
                </div>
              </div>

              {/* Lado Direito: O Que Isso Explica Sobre a Escola? */}
              <div className="revelation-column school-column">
                <div className="revelation-box-label highlight-label">
                  <BookOpen size={14} /> O que isso explica sobre a Escola?
                </div>
                
                <h5 className="school-concept-title">
                  {selectedObject.conceitoEscolar}
                </h5>

                <div className="school-explanation-text">
                  {selectedObject.explicacaoEscola.map((paragrafo, pIdx) => (
                    <p key={pIdx}>{paragrafo}</p>
                  ))}
                </div>

                {/* Nota do Historiador / Citação Teórica de Referência */}
                {selectedObject.teoricoRef && (
                  <div className="school-theory-tag">
                    <strong>Referência Teórica:</strong> {selectedObject.teoricoRef}
                  </div>
                )}
              </div>
            </div>

            {/* Rodapé do Painel com Conexão de Fechamento */}
            <div className="revelation-footer">
              <div className="revelation-footer-hint">
                💡 <em>A cultura escolar não se limita a cumprir leis: ela possui autonomia, inventa saberes e possui gravidade própria.</em>
              </div>
              <button
                type="button"
                className="btn-vintage btn-vintage-outline"
                onClick={handleNext}
                disabled={currentIndex === objetos.length - 1}
              >
                Explorar Próximo Objeto Celeste <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </article>
      )}

      {/* Parabéns por Desvendar o Universo Escolar */}
      {discoveredIds.size === objetos.length && (
        <aside className="celestial-completion-banner">
          <div className="completion-heraldry">✦ 🪐 🔭 📜 ✦</div>
          <h4>Cosmologia Completa da Cultura Escolar Desvendada!</h4>
          <p>
            Você percorreu todos os corpos celestes do universo escolar! Assim como os eventos em uma galáxia irradiam energia para além de suas bordas e afetam o tecido do espaço-tempo ao redor, a cultura escolar não fica confinada entre quatro paredes: ela forma identidades, molda olhares e projeta luz contínua sobre toda a sociedade humana.
          </p>
        </aside>
      )}
    </div>
  )
}

