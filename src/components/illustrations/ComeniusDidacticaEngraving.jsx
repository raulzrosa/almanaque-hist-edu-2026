export default function ComeniusDidacticaEngraving({ className = '' }) {
  return (
    <div className={`engraving-frame ${className}`}>
      <svg
        viewBox="0 0 600 280"
        xmlns="http://www.w3.org/2000/svg"
        className="engraving-svg"
        aria-label="Gravura de Jan Amos Comênio e a Didactica Magna de 1657"
      >
        <defs>
          <pattern id="hatch-comenius" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#b38634" strokeWidth="0.6" opacity="0.25" />
          </pattern>
        </defs>

        {/* Fundo Pergaminho */}
        <rect width="600" height="280" fill="#f5edd8" />
        <rect width="600" height="280" fill="url(#hatch-comenius)" opacity="0.12" />

        {/* Moldura dupla clássica */}
        <rect x="8" y="8" width="584" height="264" fill="none" stroke="#b38634" strokeWidth="1.5" />
        <rect x="14" y="14" width="572" height="252" fill="none" stroke="#7e2014" strokeWidth="1" strokeDasharray="6 3" />

        {/* Cabeçalho */}
        <text x="24" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#7e2014" letterSpacing="2">
          TABULA VII • O NASCIMENTO DA DIDÁTICA MODERNA
        </text>
        <text x="576" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#8c641c" textAnchor="end" letterSpacing="1">
          AMSTERDÃ • ANNO MDCLVII (1657)
        </text>

        {/* ========================================================
            LADO ESQUERDO: O SOL DA RAZÃO E A MÁXIMA PEDAGÓGICA
            ======================================================== */}
        <g transform="translate(150, 135)">
          {/* Sol Radiante da Iluminação Intelectual */}
          <circle cx="0" cy="-20" r="28" fill="#fcf6e6" stroke="#8c2418" strokeWidth="1.8" />
          <circle cx="0" cy="-20" r="22" fill="#dfb25f" opacity="0.35" />
          {/* Raios do Sol */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
            const rad = (deg * Math.PI) / 180
            const x1 = Math.cos(rad) * 32
            const y1 = -20 + Math.sin(rad) * 32
            const x2 = Math.cos(rad) * 44
            const y2 = -20 + Math.sin(rad) * 44
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#b38634" strokeWidth="1.5" />
          })}

          <text x="0" y="-16" fontFamily="Cinzel, serif" fontSize="10" fontWeight="bold" fill="#7e2014" textAnchor="middle">
            LUX
          </text>

          {/* Faixa / Pergaminho Filosófico */}
          <path d="M -95 40 Q 0 25 95 40 L 90 62 Q 0 47 -90 62 Z" fill="#fdfaf2" stroke="#4a3726" strokeWidth="1.2" />
          <text x="0" y="53" fontFamily="Cinzel, serif" fontSize="8.5" fontWeight="bold" fill="#7e2014" textAnchor="middle" letterSpacing="1">
            "OMNES OMNIA DOCERE"
          </text>
          <text x="0" y="76" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="10.5" fill="#5c432d" textAnchor="middle">
            Ensinar tudo a todos totalmente
          </text>
        </g>

        {/* Divisor Ornamental Central */}
        <line x1="275" y1="48" x2="275" y2="230" stroke="#cbb898" strokeWidth="1" strokeDasharray="4 2" />
        <circle cx="275" cy="139" r="4" fill="#dfb25f" stroke="#7e2014" strokeWidth="1" />

        {/* ========================================================
            LADO DIREITO: O LIVRO ABERTO "DIDACTICA MAGNA" & INSTRUMENTOS
            ======================================================== */}
        <g transform="translate(425, 135)">
          {/* Livro Aberto / Tratado */}
          <g>
            {/* Página Esquerda */}
            <path d="M 0 -55 C -45 -58, -85 -50, -100 -40 L -100 45 C -85 35, -45 42, 0 45 Z" fill="#fdfaf2" stroke="#332216" strokeWidth="1.6" />
            {/* Página Direita */}
            <path d="M 0 -55 C 45 -58, 85 -50, 100 -40 L 100 45 C 85 35, 45 42, 0 45 Z" fill="#fdfaf2" stroke="#332216" strokeWidth="1.6" />
            {/* Vinco Central do Livro */}
            <line x1="0" y1="-55" x2="0" y2="45" stroke="#b38634" strokeWidth="2" />

            {/* Inscrição Página Esquerda */}
            <text x="-50" y="-28" fontFamily="Cinzel, serif" fontSize="8.5" fontWeight="bold" fill="#7e2014" textAnchor="middle">
              DIDACTICA
            </text>
            <text x="-50" y="-15" fontFamily="Cinzel, serif" fontSize="8.5" fontWeight="bold" fill="#7e2014" textAnchor="middle">
              MAGNA
            </text>
            <g stroke="#7c6a53" strokeWidth="1.2" strokeLinecap="round" opacity="0.6">
              <line x1="-85" y1="0" x2="-15" y2="0" />
              <line x1="-85" y1="12" x2="-20" y2="12" />
              <line x1="-85" y1="24" x2="-30" y2="24" />
            </g>

            {/* Inscrição Página Direita */}
            <text x="50" y="-28" fontFamily="Cinzel, serif" fontSize="8" fill="#5c432d" textAnchor="middle">
              JAN AMOS
            </text>
            <text x="50" y="-15" fontFamily="Cinzel, serif" fontSize="8.5" fontWeight="bold" fill="#7e2014" textAnchor="middle">
              COMÊNIO
            </text>
            <g stroke="#7c6a53" strokeWidth="1.2" strokeLinecap="round" opacity="0.6">
              <line x1="15" y1="0" x2="85" y2="0" />
              <line x1="20" y1="12" x2="85" y2="12" />
              <line x1="25" y1="24" x2="80" y2="24" />
            </g>
          </g>

          {/* Pena Clássica de Tinteiro e Compasso Pedagógico */}
          <g transform="translate(0, 52)">
            <circle cx="0" cy="18" r="12" fill="#dfb25f" stroke="#7e2014" strokeWidth="1" />
            <text x="0" y="22" fontFamily="Cinzel, serif" fontSize="8" fill="#7e2014" textAnchor="middle" fontWeight="bold">
              MÉTODO
            </text>
          </g>
        </g>

        {/* Placa de Legenda Inferior */}
        <rect x="70" y="248" width="460" height="20" fill="#fdf8ea" stroke="#b38634" strokeWidth="1" />
        <text x="300" y="262" fontFamily="Cinzel, serif" fontSize="9" fill="#7e2014" textAnchor="middle" fontWeight="bold">
          FIG. VIII: A ARTE DE ENSINAR • COMÊNIO, O MÉTODO RIGOROSO E A DIDACTICA MAGNA
        </text>
      </svg>
    </div>
  )
}

