import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={142.06}
      height={78.82}
      viewBox="178.97 35.59 142.06 78.82"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <filter id="prefix__editing-extrude-glow">
          <feFlood floodColor="#fff" result="flood-1" />
          <feMorphology radius={1} in="SourceAlpha" result="erode" />
          <feComposite operator="in" in="flood-1" in2="erode" result="comp1" />
          <feConvolveMatrix
            order="3,3"
            divisor={1}
            in="comp1"
            result="convolve"
            kernelMatrix="0 0 0 1 1 1 0 0 0"
          />
          <feOffset dx={-3} in="convolve" result="extrude" />
          <feComposite
            operator="in"
            in="flood-1"
            in2="extrude"
            result="comp-extrude"
          />
          <feFlood floodColor="#ffe6e6" result="flood-2" />
          <feComposite
            operator="in"
            in="flood-2"
            in2="SourceAlpha"
            result="comp2"
          />
          <feMorphology
            operator="dilate"
            radius={1}
            in="comp2"
            result="dilate"
          />
          <feOffset dx={-4.5} in="dilate" result="offset" />
          <feGaussianBlur in="offset" stdDeviation={5.8} result="blur" />
          <feComponentTransfer in="blur" result="shadow">
            <feFuncA type="linear" slope={0.8} intercept={-0.2} />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="comp-extrude" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-extrude-glow)">
        <path
          d="M214.237 62.29h5.71q1.88 0 3.4.56 1.52.55 2.59 1.52 1.06.96 1.64 2.25.57 1.29.57 2.74v11.28q0 1.45-.57 2.74-.58 1.29-1.64 2.25-1.07.97-2.59 1.52-1.52.56-3.4.56h-5.71q-1.88 0-3.4-.56-1.52-.55-2.59-1.52-1.06-.96-1.64-2.25-.57-1.29-.57-2.74V69.36q0-1.45.57-2.74.58-1.29 1.64-2.25 1.07-.97 2.59-1.52 1.52-.56 3.4-.56zm6.47 1.67h-1.95V76l-.26 1.12-1.22.22h-2.76v1.96h2.87l1.88-.26 1.44-1.13V63.96zm24.16 15.34v-1.96h-7.4v-4.71h6.19v-1.95h-6.19v-4.75h7.14v-1.97h-9.07V79.3h9.33zm-8.66-17.01h5.71q1.87 0 3.4.56 1.52.55 2.58 1.52 1.07.96 1.65 2.25.57 1.29.57 2.74v11.28q0 1.45-.57 2.74-.58 1.29-1.65 2.25-1.06.97-2.58 1.52-1.53.56-3.4.56h-5.71q-1.88 0-3.4-.56-1.52-.55-2.59-1.52-1.07-.96-1.64-2.25-.58-1.29-.58-2.74V69.36q0-1.45.58-2.74.57-1.29 1.64-2.25 1.07-.97 2.59-1.52 1.52-.56 3.4-.56zm21.96 0h5.72q1.87 0 3.39.56 1.53.55 2.59 1.52 1.07.96 1.65 2.25.57 1.29.57 2.74v11.28q0 1.45-.57 2.74-.58 1.29-1.65 2.25-1.06.97-2.59 1.52-1.52.56-3.39.56h-5.72q-1.87 0-3.39-.56-1.52-.55-2.59-1.52-1.07-.96-1.64-2.25-.58-1.29-.58-2.74V69.36q0-1.45.58-2.74.57-1.29 1.64-2.25 1.07-.97 2.59-1.52 1.52-.56 3.39-.56zm3.44 3.25l-.62-1.28-1.02-.3h-2.43l-1.55.26-1.19 1.19V79.3h1.98V66.09q.26-.05.47-.07.2-.02.44-.09h2.12q.2.07.4.09.19.02.4.07v7.87h1.98v-7.87l.8-.16h2.13q.22.07.45.09.22.02.46.07V79.3h1.97V65.41l-1.17-1.19-1.56-.26h-2.43l-1 .3-.63 1.28zm18.53-3.25h5.72q1.87 0 3.39.56 1.53.55 2.59 1.52 1.07.96 1.64 2.25.58 1.29.58 2.74v11.28q0 1.45-.58 2.74-.57 1.29-1.64 2.25-1.06.97-2.59 1.52-1.52.56-3.39.56h-5.72q-1.87 0-3.39-.56-1.52-.55-2.59-1.52-1.07-.96-1.64-2.25-.58-1.29-.58-2.74V69.36q0-1.45.58-2.74.57-1.29 1.64-2.25 1.07-.97 2.59-1.52 1.52-.56 3.39-.56zm9.58 14.03v-9.35l-.26-1.56-1.17-1.19-1.91-.26h-8.28V79.3h8.28l1.91-.22 1.17-1.17.26-1.59zm-1.97-.21l-.26 1.04-1.22.19h-6.24V65.93h6.24l1.3.2.18 1.1v8.88z"
          fill="#ff703f"
        />
      </g>
      <style />
    </svg>
  )
}

export default SvgComponent
