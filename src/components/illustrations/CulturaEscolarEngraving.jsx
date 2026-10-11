export default function CulturaEscolarEngraving({ className = '' }) {
  return (
    <div className={`engraving-frame ${className}`}>
      <svg
        viewBox="0 0 600 280"
        xmlns="http://www.w3.org/2000/svg"
        className="engraving-svg"
        aria-label="Gravura alegórica da Cultura Escolar e a Escola como Universo Próprio"
      >
        <defs>
          <pattern id="hatch-cultura" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#b38634" strokeWidth="0.6" opacity="0.25" />
          </pattern>
          <linearGradient id="celestial-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dfb25f" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8c2418" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Fundo Pergaminho */}
        <rect width="600" height="280" fill="#f5edd8" />
        <rect width="600" height="280" fill="url(#hatch-cultura)" opacity="0.15" />

        {/* Moldura dupla clássica de frontispício */}
        <rect x="8" y="8" width="584" height="264" fill="none" stroke="#b38634" strokeWidth="1.5" />
        <rect x="14" y="14" width="572" height="252" fill="none" stroke="#7e2014" strokeWidth="1" strokeDasharray="6 3" />

        {/* Cabeçalho Historiográfico */}
        <text x="24" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#7e2014" letterSpacing="2">
          TABULA IX • CULTURA SCHOLARIS ET COSMOS
        </text>
        <text x="576" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#8c641c" textAnchor="end" letterSpacing="1">
          ANOS 1970–1980 • A CAIXA-PRETA DA ESCOLA
        </text>

        {/* ========================================================
            LADO ESQUERDO: O COSMOS DA ESCOLA (ÓRBITAS & ASTROS)
            ======================================================== */}
        <g transform="translate(150, 136)">
          {/* Esfera Armilar / Órbitas Escolares */}
          <circle cx="0" cy="0" r="68" fill="none" stroke="#b38634" strokeWidth="1.2" strokeDasharray="4 2" />
          <ellipse cx="0" cy="0" rx="76" ry="26" fill="none" stroke="#7e2014" strokeWidth="1.4" transform="rotate(-25)" />
          <ellipse cx="0" cy="0" rx="76" ry="26" fill="none" stroke="#8c641c" strokeWidth="1.2" transform="rotate(35)" />
          
          {/* Núcleo Central: O Sol da Cultura Escolar */}
          <circle cx="0" cy="0" r="24" fill="#fdfaf2" stroke="#8c2418" strokeWidth="1.8" />
          <circle cx="0" cy="0" r="18" fill="url(#celestial-glow)" />
          
          {/* Raios Radiantes */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            return (
              <line
                key={i}
                x1={Math.cos(rad) * 25}
                y1={Math.sin(rad) * 25}
                x2={Math.cos(rad) * 35}
                y2={Math.sin(rad) * 35}
                stroke="#b38634"
                strokeWidth="1.4"
              />
            )
          })}

          <text x="0" y="4" fontFamily="Cinzel, serif" fontSize="9" fontWeight="bold" fill="#7e2014" textAnchor="middle">
            SCHOLA
          </text>

          {/* Planetas em Órbita: Dimensões da Cultura Escolar */}
          {/* Material */}
          <circle cx="-54" cy="-30" r="6" fill="#fbf5e6" stroke="#7e2014" strokeWidth="1.2" />
          <text x="-54" y="-40" fontFamily="Cinzel, serif" fontSize="6.5" fill="#5c432d" textAnchor="middle">MATERIAL</text>
          
          {/* Cognitiva */}
          <circle cx="56" cy="-26" r="6" fill="#fbf5e6" stroke="#b38634" strokeWidth="1.2" />
          <text x="56" y="-36" fontFamily="Cinzel, serif" fontSize="6.5" fill="#5c432d" textAnchor="middle">COGNITIVA</text>
          
          {/* Normativa */}
          <circle cx="-50" cy="36" r="6" fill="#fbf5e6" stroke="#b38634" strokeWidth="1.2" />
          <text x="-50" y="52" fontFamily="Cinzel, serif" fontSize="6.5" fill="#5c432d" textAnchor="middle">NORMATIVA</text>

          {/* Social */}
          <circle cx="52" cy="38" r="6" fill="#fbf5e6" stroke="#7e2014" strokeWidth="1.2" />
          <text x="52" y="54" fontFamily="Cinzel, serif" fontSize="6.5" fill="#5c432d" textAnchor="middle">SOCIAL</text>

          {/* Faixa inferior */}
          <path d="M -90 76 Q 0 66 90 76 L 85 92 Q 0 82 -85 92 Z" fill="#fdfaf2" stroke="#4a3726" strokeWidth="1" />
          <text x="0" y="85" fontFamily="Cinzel, serif" fontSize="7.5" fontWeight="bold" fill="#7e2014" textAnchor="middle" letterSpacing="1">
            "NON SPECULUM, SED UNIVERSUM"
          </text>
        </g>

        {/* Divisor Ornamental Central */}
        <line x1="285" y1="46" x2="285" y2="232" stroke="#cbb898" strokeWidth="1" strokeDasharray="4 2" />
        <circle cx="285" cy="139" r="4.5" fill="#dfb25f" stroke="#7e2014" strokeWidth="1" />

        {/* ========================================================
            LADO DIREITO: A CAIXA-PRETA, O CADERNO & O COTIDIANO
            ======================================================== */}
        <g transform="translate(435, 136)">
          {/* Caixa-Preta Sendo Aberta / O Baú dos Vestígios Escolares */}
          <g transform="translate(0, -32)">
            {/* Tampa aberta */}
            <polygon points="-42,-18 0,-34 42,-18 0,-6" fill="#eeddbb" stroke="#7e2014" strokeWidth="1.4" />
            {/* Corpo do Baú */}
            <polygon points="-42,-18 42,-18 42,16 -42,16" fill="#fbf6ea" stroke="#4a3726" strokeWidth="1.4" />
            <line x1="0" y1="-6" x2="0" y2="16" stroke="#b38634" strokeWidth="1.5" />
            {/* Fecho Dourado */}
            <circle cx="0" cy="0" r="4.5" fill="#dfb25f" stroke="#7e2014" strokeWidth="1" />
            <text x="0" y="28" fontFamily="Cinzel, serif" fontSize="7.5" fontWeight="bold" fill="#7e2014" textAnchor="middle">
              A CAIXA-PRETA DA SALA DE AULA
            </text>
          </g>

          {/* Dois Pilares: Prescrito vs. Praticado */}
          <g transform="translate(0, 48)">
            {/* Bloco Prescrito */}
            <rect x="-95" y="-14" width="85" height="42" fill="#fdfaf2" stroke="#7e2014" strokeWidth="1.2" rx="3" />
            <text x="-52" y="-2" fontFamily="Cinzel, serif" fontSize="7.5" fontWeight="bold" fill="#7e2014" textAnchor="middle">
              PRESCRIÇÃO
            </text>
            <text x="-52" y="10" fontFamily="EB Garamond, serif" fontSize="7" fill="#5c432d" textAnchor="middle">
              Leis, Programas
            </text>
            <text x="-52" y="20" fontFamily="EB Garamond, serif" fontSize="7" fill="#5c432d" textAnchor="middle">
              e Manuais Oficiais
            </text>

            {/* Símbolo de Tensão / Diálogo */}
            <text x="0" y="12" fontFamily="Cinzel, serif" fontSize="12" fontWeight="bold" fill="#b38634" textAnchor="middle">
              ⇄
            </text>

            {/* Bloco Praticado */}
            <rect x="10" y="-14" width="85" height="42" fill="#fdfaf2" stroke="#b38634" strokeWidth="1.2" rx="3" />
            <text x="52" y="-2" fontFamily="Cinzel, serif" fontSize="7.5" fontWeight="bold" fill="#8c641c" textAnchor="middle">
              PRÁTICA REAL
            </text>
            <text x="52" y="10" fontFamily="EB Garamond, serif" fontSize="7" fill="#5c432d" textAnchor="middle">
              Ritos, Negociação
            </text>
            <text x="52" y="20" fontFamily="EB Garamond, serif" fontSize="7" fill="#5c432d" textAnchor="middle">
              e Sujeitos Ativos
            </text>
          </g>
        </g>

        {/* Placa de Legenda Inferior */}
        <rect x="50" y="248" width="500" height="20" fill="#fdf8ea" stroke="#b38634" strokeWidth="1" />
        <text x="300" y="262" fontFamily="Cinzel, serif" fontSize="8.5" fill="#7e2014" textAnchor="middle" fontWeight="bold">
          FIG. IV: A ESCOLA COMO UNIVERSO PRÓPRIO • CULTURA PRESCRITA, PRATICADA E A CAIXA-PRETA COTIDIANA
        </text>
      </svg>
    </div>
  )
}

