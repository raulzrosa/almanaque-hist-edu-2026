export default function FluxCapacitorEngraving({ className = '' }) {
  return (
    <div className={`engraving-frame ${className}`}>
      <svg
        viewBox="0 0 600 280"
        xmlns="http://www.w3.org/2000/svg"
        className="engraving-svg"
        aria-label="Gravura do capacitor de fluxo e relógio da torre simbolizando a ética e o tempo"
      >
        <defs>
          <radialGradient id="flux-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#dfb25f" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f5edd8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Fundo de Pergaminho */}
        <rect width="600" height="280" fill="#f5edd8" />

        {/* Moldura dupla */}
        <rect x="8" y="8" width="584" height="264" fill="none" stroke="#b38634" strokeWidth="1.5" />
        <rect x="14" y="14" width="572" height="252" fill="none" stroke="#7e2014" strokeWidth="1" strokeDasharray="6 3" />

        <text x="24" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#7e2014" letterSpacing="2">
          TABULA III • FLUXUS & ETHICA TEMPORIS
        </text>
        <text x="576" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#8c641c" textAnchor="end" letterSpacing="1">
          10:04 P.M. • 1.21 GW
        </text>

        {/* ========================================================
            RELÓGIO DA TORRE (HILL VALLEY 10:04) - LADO ESQUERDO
            ======================================================== */}
        <g transform="translate(130, 135)">
          {/* Mostrador do Relógio */}
          <circle cx="0" cy="0" r="68" fill="#fdfaf2" stroke="#332216" strokeWidth="3" />
          <circle cx="0" cy="0" r="63" fill="none" stroke="#b38634" strokeWidth="1.5" />
          
          {/* Números Romanos do Relógio */}
          <g fontFamily="Cinzel, serif" fontSize="9" fontWeight="bold" fill="#332216" textAnchor="middle">
            <text x="0" y="-48">XII</text>
            <text x="49" y="3">III</text>
            <text x="0" y="55">VI</text>
            <text x="-48" y="3">IX</text>
          </g>

          {/* Ponteiros travados em 10:04 (O Raio na Torre) */}
          <line x1="0" y1="0" x2="-28" y2="-22" stroke="#7e2014" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="0" y1="0" x2="22" y2="-12" stroke="#221811" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="0" cy="0" r="4" fill="#b38634" />

          {/* Raio Estilizado em Gravura atingindo o topo do mostrador */}
          <path d="M 10 -105 L -5 -65 L 8 -65 L -3 -45" stroke="#7e2014" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <text x="0" y="80" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="10" fill="#5c432d" textAnchor="middle">
            10:04 — O Marco Temporal
          </text>
        </g>

        {/* Divisor Central Ornamental */}
        <line x1="270" y1="45" x2="270" y2="230" stroke="#cbb99d" strokeWidth="1" strokeDasharray="4 2" />
        <circle cx="270" cy="135" r="5" fill="#dfb25f" stroke="#7e2014" strokeWidth="1" />

        {/* ========================================================
            O CAPACITOR DE FLUXO (CAIXA COM Y CINTILANTE) - LADO DIREITO
            ======================================================== */}
        <g transform="translate(420, 135)">
          {/* Caixa metálica vintage do Capacitor */}
          <rect x="-80" y="-72" width="160" height="144" rx="6" fill="#ece0c7" stroke="#332216" strokeWidth="2.5" />
          <rect x="-74" y="-66" width="148" height="132" rx="4" fill="#221913" stroke="#8c641c" strokeWidth="1.2" />

          {/* Brilho de Fundo do Capacitor */}
          <circle cx="0" cy="0" r="60" fill="url(#flux-glow)" />

          {/* Os 3 tubos de vidro formando o 'Y' icônico */}
          <g stroke="#dfb25f" strokeWidth="6" strokeLinecap="round">
            {/* Braço Superior Esquerdo */}
            <line x1="0" y1="0" x2="-40" y2="-45" />
            {/* Braço Superior Direito */}
            <line x1="0" y1="0" x2="40" y2="-45" />
            {/* Haste Inferior */}
            <line x1="0" y1="0" x2="0" y2="50" />
          </g>

          {/* Feixes internos de luz pulsante */}
          <g stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round">
            <line x1="0" y1="0" x2="-38" y2="-43" />
            <line x1="0" y1="0" x2="38" y2="-43" />
            <line x1="0" y1="0" x2="0" y2="48" />
          </g>

          {/* Nódulos de conexão de fluxo */}
          <circle cx="-40" cy="-45" r="7" fill="#7e2014" stroke="#dfb25f" strokeWidth="1.5" />
          <circle cx="40" cy="-45" r="7" fill="#7e2014" stroke="#dfb25f" strokeWidth="1.5" />
          <circle cx="0" cy="50" r="7" fill="#7e2014" stroke="#dfb25f" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="8" fill="#7e2014" stroke="#dfb25f" strokeWidth="2" />

          {/* Plaqueta de advertência clássica em latim */}
          <rect x="-55" y="44" width="110" height="14" fill="#fdf8ea" stroke="#b38634" strokeWidth="0.8" />
          <text x="0" y="54" fontFamily="Cinzel, serif" fontSize="7" fill="#7e2014" textAnchor="middle" fontWeight="bold">
            FLUXUS CAPACITOR • 1985
          </text>

          <text x="0" y="86" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="10" fill="#5c432d" textAnchor="middle">
            O coração da máquina de viagem
          </text>
        </g>

        {/* Legenda de Placa Clássica */}
        <rect x="90" y="248" width="420" height="20" fill="#fdf8ea" stroke="#b38634" strokeWidth="1" />
        <text x="300" y="262" fontFamily="Cinzel, serif" fontSize="9.5" fill="#7e2014" textAnchor="middle" fontWeight="bold">
          FIG. III: TEMPO, ENERGIA & A ÉTICA INQUEBRÁVEL DO PRESENTE
        </text>
      </svg>
    </div>
  )
}

