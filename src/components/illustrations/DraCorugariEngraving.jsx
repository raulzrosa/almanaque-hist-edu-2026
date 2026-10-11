export default function DraCorugariEngraving({ className = '' }) {
  return (
    <div className={`engraving-frame dra-corugari-frame ${className}`}>
      <svg
        viewBox="0 0 280 340"
        xmlns="http://www.w3.org/2000/svg"
        className="engraving-svg dra-corugari-svg"
        aria-label="Gravura da Dra. Corugari - Mascote Coruja Professora inspirada no Dr. Caligari"
      >
        <defs>
          <pattern id="hatch-caligari" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#2b1a10" strokeWidth="0.8" opacity="0.18" />
          </pattern>
          <radialGradient id="eye-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffea78" />
            <stop offset="70%" stopColor="#dfa528" />
            <stop offset="100%" stopColor="#9e6610" />
          </radialGradient>
          <linearGradient id="hat-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2c221b" />
            <stop offset="50%" stopColor="#17110d" />
            <stop offset="100%" stopColor="#0a0705" />
          </linearGradient>
          <linearGradient id="coat-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#231912" />
            <stop offset="100%" stopColor="#100b08" />
          </linearGradient>
        </defs>

        {/* Fundo Pergaminho Expressionista com Linhas Angulares Distorcidas */}
        <rect width="280" height="340" fill="#f5eddb" />
        <rect width="280" height="340" fill="url(#hatch-caligari)" />

        {/* Sombras Expressionistas Distorcidas (Estilo Gabinete do Dr. Caligari, 1920) */}
        <polygon points="0,0 110,0 40,160 0,110" fill="#221811" opacity="0.12" />
        <polygon points="280,40 210,0 280,0" fill="#221811" opacity="0.15" />
        <polygon points="280,180 200,340 280,340" fill="#221811" opacity="0.14" />
        <polygon points="0,260 90,340 0,340" fill="#221811" opacity="0.1" />

        {/* Moldura dupla com cantos chanfrados estilo livro antigo */}
        <rect x="6" y="6" width="268" height="328" fill="none" stroke="#b38634" strokeWidth="1.6" />
        <rect x="11" y="11" width="258" height="318" fill="none" stroke="#7e2014" strokeWidth="1" strokeDasharray="5 3" />

        {/* Faixa Superior de Identificação */}
        <text x="140" y="24" fontFamily="Cinzel, serif" fontSize="8" fontWeight="bold" fill="#7e2014" textAnchor="middle" letterSpacing="1.5">
          ✦ GABINETE DE CURIOSIDADES ✦
        </text>

        {/* ========================================================
            ESTRUTURA DA DRA. CORUGARI (CORUJA PROFESSORA CALIGARI)
            ======================================================== */}
        <g id="dra-corugari-figure">
          {/* Corpo / Sobretudo Longo Expressionista com gola pontuda */}
          <path
            d="M 90 280 L 70 210 Q 75 160 95 150 L 140 160 L 185 150 Q 205 160 210 210 L 190 280 Z"
            fill="url(#coat-gradient)"
            stroke="#100b08"
            strokeWidth="2"
          />

          {/* Gola Alta Pontuda e Cravat / Babado Vitoriano Branco */}
          <polygon points="120,152 140,175 160,152 140,145" fill="#fcf8ec" stroke="#332216" strokeWidth="1.2" />
          <polygon points="135,160 140,182 145,160" fill="#8c2418" stroke="#52140e" strokeWidth="1" />
          {/* Lapelas angulares afiadas (estilo expressionista) */}
          <polygon points="98,150 120,185 110,195 90,165" fill="#3a2b20" stroke="#17110d" strokeWidth="1.2" />
          <polygon points="182,150 160,185 170,195 190,165" fill="#3a2b20" stroke="#17110d" strokeWidth="1.2" />

          {/* Asas dobradas como braços em casaco */}
          <path d="M 75 200 Q 60 235 80 270 Q 88 245 88 215 Z" fill="#2d2119" stroke="#17110d" strokeWidth="1.5" />
          <path d="M 205 200 Q 220 235 200 270 Q 192 245 192 215 Z" fill="#2d2119" stroke="#17110d" strokeWidth="1.5" />

          {/* Cabeça da Coruja */}
          <ellipse cx="140" cy="118" rx="46" ry="38" fill="#e8dac0" stroke="#2b1d14" strokeWidth="2" />

          {/* Penas da Cabeça e 'Cabelos' Desgrenhados estilo Dr. Caligari */}
          <path d="M 94 110 Q 78 100 82 118 Q 88 122 95 125" fill="#d9c6a7" stroke="#2b1d14" strokeWidth="1.5" />
          <path d="M 88 95 Q 72 88 80 108" fill="#d9c6a7" stroke="#2b1d14" strokeWidth="1.4" />
          <path d="M 186 110 Q 202 100 198 118 Q 192 122 185 125" fill="#d9c6a7" stroke="#2b1d14" strokeWidth="1.5" />
          <path d="M 192 95 Q 208 88 200 108" fill="#d9c6a7" stroke="#2b1d14" strokeWidth="1.4" />

          {/* Discos Faciais da Coruja (Plumagem ao redor dos olhos) */}
          <circle cx="118" cy="116" r="22" fill="#fdfaf2" stroke="#b38634" strokeWidth="1.4" />
          <circle cx="162" cy="116" r="22" fill="#fdfaf2" stroke="#b38634" strokeWidth="1.4" />

          {/* Olhos Grandes e Hipnóticos da Coruja-Professora */}
          <circle cx="118" cy="116" r="16" fill="url(#eye-glow)" stroke="#2b1d14" strokeWidth="1.5" />
          <circle cx="162" cy="116" r="16" fill="url(#eye-glow)" stroke="#2b1d14" strokeWidth="1.5" />
          {/* Pupilas expressivas */}
          <ellipse cx="118" cy="116" rx="9" ry="11" fill="#0d0907" />
          <ellipse cx="162" cy="116" rx="9" ry="11" fill="#0d0907" />
          {/* Brilhos de inteligência nos olhos */}
          <circle cx="115" cy="112" r="3.5" fill="#ffffff" />
          <circle cx="123" cy="120" r="1.5" fill="#ffffff" />
          <circle cx="159" cy="112" r="3.5" fill="#ffffff" />
          <circle cx="167" cy="120" r="1.5" fill="#ffffff" />

          {/* Óculos Redondos de Professora Vintage (com ponte dourada) */}
          <circle cx="118" cy="116" r="22" fill="none" stroke="#221811" strokeWidth="2.8" />
          <circle cx="162" cy="116" r="22" fill="none" stroke="#221811" strokeWidth="2.8" />
          <path d="M 140 114 Q 140 108 140 114" stroke="#b38634" strokeWidth="2.5" />
          <line x1="139" y1="114" x2="141" y2="114" stroke="#221811" strokeWidth="3" />
          {/* Haste de monóculo / cordão pendurado */}
          <path d="M 96 116 Q 84 140 92 165" fill="none" stroke="#b38634" strokeWidth="1.2" strokeDasharray="2 2" />

          {/* Bico Curvo Sábio */}
          <polygon points="135,120 145,120 140,136" fill="#3a2b20" stroke="#17110d" strokeWidth="1.4" />
          <path d="M 137 121 Q 140 134 140 136 Q 140 134 143 121 Z" fill="#b38634" opacity="0.3" />

          {/* ========================================================
              CARTOLA DO DR. CALIGARI (ANGULAR, PRETA, TORTA E CHARMOSA)
              ======================================================== */}
          <g id="caligari-top-hat" transform="rotate(-6 140 70)">
            {/* Aba da cartola */}
            <ellipse cx="140" cy="85" rx="52" ry="11" fill="#140f0c" stroke="#000" strokeWidth="2" />
            <path d="M 90 85 Q 140 92 190 85" stroke="#4a3727" strokeWidth="1" fill="none" />
            
            {/* Corpo cilíndrico angulado da cartola */}
            <polygon points="100,83 105,32 173,30 180,83" fill="url(#hat-gradient)" stroke="#000" strokeWidth="2" />
            
            {/* Topo da cartola distorcido expressionista */}
            <ellipse cx="139" cy="31" rx="34" ry="7" fill="#241a14" stroke="#000" strokeWidth="1.8" />
            
            {/* Fita de Veludo Rubi da Cartola */}
            <polygon points="101,81 102,72 178,72 179,81" fill="#8c2418" stroke="#52140e" strokeWidth="1" />
            {/* Fivela Dourada na fita */}
            <rect x="135" y="71" width="10" height="11" fill="none" stroke="#dfb25f" strokeWidth="1.8" />
          </g>

          {/* Livro Raro / Tomo Antigo apoiado sob as garras */}
          <g id="antique-book" transform="translate(140, 290)">
            <rect x="-65" y="-12" width="130" height="24" rx="3" fill="#63170e" stroke="#221811" strokeWidth="2" />
            <rect x="-60" y="-9" width="120" height="18" fill="#f7f1df" stroke="#b38634" strokeWidth="1" />
            <line x1="-58" y1="-3" x2="58" y2="-3" stroke="#221811" strokeWidth="0.8" opacity="0.4" />
            <line x1="-58" y1="3" x2="58" y2="3" stroke="#221811" strokeWidth="0.8" opacity="0.4" />
            {/* Lombada de couro */}
            <rect x="-68" y="-13" width="12" height="26" rx="2" fill="#420e08" stroke="#17110d" strokeWidth="1.5" />
            <text x="0" y="3" fontFamily="Cinzel, serif" fontSize="6.5" fontWeight="bold" fill="#7e2014" textAnchor="middle" letterSpacing="1">
              HISTORIA DOCENS
            </text>
          </g>

          {/* Garras pousadas no livro */}
          <circle cx="105" cy="278" r="4.5" fill="#dfb25f" stroke="#332216" strokeWidth="1.2" />
          <circle cx="112" cy="280" r="4.5" fill="#dfb25f" stroke="#332216" strokeWidth="1.2" />
          <circle cx="119" cy="278" r="4.5" fill="#dfb25f" stroke="#332216" strokeWidth="1.2" />

          <circle cx="161" cy="278" r="4.5" fill="#dfb25f" stroke="#332216" strokeWidth="1.2" />
          <circle cx="168" cy="280" r="4.5" fill="#dfb25f" stroke="#332216" strokeWidth="1.2" />
          <circle cx="175" cy="278" r="4.5" fill="#dfb25f" stroke="#332216" strokeWidth="1.2" />

          {/* Lupa Antiga Dourada segurada na asa direita */}
          <g id="magnifying-glass" transform="translate(68, 235) rotate(-22)">
            <line x1="0" y1="0" x2="0" y2="35" stroke="#b38634" strokeWidth="4" strokeLinecap="round" />
            <circle cx="0" cy="-6" r="14" fill="#fdfaf2" fillOpacity="0.45" stroke="#b38634" strokeWidth="2.8" />
            <path d="M -7 -10 Q 0 -15 7 -10" stroke="#ffffff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          </g>
        </g>

        {/* Placa de Identificação Inferior no Estilo Gabinete Antigo */}
        <g transform="translate(140, 318)">
          <rect x="-105" y="-12" width="210" height="20" rx="3" fill="#1b130e" stroke="#b38634" strokeWidth="1.4" />
          <text x="0" y="2" fontFamily="Cinzel, serif" fontSize="8.5" fontWeight="bold" fill="#dfb25f" textAnchor="middle" letterSpacing="1.2">
            DRA. CORUGARI
          </text>
        </g>
      </svg>
    </div>
  )
}

