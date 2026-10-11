export default function MebRadioEngraving({ className = '' }) {
  return (
    <div className={`engraving-frame ${className}`}>
      <svg
        viewBox="0 0 600 280"
        xmlns="http://www.w3.org/2000/svg"
        className="engraving-svg"
        aria-label="Gravura das Escolas Radiofônicas do Movimento de Educação de Base (MEB) e educação popular"
      >
        <defs>
          <pattern id="hatch-radio" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#b38634" strokeWidth="0.6" opacity="0.22" />
          </pattern>
        </defs>

        {/* Fundo Pergaminho */}
        <rect width="600" height="280" fill="#f5edd8" />
        <rect width="600" height="280" fill="url(#hatch-radio)" opacity="0.12" />

        {/* Moldura dupla */}
        <rect x="8" y="8" width="584" height="264" fill="none" stroke="#b38634" strokeWidth="1.5" />
        <rect x="14" y="14" width="572" height="252" fill="none" stroke="#7e2014" strokeWidth="1" strokeDasharray="6 3" />

        {/* Cabeçalho */}
        <text x="24" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#7e2014" letterSpacing="2">
          TABULA XII • EDUCAÇÃO POPULAR & ESCOLAS RADIOFÔNICAS
        </text>
        <text x="576" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#8c641c" textAnchor="end" letterSpacing="1">
          MEB • DÉCADA DE 1960
        </text>

        {/* ========================================================
            LADO ESQUERDO: O RECEPTOR DE RÁDIO VINTAGE & ONDAS
            ======================================================== */}
        <g transform="translate(150, 138)">
          {/* Caixa do Rádio de Madeira/Baquelite */}
          <rect x="-65" y="-35" width="130" height="75" rx="6" fill="#4a3222" stroke="#26170e" strokeWidth="2" />
          <rect x="-60" y="-30" width="120" height="65" rx="4" fill="#69462f" />

          {/* Grade do Alto-falante de Pano */}
          <rect x="-52" y="-22" width="60" height="50" rx="3" fill="#e8dec3" stroke="#332216" strokeWidth="1" />
          {[-16, -8, 0, 8, 16].map((y, i) => (
            <line key={i} x1="-48" y1={y} x2="4" y2={y} stroke="#b38634" strokeWidth="0.8" />
          ))}

          {/* Dial de Frequências e Botões */}
          <rect x="12" y="-22" width="44" height="24" rx="2" fill="#2d2118" stroke="#dfb25f" strokeWidth="1" />
          <line x1="16" y1="-10" x2="52" y2="-10" stroke="#dfb25f" strokeWidth="0.8" />
          <line x1="34" y1="-18" x2="34" y2="-2" stroke="#c92a2a" strokeWidth="1.5" />

          {/* Knobs do Rádio */}
          <circle cx="22" cy="16" r="7" fill="#dfd1b3" stroke="#26170e" strokeWidth="1.2" />
          <circle cx="44" cy="16" r="7" fill="#dfd1b3" stroke="#26170e" strokeWidth="1.2" />

          {/* Antena Telescópica */}
          <line x1="50" y1="-35" x2="75" y2="-75" stroke="#332216" strokeWidth="2" />
          <circle cx="75" cy="-75" r="2.5" fill="#dfb25f" />

          {/* Ondas Radiofônicas Expandindo */}
          <path d="M 82 -75 A 16 16 0 0 1 82 -50" fill="none" stroke="#b38634" strokeWidth="1.2" strokeDasharray="3 2" />
          <path d="M 88 -82 A 26 26 0 0 1 88 -43" fill="none" stroke="#7e2014" strokeWidth="1.2" strokeDasharray="3 2" />
          <path d="M 94 -89 A 36 36 0 0 1 94 -36" fill="none" stroke="#b38634" strokeWidth="1" strokeDasharray="4 2" />

          <text x="0" y="58" fontFamily="Cinzel, serif" fontSize="9" fontWeight="bold" fill="#7e2014" textAnchor="middle">
            RECEPTOR RADIOFÔNICO
          </text>
          <text x="0" y="72" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="9.5" fill="#5c432d" textAnchor="middle">
            Decreto nº 52.267 (1963)
          </text>
        </g>

        {/* Divisor Ornamental Central */}
        <line x1="285" y1="46" x2="285" y2="228" stroke="#cbb898" strokeWidth="1" strokeDasharray="4 2" />
        <circle cx="285" cy="137" r="4" fill="#dfb25f" stroke="#7e2014" strokeWidth="1" />

        {/* ========================================================
            LADO DIREITO: CARTILHA DE ALFABETIZAÇÃO & CADERNO
            ======================================================== */}
        <g transform="translate(425, 138)">
          {/* Caderno do Aluno do MEB */}
          <rect x="-65" y="-20" width="130" height="65" rx="3" fill="#fdfaf2" stroke="#332216" strokeWidth="1.5" />
          <line x1="0" y1="-20" x2="0" y2="45" stroke="#b38634" strokeWidth="1.2" />

          {/* Linhas de Escrita no Caderno */}
          {[-8, 4, 16, 28].map((ly, i) => (
            <g key={i}>
              <line x1="-55" y1={ly} x2="-8" y2={ly} stroke="#cbb793" strokeWidth="0.8" />
              <line x1="8" y1={ly} x2="55" y2={ly} stroke="#cbb793" strokeWidth="0.8" />
            </g>
          ))}

          {/* Palavra "VIVER É LUTAR" ou Letras de Alfabetização */}
          <text x="-32" y="6" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="9" fill="#7e2014">
            A B C
          </text>
          <text x="20" y="6" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="8" fill="#5c432d">
            Cartilha
          </text>

          {/* Lápis de Madeira sobre o Caderno */}
          <g transform="translate(10, 18) rotate(35)">
            <rect x="-4" y="-30" width="8" height="40" fill="#dfb25f" stroke="#332216" strokeWidth="1" />
            <polygon points="-4,-30 4,-30 0,-42" fill="#cbb793" stroke="#332216" strokeWidth="1" />
            <polygon points="-1.5,-38 1.5,-38 0,-42" fill="#2d2118" />
          </g>

          <text x="0" y="-35" fontFamily="Cinzel, serif" fontSize="9" fontWeight="bold" fill="#7e2014" textAnchor="middle">
            MOVIMENTO DE EDUCAÇÃO DE BASE
          </text>
          <text x="0" y="66" fontFamily="Cinzel, serif" fontSize="9" fontWeight="bold" fill="#7e2014" textAnchor="middle">
            ALFABETIZAÇÃO POPULAR
          </text>
          <text x="0" y="80" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="9.5" fill="#5c432d" textAnchor="middle">
            Igreja Católica & Governo Federal
          </text>
        </g>

        {/* Rodapé da Gravura */}
        <text x="300" y="248" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="10.5" fill="#5c432d" textAnchor="middle">
          Fig. XII: As ondas de rádio levando a cartilha e a instrução popular aos rincões do país na efervescência dos anos 1960.
        </text>
      </svg>
    </div>
  )
}

