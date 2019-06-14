import React from "react";

const SVG = ({
  style = {},
  fill = "transparent",
  width = "100%",
  className = "",
  viewBox = "0 0 32 32"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
  <g id="Search" stroke="none" strokeWidth="1" fill={fill} fillRule="evenodd">
        <g id="Search-slots-icons-32px" transform="translate(-662.000000, -232.000000)" fill={fill} stroke="#FF0000">
            <g id="::-Search" transform="translate(0.000000, 144.000000)">
                <path d="M659.725972,92.249792 L667.714674,100.238494 L670.068368,89.896098 L659.725972,92.249792 Z" id="play" transform="translate(664.732233, 95.232233) rotate(45.000000) translate(-664.732233, -95.232233) "></path>
            </g>
        </g>
    </g>
  </svg>
);

export default SVG;
