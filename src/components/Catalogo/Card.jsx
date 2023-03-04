import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Card({ mon }) {
  return (
    <Link  to={`/datos/${mon.id}`}>
      <div className="puchamon-img-contend">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className={`flip-card-front ${mon.rarity}`}>
              <img
                className="puchamon-img"
                srcSet={mon.image}
                alt="front-img"
              />
            </div>
            <div className={`flip-card-back ${mon.rarity}`}>
              <img
                className="puchamon-img"
                srcSet={mon.imageBack}
                alt="back-img"
              />
              <p className="title">{mon.name}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
