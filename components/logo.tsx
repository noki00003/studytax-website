interface LogoProps {
    className?: string;
    showText?: boolean;
}

export function Logo({ className = "h-14 w-auto", showText = true }: LogoProps) {
    return (
        <svg
            viewBox="0 0 120 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Simple chat bubble - centered, narrower than text */}
            <rect
                x="25" y="6"
                width="70" height="50"
                rx="10" ry="10"
                stroke="currentColor"
                strokeWidth="5"
                fill="none"
            />

            {/* Speech tail - triangle with rounded tip, left side vertical */}
            <path
                d="M38 56 L38 66 Q38 70 43 68 L52 56 Z"
                fill="currentColor"
            />

            {/* Three horizontal lines - top longest, middle shortest, bottom medium */}
            <line x1="36" y1="20" x2="62" y2="20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <line x1="36" y1="31" x2="52" y2="31" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <line x1="36" y1="42" x2="58" y2="42" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />

            {/* Green checkmark - right side, vertically centered */}
            <path
                d="M66 32 L72 38 L86 22"
                stroke="#22C55E"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* StudyTax text - centered below */}
            {showText && (
                <text
                    x="60"
                    y="92"
                    textAnchor="middle"
                    fill="currentColor"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontWeight="700"
                    fontSize="20"
                >
                    StudyTax
                </text>
            )}
        </svg>
    );
}
