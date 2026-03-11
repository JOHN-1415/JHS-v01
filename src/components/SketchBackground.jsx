import React from 'react';

function SketchBackground({ color = '#1B6B3A', opacity = 0.05 }) {
    return (
        <svg
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 800"
        >
            {/* Carrot — top-left */}
            <g transform="translate(80, 60)" opacity={opacity} stroke={color} fill="none" strokeWidth="1.3">
                <path d="M15 10 L20 55 Q18 58 12 55 L17 10" />
                <path d="M14 8 Q18 -2 22 8" />
                <path d="M10 5 Q15 -5 16 6" />
                <path d="M20 6 Q22 -4 25 7" />
                <line x1="16" y1="20" x2="22" y2="25" />
                <line x1="17" y1="32" x2="12" y2="36" />
                <line x1="18" y1="42" x2="23" y2="45" />
            </g>

            {/* Tomato — top-right */}
            <g transform="translate(1050, 70)" opacity={opacity} stroke={color} fill="none" strokeWidth="1.3">
                <ellipse cx="25" cy="28" rx="24" ry="22" />
                <path d="M15 10 Q25 -2 35 10" />
                <path d="M25 6 L25 -2" />
                <path d="M22 -2 Q25 -8 28 -2" />
                <line x1="10" y1="25" x2="25" y2="22" />
                <line x1="25" y1="22" x2="40" y2="25" />
            </g>

            {/* Broccoli — center-left */}
            <g transform="translate(50, 380)" opacity={opacity} stroke={color} fill="none" strokeWidth="1.3">
                <path d="M25 65 L25 35" />
                <path d="M20 65 L25 65 L30 65" />
                <circle cx="18" cy="28" r="10" />
                <circle cx="32" cy="28" r="10" />
                <circle cx="25" cy="18" r="10" />
                <circle cx="12" cy="20" r="7" />
                <circle cx="38" cy="20" r="7" />
            </g>

            {/* Onion — bottom-right */}
            <g transform="translate(1060, 650)" opacity={opacity} stroke={color} fill="none" strokeWidth="1.3">
                <ellipse cx="25" cy="30" rx="22" ry="25" />
                <path d="M25 5 Q25 -5 25 -8" />
                <path d="M20 -5 Q25 -12 30 -5" />
                <path d="M15 15 Q25 8 35 15" />
                <path d="M10 25 Q25 18 40 25" />
                <path d="M25 55 L25 60" />
            </g>

            {/* Chilli — left-mid */}
            <g transform="translate(30, 580)" opacity={opacity} stroke={color} fill="none" strokeWidth="1.4">
                <path d="M10 5 Q5 20 8 40 Q12 55 20 60 Q25 55 22 35 Q20 15 15 5 Z" />
                <path d="M12 3 Q14 -5 18 3" />
                <line x1="14" y1="20" x2="18" y2="22" />
                <line x1="13" y1="35" x2="17" y2="38" />
            </g>

            {/* Herb / Leaf — far right */}
            <g transform="translate(1120, 400)" opacity={opacity} stroke={color} fill="none" strokeWidth="1.2">
                <path d="M20 60 Q15 40 10 30 Q5 15 15 5 Q25 10 30 20 Q35 30 32 50 Z" />
                <line x1="20" y1="55" x2="18" y2="20" />
                <path d="M18 40 L12 35" />
                <path d="M18 30 L25 25" />
                <path d="M17 22 L12 18" />
            </g>

            {/* Star Anise — upper-left */}
            <g transform="translate(300, 30)" opacity={opacity} stroke={color} fill="none" strokeWidth="1.2">
                <polygon points="20,0 23,14 38,14 26,22 30,37 20,28 10,37 14,22 2,14 17,14" />
                <circle cx="20" cy="18" r="5" />
            </g>

            {/* Shoe — center-right */}
            <g transform="translate(1000, 450)" opacity={opacity} stroke={color} fill="none" strokeWidth="1.3">
                <path d="M5 30 Q5 10 20 8 Q35 6 40 10 L50 10 Q60 10 65 20 Q68 28 60 32 L5 32 Z" />
                <path d="M20 8 Q22 2 28 5" />
                <line x1="10" y1="32" x2="60" y2="32" />
                <path d="M40 10 L42 18" />
            </g>

            {/* Extra leaf — bottom-left */}
            <g transform="translate(200, 700)" opacity={opacity} stroke={color} fill="none" strokeWidth="1.2">
                <path d="M5 35 Q10 20 20 10 Q30 2 40 5 Q35 15 25 25 Q15 32 5 35 Z" />
                <path d="M5 35 Q15 25 30 8" />
            </g>

            {/* Small tomato — mid-top */}
            <g transform="translate(650, 20)" opacity={opacity} stroke={color} fill="none" strokeWidth="1.2">
                <circle cx="15" cy="18" r="14" />
                <path d="M10 6 Q15 0 20 6" />
                <path d="M15 4 L15 -2" />
            </g>
        </svg>
    );
}

export default SketchBackground;
