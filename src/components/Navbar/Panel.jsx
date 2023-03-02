import React from "react";
import "./index.css";

export default function Panel() {
  return (
    <div className="panel-container">
      <div className="panel-section">
        <h1 className="name-section"><a href="" className="name-section-enlace ">INICIO</a></h1>
        <h1 className="barra-section">/</h1>
      </div>
      <div className="panel-section">
        <h1 className="name-section"><a href="" className="name-section-enlace">CATALOGO</a></h1>
        <h1 className="barra-section">/</h1>
      </div>
      <div className="panel-section">
        <h1 className="name-section"><a href="" className="name-section-enlace desactivado">TIENDA</a></h1>
        <h1 className="barra-section">/</h1>
      </div>
      <div className="panel-section">
        <h1 className="name-section"><a href="" className="name-section-enlace desactivado">JUGAR</a></h1>
      </div>
    </div>
  );
}
