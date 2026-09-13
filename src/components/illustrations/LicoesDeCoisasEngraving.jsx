export default function LicoesDeCoisasEngraving({ className = '' }) {
  return (
    <div className={`engraving-frame ${className}`}>
      <svg
        viewBox="0 0 600 280"
        xmlns="http://www.w3.org/2000/svg"
        className="engraving-svg"
        aria-label="Gravura do Método Intuitivo e Lições de Coisas inspirado em Pestalozzi"
      >
        {/* Fundo Pergaminho */}
        <rect width="600" height="280" fill="#f5edd8" />

        {/* Moldura dupla */}
        <rect x="8" y="8" width="584" height="264" fill="none" stroke="#b38634" strokeWidth="1.5" />
        <rect x="14" y="14" width="572" height="252" fill="none" stroke="#7e2014" strokeWidth="1" strokeDasharray="6 3" />

        <text x="24" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#7e2014" letterSpacing="2">
          TABULA VI • O MÉTODO INTUITIVO (PESTALOZZI)
        </text>
        <text x="576" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#8c641c" textAnchor="end" letterSpacing="1">
          "LIÇÕES DE COISAS" • 1879
        </text>

        {/* ========================================================
            GLOBO TERRESTRE & INSTRUMENTOS DE OBSERVAÇÃO
            ======================================================== */}
        <g transform="translate(130, 140)">
          {/* Suporte do Globo */}
          <ellipse cx="0" cy="70" rx="36" ry="10" fill="#dfd1b3" stroke="#332216" strokeWidth="1.5" />
          <path d="M 0 70 L 0 35" stroke="#332216" strokeWidth="4" />
          <path d="M -42 0 A 45 45 0 0 0 42 0" fill="none" stroke="#8c641c" strokeWidth="3" />

          {/* Globo Terrestre */}
          <circle cx="0" cy="0" r="38" fill="#fdfaf2" stroke="#332216" strokeWidth="2" />
          <ellipse cx="0" cy="0" rx="18" ry="38" fill="none" stroke="#b38634" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="-38" y1="0" x2="38" y2="0" stroke="#b38634" strokeWidth="1" />
          {/* Continentes estilizados */}
          <path d="M -15 -20 Q -5 -10 -10 10 Q -25 5 -15 -20 Z" fill="#cbb793" opacity="0.7" />
          <path d="M 10 -15 Q 25 -5 18 20 Q 5 15 10 -15 Z" fill="#cbb793" opacity="0.7" />

          <text x="0" y="92" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="9.5" fill="#5c432d" textAnchor="middle">
            Geografia & Observação do Mundo
          </text>
        </g>

        {/* Divisor Ornamental Central */}
        <line x1="260" y1="50" x2="260" y2="225" stroke="#cbb898" strokeWidth="1" strokeDasharray="4 2" />

        {/* ========================================================
            RAMO BOTÂNICO, SÓLIDOS GEOMÉTRICOS & LIVRO
            ======================================================== */}
        <g transform="translate(420, 135)">
          {/* Livro Aberto sobre a mesa */}
          <path d="M -90 40 Q 0 45 90 40 L 80 65 Q 0 68 -80 65 Z" fill="#e8dec5" stroke="#332216" strokeWidth="1.5" />

          {/* Ramo Botânico / Folha com Nervuras (Estudo da Natureza) */}
          <g transform="translate(-40, -10) rotate(-20)">
            <path d="M 0 40 Q -25 0 0 -50 Q 25 0 0 40 Z" fill="#dfebd3" stroke="#2e6423" strokeWidth="1.5" />
            <line x1="0" y1="40" x2="0" y2="-50" stroke="#2e6423" strokeWidth="1.2" />
            <line x1="0" y1="15" x2="-14" y2="5" stroke="#2e6423" strokeWidth="0.8" />
            <line x1="0" y1="15" x2="14" y2="5" stroke="#2e6423" strokeWidth="0.8" />
            <line x1="0" y1="-10" x2="-16" y2="-20" stroke="#2e6423" strokeWidth="0.8" />
            <line x1="0" y1="-10" x2="16" y2="-20" stroke="#2e6423" strokeWidth="0.8" />
          </g>

          {/* Sólidos Geométricos (Cubo e Esfera de Madeira Didática) */}
          <g transform="translate(45, -15)">
            {/* Cubo isométrico */}
            <polygon points="0,-20 22,-32 44,-20 22,-8" fill="#fdfaf2" stroke="#332216" strokeWidth="1.2" />
            <polygon points="0,-20 22,-8 22,20 0,8" fill="#dfd1b3" stroke="#332216" strokeWidth="1.2" />
            <polygon points="44,-20 22,-8 22,20 44,8" fill="#c4b292" stroke="#332216" strokeWidth="1.2" />
            {/* Esfera */}
            <circle cx="-16" cy="10" r="14" fill="#dfb25f" stroke="#332216" strokeWidth="1.2" />
            <ellipse cx="-16" cy="10" rx="6" ry="14" fill="none" stroke="#7e2014" strokeWidth="0.8" strokeDasharray="2 2" />
          </g>

          {/* Lema Pedagógico */}
          <text x="0" y="86" fontFamily="Cinzel, serif" fontSize="9" fontWeight="bold" fill="#7e2014" textAnchor="middle" letterSpacing="1">
            "AS COISAS ANTES DAS PALAVRAS"
          </text>
        </g>

        {/* Placa de Legenda */}
        <rect x="70" y="248" width="460" height="20" fill="#fdf8ea" stroke="#b38634" strokeWidth="1" />
        <text x="300" y="262" fontFamily="Cinzel, serif" fontSize="9.5" fill="#7e2014" textAnchor="middle" fontWeight="bold">
          FIG. VI: O CONTATO DIRETO COM A EXPERIÊNCIA • AS LIÇÕES DE COISAS
        </text>
      </svg>
    </div>
  )
}

