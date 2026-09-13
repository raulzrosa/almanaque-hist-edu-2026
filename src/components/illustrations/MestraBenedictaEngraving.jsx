export default function MestraBenedictaEngraving({ className = '' }) {
  return (
    <div className={`engraving-frame ${className}`}>
      <svg
        viewBox="0 0 600 280"
        xmlns="http://www.w3.org/2000/svg"
        className="engraving-svg"
        aria-label="Gravura em homenagem à Mestra Benedicta da Trindade do Lado de Christo"
      >
        {/* Fundo Pergaminho */}
        <rect width="600" height="280" fill="#f6eedb" />

        {/* Moldura dupla */}
        <rect x="8" y="8" width="584" height="264" fill="none" stroke="#b38634" strokeWidth="1.5" />
        <rect x="14" y="14" width="572" height="252" fill="none" stroke="#7e2014" strokeWidth="1" strokeDasharray="6 3" />

        <text x="24" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#7e2014" letterSpacing="2">
          TABULA VII • PIONEIRAS DA EDUCAÇÃO PAULISTA
        </text>
        <text x="576" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#8c641c" textAnchor="end" letterSpacing="1">
          SÉCULO XIX • SÃO PAULO
        </text>

        {/* ========================================================
            BASTIDOR DE COSTURA PARTIDO vs. LIVRO DE CIÊNCIAS E CÁLCULO
            ======================================================== */}
        <g transform="translate(160, 135)">
          {/* Bastidor de Costura / Prendas Domésticas quebrado/de lado */}
          <circle cx="0" cy="15" r="45" fill="#e8dfc7" stroke="#8c641c" strokeWidth="3" opacity="0.6" strokeDasharray="6 2" />
          <line x1="-30" y1="15" x2="30" y2="15" stroke="#7e2014" strokeWidth="2" strokeDasharray="3 3" />
          <text x="0" y="35" fontFamily="Cinzel, serif" fontSize="8" fill="#7e2014" textAnchor="middle">
            PRENDAS DOMÉSTICAS
          </text>
          {/* Linha vermelha cortada simbolizando a recusa */}
          <path d="M -20 -10 L 20 40" stroke="#8c2418" strokeWidth="3" strokeLinecap="round" />
          <text x="0" y="80" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="10" fill="#5c432d" textAnchor="middle">
            A recusa das amarras curriculares
          </text>
        </g>

        {/* Divisor Ornamental */}
        <line x1="280" y1="50" x2="280" y2="225" stroke="#cbb898" strokeWidth="1" strokeDasharray="4 2" />

        {/* ========================================================
            O LIVRO DE ARITMÉTICA, GEOMETRIA E O SABER FEMININO
            ======================================================== */}
        <g transform="translate(430, 135)">
          {/* Compasso de Geometria e Livro de Aritmética */}
          <rect x="-85" y="-55" width="170" height="110" rx="3" fill="#fdfaf2" stroke="#332216" strokeWidth="1.8" />
          <line x1="0" y1="-55" x2="0" y2="55" stroke="#b38634" strokeWidth="1.2" />

          {/* Símbolos de Matemática ensinados às meninas */}
          <text x="-42" y="-30" fontFamily="Cinzel, serif" fontSize="9" fontWeight="bold" fill="#7e2014" textAnchor="middle">
            ARITMÉTICA
          </text>
          <text x="-42" y="-10" fontFamily="EB Garamond, serif" fontSize="13" fill="#332216" textAnchor="middle">
            12 × 4 = 48
          </text>
          <text x="-42" y="15" fontFamily="EB Garamond, serif" fontSize="12" fill="#332216" textAnchor="middle">
            a² + b² = c²
          </text>

          {/* Gramática e Literatura */}
          <text x="42" y="-30" fontFamily="Cinzel, serif" fontSize="9" fontWeight="bold" fill="#7e2014" textAnchor="middle">
            GRAMÁTICA
          </text>
          <text x="42" y="-8" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="10" fill="#5c432d" textAnchor="middle">
            Retórica & Razão
          </text>
          <text x="42" y="15" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="10" fill="#5c432d" textAnchor="middle">
            Saber Emancipador
          </text>

          {/* Ramo de Louro Dourado */}
          <circle cx="0" cy="30" r="12" fill="#dfb25f" stroke="#7e2014" strokeWidth="1" />
          <text x="0" y="34" fontFamily="Cinzel, serif" fontSize="9" fontWeight="bold" fill="#7e2014" textAnchor="middle">
            ✦
          </text>

          <text x="0" y="80" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="10" fill="#5c432d" textAnchor="middle">
            A coragem da Mestra Benedicta
          </text>
        </g>

        {/* Placa de Legenda */}
        <rect x="70" y="248" width="460" height="20" fill="#fdf8ea" stroke="#b38634" strokeWidth="1" />
        <text x="300" y="262" fontFamily="Cinzel, serif" fontSize="9.5" fill="#7e2014" textAnchor="middle" fontWeight="bold">
          FIG. VII: A SUBVERSÃO DO STATUS QUO • MESTRA BENEDICTA DA TRINDADE
        </text>
      </svg>
    </div>
  )
}

