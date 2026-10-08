export default function InstitutosEducacaoEngraving({ className = '' }) {
  return (
    <div className={`engraving-frame ${className}`}>
      <svg
        viewBox="0 0 600 280"
        xmlns="http://www.w3.org/2000/svg"
        className="engraving-svg"
        aria-label="Gravura da cientifização da formação docente e os Institutos de Educação"
      >
        <defs>
          <pattern id="hatch-inst" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#b38634" strokeWidth="0.6" opacity="0.22" />
          </pattern>
        </defs>

        {/* Fundo Pergaminho */}
        <rect width="600" height="280" fill="#f5edd8" />
        <rect width="600" height="280" fill="url(#hatch-inst)" opacity="0.12" />

        {/* Moldura dupla */}
        <rect x="8" y="8" width="584" height="264" fill="none" stroke="#b38634" strokeWidth="1.5" />
        <rect x="14" y="14" width="572" height="252" fill="none" stroke="#7e2014" strokeWidth="1" strokeDasharray="6 3" />

        {/* Cabeçalho */}
        <text x="24" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#7e2014" letterSpacing="2">
          TABULA IX • CIENTIFIZAÇÃO & INSERÇÃO UNIVERSITÁRIA
        </text>
        <text x="576" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#8c641c" textAnchor="end" letterSpacing="1">
          ANOS 1930 • USP & LDB 1996
        </text>

        {/* ========================================================
            LADO ESQUERDO: OS PIONEIROS DA EDUCAÇÃO NOVA (1932)
            ======================================================== */}
        <g transform="translate(150, 135)">
          {/* Medalhão Acadêmico */}
          <circle cx="0" cy="-15" r="42" fill="#fdfaf2" stroke="#332216" strokeWidth="2" />
          <circle cx="0" cy="-15" r="36" fill="none" stroke="#b38634" strokeWidth="1" strokeDasharray="4 2" />

          {/* Tocha do Saber / Chama da Ciência Pedagógica */}
          <path d="M -8 10 L 8 10 L 5 22 L -5 22 Z" fill="#b38634" stroke="#332216" strokeWidth="1" />
          <path d="M 0 -35 C -15 -20, -5 -5, 0 10 C 5 -5, 15 -20, 0 -35 Z" fill="#dfb25f" stroke="#7e2014" strokeWidth="1.5" />
          <path d="M 0 -25 C -7 -15, -2 -5, 0 5 C 2 -5, 7 -15, 0 -25 Z" fill="#8c2418" />

          <text x="0" y="48" fontFamily="Cinzel, serif" fontSize="9" fontWeight="bold" fill="#7e2014" textAnchor="middle">
            ANÍSIO TEIXEIRA
          </text>
          <text x="0" y="62" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="9.5" fill="#5c432d" textAnchor="middle">
            IERJ • Nível Superior (1932)
          </text>
          <text x="0" y="76" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="9.5" fill="#5c432d" textAnchor="middle">
            Fernando de Azevedo • USP (1934)
          </text>
        </g>

        {/* Divisor Ornamental Central */}
        <line x1="285" y1="48" x2="285" y2="230" stroke="#cbb898" strokeWidth="1" strokeDasharray="4 2" />
        <circle cx="285" cy="139" r="4" fill="#dfb25f" stroke="#7e2014" strokeWidth="1" />

        {/* ========================================================
            LADO DIREITO: DA UNIVERSIDADE À LDB 9.394/1996
            ======================================================== */}
        <g transform="translate(435, 135)">
          {/* Brasão Universitário & Livro da Legislação */}
          <rect x="-95" y="-55" width="190" height="110" rx="4" fill="#fdfaf2" stroke="#332216" strokeWidth="1.8" />
          <line x1="-95" y1="-42" x2="95" y2="-42" stroke="#b38634" strokeWidth="1" />

          <text x="0" y="-47" fontFamily="Cinzel, serif" fontSize="9" fontWeight="bold" fill="#7e2014" textAnchor="middle" letterSpacing="1">
            LEI Nº 9.394 / 1996 • ART. 62
          </text>

          <text x="0" y="-22" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="10.5" fill="#332216" textAnchor="middle">
            "A formação de docentes para a
          </text>
          <text x="0" y="-7" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="10.5" fill="#332216" textAnchor="middle">
            Educação Básica far-se-á em
          </text>
          <text x="0" y="10" fontFamily="Cinzel, serif" fontSize="10" fontWeight="bold" fill="#7e2014" textAnchor="middle">
            NÍVEL SUPERIOR"
          </text>

          {/* Selo Dourado da República */}
          <circle cx="0" cy="36" r="12" fill="#dfb25f" stroke="#7e2014" strokeWidth="1.2" />
          <text x="0" y="40" fontFamily="Cinzel, serif" fontSize="8" fill="#7e2014" textAnchor="middle" fontWeight="bold">
            LDB
          </text>

          <text x="0" y="76" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="9.5" fill="#5c432d" textAnchor="middle">
            Pedagogia & Licenciaturas Universitárias
          </text>
        </g>

        {/* Placa de Legenda */}
        <rect x="70" y="248" width="460" height="20" fill="#fdf8ea" stroke="#b38634" strokeWidth="1" />
        <text x="300" y="262" fontFamily="Cinzel, serif" fontSize="9" fill="#7e2014" textAnchor="middle" fontWeight="bold">
          FIG. X: A UNIVERSIDADE E O MAGISTÉRIO • DOS INSTITUTOS DE EDUCAÇÃO À LDB DE 1996
        </text>
      </svg>
    </div>
  )
}

