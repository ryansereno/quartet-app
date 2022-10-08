import "./spinner.css";
import * as React from "react";

const Spinner = (props) => (
  <div className="container">
    {" "}
    <svg
      width={400}
      height={400}
      xmlSpace="preserve"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        style={{
          display: "inline",
        }}
      >
        <path
          style={{
            display: "inline",
            fill: "#fff",
            fillOpacity: 1,
            strokeWidth: 0.381,
            strokeDasharray: "none",
          }}
          d="M242.398 308.251c-1.338-.004-2.677.003-4.014.018-2.248.027-4.501.055-6.732.367-2.009.273-4.01.602-6.01.924-2.621.458-5.242.91-7.85 1.442-2.502.483-5.034.913-7.455 1.724-1.445.584-2.87 1.222-4.22 2.002l7.47.03 5.715.849c7.983 1.186 11.228 2.066 15.62 4.24 4.959 2.456 7.459 4.531 12.442 10.322 16.662 19.361 32.435 28.005 55.938 30.659l4.764.539 13.142-.135c13.971-.143 18.06-.492 23.239-1.984 8.038-2.317 11.018-4.985 11.039-9.883l.008-1.944-.866-1.285c-.476-.707-1.442-1.674-2.146-2.148-2.646-1.783-4.905-1.96-13.56-1.065-12.922 1.338-21.475.233-32.952-4.257-11.312-4.426-21.062-10.958-31.24-20.934l-4.762-4.668 1.387-1.45c.047-.048 1.487-2.524 1.693-2.85-.202-.003-.403-.003-.605-.005-2.1-.025-4.2-.055-6.299-.123-2.218-.07-4.437-.147-6.656-.129-1.989-.01-3.977-.023-5.965-.06a1383.92 1383.92 0 0 1-7.113-.15 230.24 230.24 0 0 0-4.012-.046z"
        />
        <path
          style={{
            display: "inline",
            fill: "none",
            stroke: "#fff",
            strokeWidth: 20,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          d="M153.915 191.069H-35.992l-94.953-164.464 94.953-164.465h189.907L248.87 26.605z"
          transform="matrix(.79677 0 0 .79677 145.365 156.184)"
        />
        <a xlinkHref="innerhex">
          <path
            id="a9239"
            style={{
              display: "inline",
              fill: "none",
              stroke: "#fff",
              strokeWidth: 20,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeOpacity: 1,
            }}
            d="M153.915 191.069H-35.992l-94.953-164.464 94.953-164.465h189.907L248.87 26.605z"
            transform="translate(155.002 160.532) scale(.63333)"
          />
        </a>
      </g>
    </svg>
  </div>
);

export default Spinner;
