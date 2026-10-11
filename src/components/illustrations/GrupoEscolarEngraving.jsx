export default function GrupoEscolarEngraving({ className = '' }) {
  return (
    <div className={`engraving-frame ${className}`}>
      <svg
        viewBox="0 0 600 280"
        xmlns="http://www.w3.org/2000/svg"
        className="engraving-svg"
        aria-label="Gravura histórica da fachada do Grupo Escolar e da reunião das escolas isoladas (1893)"
      >
        <defs>
          <pattern id="hatch-grupo" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#b38634" strokeWidth="0.6" opacity="0.22" />
          </pattern>
        </defs>

        {/* Fundo Pergaminho */}
        <rect width="600" height="280" fill="#f5edd8" />
        <rect width="600" height="280" fill="url(#hatch-grupo)" opacity="0.12" />

        {/* Moldura dupla */}
        <rect x="8" y="8" width="584" height="264" fill="none" stroke="#b38634" strokeWidth="1.5" />
        <rect x="14" y="14" width="572" height="252" fill="none" stroke="#7e2014" strokeWidth="1" strokeDasharray="6 3" />

        {/* Cabeçalho */}
        <text x="24" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#7e2014" letterSpacing="2">
          TABULA X • OS GRUPOS ESCOLARES NA REPÚBLICA
        </text>
        <text x="576" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#8c641c" textAnchor="end" letterSpacing="1">
          SÃO PAULO • 1893
        </text>

        {/* ========================================================
            FACHADA HISTÓRICA DO GRUPO ESCOLAR REPUBLICANO
            ======================================================== */}
        <g transform="translate(300, 142)">
          {/* Frontão Triangular Superior */}
          <polygon points="-170,-45 170,-45 0,-96" fill="#e8dec3" stroke="#332216" strokeWidth="2" />
          <polygon points="-150,-48 150,-48 0,-88" fill="none" stroke="#b38634" strokeWidth="1" />

          {/* Relógio / Brasão no frontão */}
          <circle cx="0" cy="-68" r="13" fill="#dfb25f" stroke="#7e2014" strokeWidth="1.2" />
          <line x1="0" y1="-77" x2="0" y2="-68" stroke="#332216" strokeWidth="1.5" />
          <line x1="0" y1="-68" x2="5" y2="-65" stroke="#332216" strokeWidth="1.2" />
          <circle cx="0" cy="-68" r="1.5" fill="#7e2014" />

          {/* Entablamento e Letreiro Oficial */}
          <rect x="-170" y="-45" width="340" height="19" fill="#fdfaf2" stroke="#332216" strokeWidth="1.8" />
          <text x="0" y="-32" fontFamily="Cinzel, serif" fontSize="9.5" fontWeight="bold" fill="#7e2014" textAnchor="middle" letterSpacing="2.5">
            GRUPO ESCOLAR • ENSINO GRADUADO
          </text>

          {/* Corpo do Prédio */}
          <rect x="-170" y="-26" width="340" height="96" fill="#f3ebd7" stroke="#332216" strokeWidth="1.8" />

          {/* Pilastras Clássicas */}
          {[-150, -100, -50, 50, 100, 150].map((cx, i) => (
            <g key={i}>
              <rect x={cx - 5} y="-26" width="10" height="96" fill="#ede2cb" stroke="#4a3726" strokeWidth="1" />
              <line x1={cx} y1="-26" x2={cx} y2="70" stroke="#b38634" strokeWidth="0.8" />
            </g>
          ))}

          {/* Janelas no Segundo Pavimento */}
          {[-125, -75, -25, 25, 75, 125].map((wx, i) => (
            <g key={i}>
              <path
                d={`M ${wx - 10} -6 L ${wx - 10} -18 A 10 10 0 0 1 ${wx + 10} -18 L ${wx + 10} -6 Z`}
                fill="#2d2118"
                stroke="#7e2014"
                strokeWidth="1"
              />
              <line x1={wx} y1="-22" x2={wx} y2="-6" stroke="#b38634" strokeWidth="0.8" />
              <line x1={wx - 10} y1="-14" x2={wx + 10} y2="-14" stroke="#b38634" strokeWidth="0.8" />
            </g>
          ))}

          {/* Janelas no Primeiro Pavimento */}
          {[-125, -75, 75, 125].map((wx, i) => (
            <g key={i}>
              <path
                d={`M ${wx - 10} 46 L ${wx - 10} 20 A 10 10 0 0 1 ${wx + 10} 20 L ${wx + 10} 46 Z`}
                fill="#2d2118"
                stroke="#7e2014"
                strokeWidth="1"
              />
              <line x1={wx} y1="16" x2={wx} y2="46" stroke="#b38634" strokeWidth="0.8" />
              <line x1={wx - 10} y1="30" x2={wx + 10} y2="30" stroke="#b38634" strokeWidth="0.8" />
            </g>
          ))}

          {/* Portal Central Imponente em Arco */}
          <path d="M -24 70 L -24 16 A 24 24 0 0 1 24 16 L 24 70 Z" fill="#2d2118" stroke="#7e2014" strokeWidth="1.8" />
          <path d="M -18 70 L -18 20 A 18 18 0 0 1 18 20 L 18 70 Z" fill="#4a3726" stroke="#b38634" strokeWidth="1" />
          <line x1="0" y1="12" x2="0" y2="70" stroke="#b38634" strokeWidth="1.2" />

          {/* Degraus de Acesso */}
          <rect x="-35" y="70" width="70" height="4" fill="#dfd1b3" stroke="#332216" strokeWidth="1" />
          <rect x="-42" y="74" width="84" height="4" fill="#dfd1b3" stroke="#332216" strokeWidth="1" />
          <rect x="-48" y="78" width="96" height="4" fill="#dfd1b3" stroke="#332216" strokeWidth="1" />
        </g>

        {/* Rodapé da Gravura */}
        <text x="300" y="248" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="10.5" fill="#5c432d" textAnchor="middle">
          Fig. X: A superação das escolas isoladas: turmas seriadas por nível de aprendizagem reunidas sob um mesmo teto republicano.
        </text>
      </svg>
    </div>
  )
}

