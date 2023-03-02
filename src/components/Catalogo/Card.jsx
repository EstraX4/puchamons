import React from "react";
import "./index.css";

export default function Card({ mon }) {
  return (
    <div className="puchamon-img-contend">
      {/* <h1 className='puchamon-name'>{mon.name}</h1>
        <h2 className='puchamon-id'>{mon.id}</h2>
        <p className='puchamon-rarity'>{mon.rarity}</p>
        <p className='puchamon-type'>{mon.type}</p> */}
      {/* <p className='puchamon-desciption'>{mon.description}</p>
        <p className='puchamon-stats-life'>{mon.stats.life}</p>
        <p className='puchamon-stats-attack'>{mon.stats.attack}</p>
        <p className='puchamon-stats-energy'>{mon.stats.energy}</p>
        <p className='puchamon-stats-recovery'>{mon.stats.recovery}</p>
        <p className='puchamon-stats-defense'>{mon.stats.defense}</p> */}
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img className="puchamon-img" src={mon.image} alt="" srcset="" />
          </div>
          <div class="flip-card-back">
            <img
              className="puchamon-img"
              src={mon.imageBack}
              alt=""
              srcset=""
            />
            <p class="title">{mon.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
