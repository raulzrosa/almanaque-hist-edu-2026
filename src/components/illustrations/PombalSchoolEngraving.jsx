export default function PombalSchoolEngraving({ className = '' }) {
  return (
    <div className={`engraving-frame ${className}`}>
      <svg
        viewBox="0 0 600 280"
        xmlns="http://www.w3.org/2000/svg"
        className="engraving-svg"
        aria-label="Gravura da Reforma Pombalina e Aulas Régias de 1759"
      >
        <defs>
          <pattern id="hatch-pombal" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#b38634" strokeWidth="0.6" opacity="0.25" />
          </pattern>
        </defs>

        {/* Fundo Pergaminho */}
        <rect width="600" height="280" fill="#f5edd8" />
        <rect width="600" height="280" fill="url(#hatch-pombal)" opacity="0.15" />

        {/* Moldura dupla */}
        <rect x="8" y="8" width="584" height="264" fill="none" stroke="#b38634" strokeWidth="1.5" />
        <rect x="14" y="14" width="572" height="252" fill="none" stroke="#7e2014" strokeWidth="1" strokeDasharray="6 3" />

        <text x="24" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#7e2014" letterSpacing="2">
          TABULA IV • REFORMA POMBALINA & ESTATIZAÇÃO
        </text>
        <text x="576" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#8c641c" textAnchor="end" letterSpacing="1">
          ANNO MDCCLIX (1759)
        </text>

        {/* ========================================================
            BRASÃO REAL PORTUGUÊS / POMBALINO (CENTRAL)
            ======================================================== */}
        <g transform="translate(140, 135)">
          {/* Brasão estilizado */}
          <path d="M -45 -55 C 0 -60, 0 -60, 45 -55 C 50 10, 40 40, 0 60 C -40 40, -50 10, -45 -55 Z" fill="#fdfaf2" stroke="#332216" strokeWidth="2.5" />
          <path d="M -38 -48 C 0 -52, 0 -52, 38 -48 C 42 8, 32 34, 0 50 C -32 34, -42 8, -38 -48 Z" fill="none" stroke="#8c2418" strokeWidth="1.2" />

          {/* Castelos e Quinas Reais */}
          <g fill="#8c2418" stroke="none">
            <circle cx="0" cy="-25" r="4" />
            <circle cx="-16" cy="-10" r="4" />
            <circle cx="0" cy="-10" r="4" />
            <circle cx="16" cy="-10" r="4" />
            <circle cx="0" cy="5" r="4" />
          </g>

          {/* Coroa Real do Reino Unido de Portugal e Algarves */}
          <path d="M -30 -60 L -35 -78 L -18 -68 L 0 -82 L 18 -68 L 35 -78 L 30 -60 Z" fill="#dfb25f" stroke="#332216" strokeWidth="1.8" />
          <circle cx="0" cy="-86" r="3" fill="#8c2418" />

          <text x="0" y="78" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="10" fill="#5c432d" textAnchor="middle">
            Decreto de Expulsão dos Jesuítas
          </text>
        </g>

        {/* Divisor Ornamental */}
        <line x1="260" y1="50" x2="260" y2="225" stroke="#cbb898" strokeWidth="1" strokeDasharray="4 2" />

        {/* ========================================================
            O DECRETO DAS "AULAS RÉGIAS" E A TRANSIÇÃO ESTATAL
            ======================================================== */}
        <g transform="translate(420, 130)">
          {/* Rolo de Decreto Aberto */}
          <rect x="-110" y="-65" width="220" height="135" rx="4" fill="#fdf8ea" stroke="#5c432d" strokeWidth="1.8" />
          <line x1="-110" y1="-55" x2="110" y2="-55" stroke="#b38634" strokeWidth="1" />
          
          <text x="0" y="-38" fontFamily="Cinzel, serif" fontSize="11" fontWeight="bold" fill="#7e2014" textAnchor="middle" letterSpacing="1">
            ALVARÁ RÉGIO DE 1759
          </text>
          <text x="0" y="-22" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="10" fill="#332216" textAnchor="middle">
            "Aulas Régias de Gramática Latina & Retórica"
          </text>

          {/* Linhas simulando escrita caligráfica */}
          <g stroke="#7c6a53" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
            <line x1="-90" y1="-5" x2="90" y2="-5" />
            <line x1="-90" y1="10" x2="70" y2="10" />
            <line x1="-90" y1="25" x2="85" y2="25" />
            <line x1="-90" y1="40" x2="60" y2="40" />
          </g>

          {/* Selo Pombalino de Lacre */}
          <circle cx="75" cy="40" r="14" fill="#7e2014" stroke="#b38634" strokeWidth="1" />
          <text x="75" y="44" fontFamily="Cinzel, serif" fontSize="8" fill="#fdfaf2" textAnchor="middle" fontWeight="bold">
            ESTADO
          </text>
        </g>

        {/* Placa de Legenda */}
        <rect x="90" y="248" width="420" height="20" fill="#fdf8ea" stroke="#b38634" strokeWidth="1" />
        <text x="300" y="262" fontFamily="Cinzel, serif" fontSize="9.5" fill="#7e2014" textAnchor="middle" fontWeight="bold">
          FIG. IV: A SECULARIZAÇÃO ESTATAL • O MARQUÊS DE POMBAL E AS AULAS RÉGIAS
        </text>
      </svg>
    </div>
  )
}

