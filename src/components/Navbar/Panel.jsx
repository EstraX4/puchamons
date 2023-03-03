import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function Panel() {
  return (
    <div className="panel-container">
      <div className="panel-section">
        <h1 className="name-section">
          <Link className="name-section-enlace" to="/">INICIO</Link>
        </h1>
        <h1 className="barra-section">/</h1>
      </div>
      <div className="panel-section">
        <h1 className="name-section">
        <Link className="name-section-enlace" to="/catologue">CATALOGO</Link>
        </h1>
        <h1 className="barra-section">/</h1>
      </div>
      <div className="panel-section">
        <h1 className="name-section">
        <Link className="name-section-enlace" to="#">TIENDA</Link>
        </h1>
        <h1 className="barra-section">/</h1>
      </div>
      <div className="panel-section">
        <h1 className="name-section">
        <Link className="name-section-enlace" to="#">JUGAR</Link>
        </h1>
      </div>
    </div>
  );
}
