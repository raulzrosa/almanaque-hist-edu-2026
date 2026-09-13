export default function HistorianManuscriptEngraving({ className = '' }) {
  return (
    <div className={`engraving-frame ${className}`}>
      <svg
        viewBox="0 0 600 280"
        xmlns="http://www.w3.org/2000/svg"
        className="engraving-svg"
        aria-label="Gravura dos vestígios materiais, pergaminho e lupa do historiador"
      >
        <defs>
          <pattern id="hatch-manuscript" width="6" height="6" patternTransform="rotate(30 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#b38634" strokeWidth="0.6" opacity="0.3" />
          </pattern>
        </defs>

        {/* Fundo de Pergaminho */}
        <rect width="600" height="280" fill="#f5edd8" />
        <rect width="600" height="280" fill="url(#hatch-manuscript)" opacity="0.15" />

        {/* Moldura dupla da gravura */}
        <rect x="8" y="8" width="584" height="264" fill="none" stroke="#b38634" strokeWidth="1.5" />
        <rect x="14" y="14" width="572" height="252" fill="none" stroke="#7e2014" strokeWidth="1" strokeDasharray="6 3" />

        <text x="24" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#7e2014" letterSpacing="2">
          TABULA II • FONTES & VESTIGIA HISTORICA
        </text>
        <text x="576" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#8c641c" textAnchor="end" letterSpacing="1">
          METHODUS CRITICA
        </text>

        {/* ========================================================
            MANUSCRITO / PERGAMINHO ANTIGO
            ======================================================== */}
        <g>
          {/* Sombra do Pergaminho */}
          <path d="M 85 70 L 485 55 L 515 215 L 115 225 Z" fill="#2c2014" opacity="0.18" />

          {/* Folha de Pergaminho aberta */}
          <path d="
            M 80 65
            C 160 60, 380 50, 480 50
            C 490 100, 505 160, 510 210
            C 410 215, 200 225, 110 220
            C 100 170, 85 110, 80 65
            Z
          " fill="#fdf8ea" stroke="#5c432d" strokeWidth="1.5" />

          {/* Linhas de texto manuscrito antigo */}
          <g stroke="#7c6a53" strokeWidth="1.8" strokeLinecap="round" opacity="0.7">
            <line x1="130" y1="85" x2="330" y2="85" />
            <line x1="130" y1="102" x2="350" y2="102" />
            <line x1="130" y1="120" x2="280" y2="120" />
            <line x1="130" y1="138" x2="250" y2="138" />
            <line x1="130" y1="156" x2="270" y2="156" />
            <line x1="130" y1="174" x2="300" y2="174" />
            <line x1="130" y1="192" x2="240" y2="192" />
          </g>

          {/* Selo de Cera Vermelha Imperial */}
          <circle cx="135" cy="205" r="14" fill="#8c2418" stroke="#5c150c" strokeWidth="1.2" />
          <circle cx="135" cy="205" r="10" fill="none" stroke="#dfb25f" strokeWidth="0.8" strokeDasharray="2 1" />
          <text x="135" y="209" fontFamily="Cinzel, serif" fontSize="9" fill="#dfb25f" textAnchor="middle" fontWeight="bold">
            VERITAS
          </text>
        </g>

        {/* ========================================================
            TINTEIRO E PENA DE ESCREVER (QUILL & INK)
            ======================================================== */}
        <g>
          {/* Tinteiro de vidro e latão */}
          <rect x="70" y="140" width="28" height="32" rx="3" fill="#352920" stroke="#b38634" strokeWidth="1.2" />
          <rect x="74" y="134" width="20" height="8" rx="2" fill="#b38634" />
          <ellipse cx="84" cy="134" rx="6" ry="2" fill="#1b120c" />

          {/* Pena clássica de ganso inclinada */}
          <path d="M 84 135 Q 50 80 40 40 Q 55 50 62 85 Q 75 110 84 135 Z" fill="#eeddbb" stroke="#7e2014" strokeWidth="1" />
          <line x1="84" y1="135" x2="40" y2="40" stroke="#7e2014" strokeWidth="0.8" />
        </g>

        {/* ========================================================
            LUPA DO HISTORIADOR EM PRIMEIRO PLANO (LENS & VESTIGES)
            ======================================================== */}
        <g>
          {/* Cabo de latão trabalhado da lupa */}
          <line x1="420" y1="160" x2="550" y2="245" stroke="#221811" strokeWidth="14" strokeLinecap="round" opacity="0.3" />
          <line x1="415" y1="155" x2="545" y2="240" stroke="#8c641c" strokeWidth="11" strokeLinecap="round" />
          <line x1="415" y1="155" x2="545" y2="240" stroke="#dfb25f" strokeWidth="4" strokeLinecap="round" />
          <circle cx="545" cy="240" r="8" fill="#7e2014" stroke="#b38634" strokeWidth="1.5" />

          {/* Aro de metal da Lente */}
          <circle cx="365" cy="130" r="62" fill="rgba(255, 255, 255, 0.4)" stroke="#8c641c" strokeWidth="6" />
          <circle cx="365" cy="130" r="59" fill="none" stroke="#dfb25f" strokeWidth="2" />

          {/* Reflexo óptico de vidro e ampliação das palavras no documento */}
          <path d="M 330 85 A 58 58 0 0 1 415 105" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8" />

          {/* Texto ampliado sob a lente: VESTÍGIO MATERIAL */}
          <g fontFamily="Cinzel, serif" fontWeight="bold" fill="#7e2014">
            <text x="365" y="122" fontSize="13" textAnchor="middle" letterSpacing="1">
              VESTÍGIOS
            </text>
            <text x="365" y="140" fontSize="11" textAnchor="middle" fill="#2b1c12" letterSpacing="1">
              & FONTES
            </text>
            <text x="365" y="156" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="10" textAnchor="middle" fill="#5c432d">
              (Exame Crítico)
            </text>
          </g>
        </g>

        {/* Legenda de Placa Clássica */}
        <rect x="110" y="248" width="380" height="20" fill="#fdf8ea" stroke="#b38634" strokeWidth="1" />
        <text x="300" y="262" fontFamily="Cinzel, serif" fontSize="9.5" fill="#7e2014" textAnchor="middle" fontWeight="bold">
          FIG. II: O EXAME DOS VESTÍGIOS MATERIAIS • O VERDADEIRO MÉTODO
        </text>
      </svg>
    </div>
  )
}

