export default function CapanemaSenaiEngraving({ className = '' }) {
  return (
    <div className={`engraving-frame ${className}`}>
      <svg
        viewBox="0 0 600 280"
        xmlns="http://www.w3.org/2000/svg"
        className="engraving-svg"
        aria-label="Gravura das Leis Orgânicas do Ensino, Reforma Capanema e Criação do SENAI em 1942"
      >
        <defs>
          <pattern id="hatch-capanema" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#b38634" strokeWidth="0.6" opacity="0.22" />
          </pattern>
        </defs>

        {/* Fundo Pergaminho */}
        <rect width="600" height="280" fill="#f5edd8" />
        <rect width="600" height="280" fill="url(#hatch-capanema)" opacity="0.12" />

        {/* Moldura dupla */}
        <rect x="8" y="8" width="584" height="264" fill="none" stroke="#b38634" strokeWidth="1.5" />
        <rect x="14" y="14" width="572" height="252" fill="none" stroke="#7e2014" strokeWidth="1" strokeDasharray="6 3" />

        {/* Cabeçalho */}
        <text x="24" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#7e2014" letterSpacing="2">
          TABULA XI • O ESTADO NOVO & AS LEIS ORGÂNICAS
        </text>
        <text x="576" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#8c641c" textAnchor="end" letterSpacing="1">
          REFORMA CAPANEMA • 1942–1946
        </text>

        {/* ========================================================
            LADO ESQUERDO: ENSINO INDUSTRIAL & SENAI (1942)
            ======================================================== */}
        <g transform="translate(160, 136)">
          {/* Engrenagem Industrial Estilizada */}
          <circle cx="0" cy="0" r="44" fill="#dfd1b3" stroke="#332216" strokeWidth="2" />
          <circle cx="0" cy="0" r="28" fill="#fdfaf2" stroke="#b38634" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="14" fill="#dfb25f" stroke="#7e2014" strokeWidth="1.5" />

          {/* Dentes da Engrenagem */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <rect
              key={i}
              x="-6"
              y="-52"
              width="12"
              height="12"
              fill="#cbb793"
              stroke="#332216"
              strokeWidth="1.2"
              transform={`rotate(${angle})`}
            />
          ))}

          {/* Letras SENAI */}
          <text x="0" y="4" fontFamily="Cinzel, serif" fontSize="8.5" fontWeight="bold" fill="#7e2014" textAnchor="middle">
            SENAI
          </text>

          <text x="0" y="66" fontFamily="Cinzel, serif" fontSize="9" fontWeight="bold" fill="#7e2014" textAnchor="middle">
            ENSINO INDUSTRIAL
          </text>
          <text x="0" y="80" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="9.5" fill="#5c432d" textAnchor="middle">
            Decreto-Lei nº 4.048 (1942)
          </text>
        </g>

        {/* Divisor Ornamental Central */}
        <line x1="285" y1="46" x2="285" y2="228" stroke="#cbb898" strokeWidth="1" strokeDasharray="4 2" />
        <circle cx="285" cy="137" r="4" fill="#dfb25f" stroke="#7e2014" strokeWidth="1" />

        {/* ========================================================
            LADO DIREITO: O ENSINO SECUNDÁRIO & LEIS ORGÂNICAS
            ======================================================== */}
        <g transform="translate(425, 136)">
          {/* Tomo / Livro de Decretos Aberto */}
          <path d="M -80 15 Q 0 22 80 15 L 75 48 Q 0 54 -75 48 Z" fill="#e8dec5" stroke="#332216" strokeWidth="1.5" />
          <path d="M 0 22 L 0 54" stroke="#7e2014" strokeWidth="1.2" />

          {/* Compasso e Régua de Formação Técnica */}
          <path d="M -24 -28 L 0 -48 L 24 -28" fill="none" stroke="#7e2014" strokeWidth="2" />
          <line x1="-16" y1="-34" x2="16" y2="-34" stroke="#b38634" strokeWidth="1.2" />
          <circle cx="0" cy="-48" r="3" fill="#dfb25f" stroke="#332216" strokeWidth="1" />

          {/* Ramo de Louros / Símbolo Humanístico */}
          <path d="M -50 -10 Q -65 -30 -40 -40" fill="none" stroke="#2e6423" strokeWidth="1.2" />
          <path d="M 50 -10 Q 65 -30 40 -40" fill="none" stroke="#2e6423" strokeWidth="1.2" />

          <text x="0" y="-12" fontFamily="Cinzel, serif" fontSize="9" fontWeight="bold" fill="#7e2014" textAnchor="middle">
            GINASIAL & COLEGIAL
          </text>
          <text x="0" y="66" fontFamily="Cinzel, serif" fontSize="9" fontWeight="bold" fill="#7e2014" textAnchor="middle">
            REFORMA CAPANEMA
          </text>
          <text x="0" y="80" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="9.5" fill="#5c432d" textAnchor="middle">
            Ginásio (4 anos) • Colégio (3 anos)
          </text>
        </g>

        {/* Rodapé da Gravura */}
        <text x="300" y="248" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="10.5" fill="#5c432d" textAnchor="middle">
          Fig. XI: A articulação entre a industrialização nacional, a formação técnica e a ramificação do ensino secundário.
        </text>
      </svg>
    </div>
  )
}

