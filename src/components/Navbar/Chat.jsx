import React from "react";
import "./index.css";

export default function Chat() {
  return (
    <div className="chat-container">
      <div className="svg-chat">
        <svg className="svg-chat-icon"
          width="52"
          height="50"
          viewBox="0 0 52 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.24731 0.280273C1.59046 0.280273 0.247314 1.62341 0.247314 3.28027V34.8413C0.247314 36.4981 1.59046 37.8413 3.24731 37.8413H34.779L46.1715 49.631L45.4554 37.8413H48.5806C50.2375 37.8413 51.5806 36.4981 51.5806 34.8413V3.28027C51.5806 1.62342 50.2375 0.280273 48.5807 0.280273H3.24731Z"
            fill="#FFFEFF"
          />
          <ellipse
            cx="12.6666"
            cy="16.7134"
            rx="4.13978"
            ry="3.9126"
            fill="#5F5F61"
          />
          <ellipse
            cx="25.914"
            cy="16.7134"
            rx="4.13978"
            ry="3.9126"
            fill="#5F5F61"
          />
          <ellipse
            cx="39.1613"
            cy="16.7134"
            rx="4.13978"
            ry="3.9126"
            fill="#5F5F61"
          />
        </svg>
        <h1 className="barra-section padding-svg">|</h1>
      </div>
      <div className="area-text"></div>
    </div>
  );
}
