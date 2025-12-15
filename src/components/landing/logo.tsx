import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          <rect
            width="32"
            height="32"
            rx="8"
            fill="currentColor"
            className="opacity-10 group-hover:opacity-20 transition-opacity"
          />
          <path
            d="M8 12L16 8L24 12V20L16 24L8 20V12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="text-primary"
          />
          <path
            d="M16 8V16M16 16L8 12M16 16L24 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          />
        </svg>
      </div>
      <span className="text-xl font-bold text-foreground">Bruii</span>
    </Link>
  );
}

