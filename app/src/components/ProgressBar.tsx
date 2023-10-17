interface ProgressBarProps {
  progress?: number
}

export function ProgressBar({ progress = 0 }: ProgressBarProps) {
  const SVGFillPercentage = progress * 2

  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={203}
        height={25}
        fill="none"
      >
        <g clipPath="url(#a)">
          <path fill="#323335" d="M200.97 2H3.045v21H200.97V2Z" />
          <path
            fill="#44997E"
            d={`M200.967 2h-200v21h${SVGFillPercentage}V2Z`}
          />
          <mask
            id="b"
            width={203}
            height={25}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: 'luminance',
            }}
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M0 19.527V6.257c0-.425.203-.825.203-1.25C.406 1.61 1.218-.066 3.045.034 4.669.11 6.293.31 7.714.284c4.872-.05 9.947-.2 14.819-.25.406-.025 1.015.25 1.624.35 1.015.2 2.03.6 2.842.55 2.03-.175 4.06-.825 5.887-.875 4.263-.125 8.323.05 12.383.05 12.18.025 24.157-.025 36.337 0 4.06.025 8.12.15 11.977.375 1.827.1 3.654.65 5.481.875 1.015.15 2.233.45 3.248-1.15 0-.275.609-.2.609-.2 14.413 0 29.029 0 43.442.025 0 0 .609.175 1.015.275.812.225 1.624.65 2.436.6 2.03-.175 4.263-.825 6.293-.85 14.819-.075 29.638-.025 44.254-.05.812 0 1.218.45 1.624 1.7.203 1 .406 1.999.609 3.074.203 3.473.203 6.997.406 10.496 0 2.424-.203 4.548-.812 6.697-.406 1.65-1.015 2.124-1.827 2.224-4.872.475-9.541-.524-14.21-.25-11.368.625-22.533.175-33.698.225-1.015 0-2.03.55-3.045.825h-1.827c-.812-.275-1.624-.825-2.436-.8-5.887.05-11.774.1-17.864.325-16.646.475-33.292-1.35-49.938-.15-11.571.625-23.142.225-34.713.125-2.639 0-5.481-.7-8.12-.7-10.759.025-21.518.25-32.277.35-1.218.025-1.827-.974-2.03-3.523 0-.375-.203-.725-.203-1.1ZM13.195 6.882c0 .15 0 .275-.203.425-.406-.375-.812-1.075-1.421-1.1-2.639-.125-5.278-.1-7.917 0 0 0-.609.875-.609 1.45-.203 2.049-.203 4.148-.203 6.197 0 3.249.203 4.199 2.233 3.999 3.654-.325 7.105-.825 10.759-.8 9.135.075 18.27.375 27.405.525.812.025 1.624-.35 2.436-.55.406.25 1.015.825 1.624.825 5.075.05 10.15.025 15.225-.025 2.639-.025 5.075-.05 7.511-.2 2.03-.1 3.857-.5 5.887-.5 2.03-.025 3.857.325 5.684.425 2.03.125 4.06-.15 5.887.25s3.654-.425 5.684-.025c1.827.4 3.857-.25 5.887-.3 2.233-.05 4.669.075 6.902.15.406.025 1.015.325 1.421.3 3.248-.05 6.496-.075 9.744-.25 3.857-.2 7.714-.825 11.571-.75 6.699.15 13.195.9 19.894 1.025 5.887.1 11.977-.425 17.864-.45 10.353-.075 20.909.075 31.465 0 3.045 0 2.233-.025 3.045-5.023v-.375c.203-4.698-.203-5.548-2.639-5.598-4.872-.125-9.947-.3-14.819-.3-2.842 0-5.481.2-8.12.6-1.015.15-2.03.974-2.842-.45-.203-.35-.609-.2-1.015-.175-3.451.375-6.699.875-10.15 1.125-4.263.3-8.323.374-12.586.624-1.421.1-3.045.25-4.466-1.05-.406-.324-.812-.274-1.218-.3-4.263 0-8.526-.024-12.992.026-.406 0-1.015.5-1.624.7-.609.175-1.015.424-1.624.35-1.015-.15-2.233-.675-3.248-.725-7.714-.35-15.225-.75-22.939-.9-5.075-.1-10.15-.15-15.225.475-8.323.975-16.646 1.224-24.969.375-4.466-.4-9.135-.775-13.804-.45-10.556.75-21.315.7-31.871-.175-.609-.05-1.218.4-1.624.625Z"
              clipRule="evenodd"
            />
          </mask>
          <g mask="url(#b)">
            <path fill="#0F0D09" d="M203 .01H0V25h203V.01Z" />
          </g>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h203v25H0z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
