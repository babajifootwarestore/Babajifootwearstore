import React from "react";

interface GoldCrownLogoProps {
  className?: string;
  size?: number | string;
  showBackground?: boolean;
}

export default function GoldCrownLogo({
  className = "w-full h-full",
  size = "100%",
  showBackground = true,
}: GoldCrownLogoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="babaji-gold-3d-logo"
    >
      <defs>
        {/* Soft 3D drop shadow for the entire logo assembly */}
        <filter id="ultra-3d-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#000000" floodOpacity="0.85" />
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.5" />
        </filter>

        {/* Shimmering Metallic Gold Gradients */}
        <linearGradient id="gold-primary" x1="100" y1="50" x2="400" y2="450" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF9E6" /> {/* Highlight */}
          <stop offset="20%" stopColor="#F5D372" /> {/* Light Gold */}
          <stop offset="40%" stopColor="#D4A137" /> {/* Medium Gold */}
          <stop offset="60%" stopColor="#AA7518" /> {/* Dark Gold */}
          <stop offset="80%" stopColor="#E9C25A" /> {/* Brass reflection */}
          <stop offset="100%" stopColor="#4A2F03" /> {/* Warm shadow */}
        </linearGradient>

        <linearGradient id="gold-light-accent" x1="250" y1="100" x2="250" y2="450" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF2CC" />
          <stop offset="50%" stopColor="#E5B23A" />
          <stop offset="100%" stopColor="#8A5A0A" />
        </linearGradient>

        {/* Real 3D Extrusion Shadow/Substrate Gradient (Copper-Bronze base) */}
        <linearGradient id="bronze-depth" x1="250" y1="100" x2="250" y2="480" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5C3B07" />
          <stop offset="50%" stopColor="#301E03" />
          <stop offset="100%" stopColor="#150D01" />
        </linearGradient>

        {/* Platinum/Chrome Highlights */}
        <linearGradient id="chrome-highlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FAD02C" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.6" />
        </linearGradient>

        {/* Specular lighting effect for real metal surface shine */}
        <filter id="gold-metallic-specular" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feSpecularLighting in="blur" specularExponent="40" specularConstant="1.8" lightingColor="#FFFDF0" result="specularOut">
            <fePointLight x="250" y="120" z="220" />
          </feSpecularLighting>
          <feComposite in="SourceGraphic" in2="specularOut" operator="arithmetic" k1="0" k2="1.2" k3="1" k4="0" />
        </filter>

        {/* Radial Dark Vignette Background */}
        <radialGradient id="vignette-bg" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#1c1c1c" />
          <stop offset="45%" stopColor="#0d0d0d" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
      </defs>

      {/* BACKGROUND EMBLEM (Optional) */}
      {showBackground && (
        <g id="bg-plate">
          {/* Main sleek rounded-rect/circle container */}
          <rect width="500" height="500" rx="40" fill="url(#vignette-bg)" />
          {/* Outer elegant gold border framing */}
          <rect x="15" y="15" width="470" height="470" rx="30" stroke="url(#gold-primary)" strokeWidth="1.5" opacity="0.12" fill="none" />
          <rect x="25" y="25" width="450" height="450" rx="25" stroke="url(#gold-primary)" strokeWidth="0.5" strokeDasharray="6 3" opacity="0.08" fill="none" />
        </g>
      )}

      {/* CORE LOGO GROUP WITH 3D SHADOW */}
      <g filter="url(#ultra-3d-shadow)" id="core-assembly">

        {/* ========================================================= */}
        {/* SECTION 1: THE ROYAL GOLD CROWN (3D elements matching image) */}
        {/* ========================================================= */}
        <g id="royal-crown" transform="translate(0, -5)" filter="url(#gold-metallic-specular)">
          
          {/* CROWN EXTRUSION DEPTH (3D dark backing first) */}
          <g opacity="0.9" fill="url(#bronze-depth)">
            {/* Crown center backing */}
            <path d="M250 82 C230 82, 215 110, 215 150 C235 152, 265 152, 285 150 C285 110, 270 82, 250 82 Z" />
            {/* Outer left Spire backing */}
            <path d="M170 120 C145 130, 160 170, 190 195 L225 195 C200 170, 185 140, 170 120 Z" />
            {/* Inner left Spire backing */}
            <path d="M210 102 C185 110, 190 160, 220 195 L245 195 C225 160, 220 125, 210 102 Z" />
            {/* Inner right Spire backing */}
            <path d="M290 102 C315 110, 310 160, 280 195 L255 195 C275 160, 280 125, 290 102 Z" />
            {/* Outer right Spire backing */}
            <path d="M330 120 C355 130, 340 170, 310 195 L275 195 C300 170, 315 140, 330 120 Z" />
          </g>

          {/* FRONT SPECULAR GOLD LAYERS */}
          {/* 1. Symmetric Spires / Decorative Loops */}
          
          {/* Spires pearls/spheres (Top ball crowns) */}
          <circle cx="250" cy="81" r="14" fill="url(#gold-primary)" stroke="url(#bronze-depth)" strokeWidth="1.5" />
          <circle cx="250" cy="80" r="11" fill="url(#gold-light-accent)" />
          {/* Detail lines inside top sphere matching photo */}
          <path d="M246 72 Q250 82 254 72" stroke="#5C3B07" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M242 80 Q250 85 258 80" stroke="#5C3B07" strokeWidth="1" strokeLinecap="round" fill="none" />

          {/* Outer left pearl */}
          <circle cx="168" cy="120" r="9" fill="url(#gold-primary)" stroke="url(#bronze-depth)" strokeWidth="1" />
          {/* Inner left pearl */}
          <circle cx="204" cy="101" r="11" fill="url(#gold-primary)" stroke="url(#bronze-depth)" strokeWidth="1" />
          {/* Inner right pearl */}
          <circle cx="296" cy="101" r="11" fill="url(#gold-primary)" stroke="url(#bronze-depth)" strokeWidth="1" />
          {/* Outer right pearl */}
          <circle cx="332" cy="120" r="9" fill="url(#gold-primary)" stroke="url(#bronze-depth)" strokeWidth="1" />

          {/* Decorative Crown Spires Paths (Acanthus Leaves Loops) */}
          {/* Outer Left Curved Arch */}
          <path d="M168 123 Q162 165 210 195 Q220 195 220 185 Q176 160 172 123 Z" fill="url(#gold-primary)" stroke="url(#bronze-depth)" strokeWidth="1" />
          
          {/* Inner Left Broad Arch */}
          <path d="M204 105 Q192 155 235 195 Q245 195 245 185 Q206 150 208 105 Z" fill="url(#gold-primary)" stroke="url(#bronze-depth)" strokeWidth="1" />

          {/* Center Pillar Support (Tapers downwards) */}
          <path d="M250 87 C242 87, 232 110, 234 148 C244 150, 256 150, 266 148 C268 110, 258 87, 250 87 Z" fill="url(#gold-primary)" />
          {/* Center pillar overlay texture decoration */}
          <path d="M250 94 L250 144" stroke="url(#bronze-depth)" strokeWidth="2" strokeLinecap="round" />
          {/* Inscription stylized initials on the central pillar matching original crown design */}
          <path d="M246 112 H254 M244 122 H256 M247 112 V132" stroke="#5C3B07" strokeWidth="1.5" strokeLinecap="round" />

          {/* Inner Right Broad Arch */}
          <path d="M296 105 Q308 155 265 195 Q255 195 255 185 Q294 150 292 105 Z" fill="url(#gold-primary)" stroke="url(#bronze-depth)" strokeWidth="1" />

          {/* Outer Right Curved Arch */}
          <path d="M332 123 Q338 165 290 195 Q280 195 280 185 Q324 160 328 123 Z" fill="url(#gold-primary)" stroke="url(#bronze-depth)" strokeWidth="1" />

          {/* Crown Base - Beautiful Curved 3D Gold Plates */}
          {/* Top thick curved base rim with bevel */}
          <path d="M174 195 Q250 212 326 195 L322 181 Q250 197 178 181 Z" fill="url(#gold-primary)" stroke="url(#bronze-depth)" strokeWidth="1" />
          
          {/* Studded beads in the middle of crown gold band */}
          <circle cx="190" cy="189" r="3.5" fill="#FFEAA0" stroke="#684205" strokeWidth="0.8" />
          <circle cx="210" cy="192" r="3.5" fill="#FFEAA0" stroke="#684205" strokeWidth="0.8" />
          <circle cx="230" cy="194" r="3.5" fill="#FFEAA0" stroke="#684205" strokeWidth="0.8" />
          <circle cx="250" cy="195" r="4.2" fill="#FFEAA0" stroke="#684205" strokeWidth="1" />
          <circle cx="270" cy="194" r="3.5" fill="#FFEAA0" stroke="#684205" strokeWidth="0.8" />
          <circle cx="290" cy="192" r="3.5" fill="#FFEAA0" stroke="#684205" strokeWidth="0.8" />
          <circle cx="310" cy="189" r="3.5" fill="#FFEAA0" stroke="#684205" strokeWidth="0.8" />

          {/* Second support ridge band (Horizontal concentric lines under base) */}
          <path d="M178 200 Q250 218 322 200 L320 206 Q250 224 180 206 Z" fill="url(#gold-light-accent)" />
          <path d="M182 208 Q250 226 318 208 L316 213 Q250 231 184 213 Z" fill="url(#gold-primary)" />

        </g>


        {/* ========================================================= */}
        {/* SECTION 2: THE "BabaJi" 3D GOLD TEXT BRANDING             */}
        {/* ========================================================= */}
        <g id="brand-text-3d" filter="url(#gold-metallic-specular)">
          
          {/* HIGH-DENSITY EXTRUDED SHADOW FOR "BabaJi" */}
          {/* We repeat offset outlines down-right to simulate a massive 3D bronze/copper extrusion */}
          {Array.from({ length: 18 }).map((_, idx) => {
            const dy = 2 + idx * 0.95;
            const dx = 0.4 - (idx * 0.08); // Slight fan extrusion
            const depthColor = idx > 12 ? "#150D01" : idx > 6 ? "#301E03" : "#513407";
            return (
              <text
                key={`depth-${idx}`}
                x={250 + dx}
                y={292 + dy}
                fontFamily="'Times New Roman', Times, Georgia, serif"
                fontWeight="900"
                fontSize="84"
                fill={depthColor}
                textAnchor="middle"
                letterSpacing="-1"
                className="select-none"
              >
                BabaJi
              </text>
            );
          })}

          {/* Main front glowing gold lettering */}
          <text
            x="250"
            y="292"
            fontFamily="'Times New Roman', Times, Georgia, serif"
            fontWeight="900"
            fontSize="84"
            fill="url(#gold-primary)"
            textAnchor="middle"
            letterSpacing="-1"
            className="select-none"
          >
            BabaJi
          </text>

          {/* Stroke layer to enhance bevel definition */}
          <text
            x="250"
            y="292"
            fontFamily="'Times New Roman', Times, Georgia, serif"
            fontWeight="900"
            fontSize="84"
            stroke="url(#gold-light-accent)"
            strokeWidth="0.8"
            fill="none"
            textAnchor="middle"
            letterSpacing="-1"
            className="select-none"
          />
        </g>


        {/* ========================================================= */}
        {/* SECTION 3: THE "FOOT WEAR" RIBBON / BANNER ASSEMBLY       */}
        {/* ========================================================= */}
        <g id="footwear-banner" transform="translate(0, 10)" filter="url(#gold-metallic-specular)">
          
          {/* Ribbon Plate 3D Depth Backing */}
          <path 
            d="M 120 310 Q 250 335 380 310 L 396 331 Q 250 357 104 331 Z" 
            fill="url(#bronze-depth)" 
          />

          {/* Ribbon Plate Front Gold Panel */}
          <path 
            d="M 116 312 Q 250 336 384 312 L 392 329 Q 250 353 108 329 Z" 
            fill="url(#gold-primary)" 
            stroke="url(#gold-light-accent)" 
            strokeWidth="1.5" 
          />

          {/* Ribbon Inner Dark Inlay/Recess Frame */}
          <path 
            d="M 124 316 Q 250 338 376 316 L 382 325 Q 250 347 118 325 Z" 
            fill="#121212" 
            stroke="#5C3B07" 
            strokeWidth="1" 
          />

          {/* "FOOT WEAR" EMBOSSED TEXT */}
          {/* Extruded shadow for subtext */}
          <text
            x="250"
            y="333"
            fontFamily="'Verdana', 'Geneva', sans-serif"
            fontWeight="900"
            fontSize="21"
            fill="#422c04"
            textAnchor="middle"
            letterSpacing="6.5"
            className="select-none"
          >
            FOOT WEAR
          </text>
          
          {/* Front text */}
          <text
            x="249"
            y="331"
            fontFamily="'Verdana', 'Geneva', sans-serif"
            fontWeight="900"
            fontSize="21"
            fill="url(#gold-primary)"
            textAnchor="middle"
            letterSpacing="6.5"
            className="select-none"
          >
            FOOT WEAR
          </text>

        </g>


        {/* ========================================================= */}
        {/* SECTION 4: SHIELD TRIANGLE/DIAMOND ORNAMENT AT THE BOTTOM */}
        {/* ========================================================= */}
        <g id="bottom-crest" transform="translate(0, 10)" filter="url(#gold-metallic-specular)">
          
          {/* 3D shadows of the bottom bracket */}
          <path 
            d="M 210 348 L 250 376 L 290 348 Q 250 361 210 348 Z" 
            fill="url(#bronze-depth)" 
          />

          {/* Outer elegant golden accent lines matching bottom label holder */}
          <path 
            d="M 200 344 L 250 382 L 300 344" 
            stroke="url(#gold-primary)" 
            strokeWidth="4" 
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none" 
          />

          <path 
            d="M 190 342 L 250 390 L 310 342" 
            stroke="url(#gold-light-accent)" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none" 
          />

          {/* Central golden diamond shield ornament */}
          <path 
            d="M 250 354 L 274 366 L 250 378 L 226 366 Z" 
            fill="url(#gold-primary)" 
            stroke="url(#bronze-depth)" 
            strokeWidth="1.2" 
          />
          
          {/* Inner diamond core lines */}
          <path 
            d="M 250 358 L 268 366 L 250 374 L 232 366 Z" 
            fill="url(#gold-light-accent)" 
            opacity="0.85"
          />

          <line x1="226" y1="366" x2="274" y2="366" stroke="#4A2F03" strokeWidth="0.8" />
          <circle cx="250" cy="366" r="3" fill="#FFF" />

        </g>
        
      </g>
    </svg>
  );
}
