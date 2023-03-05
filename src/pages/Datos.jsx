import React from "react";
import { mones } from "../assets/mones";
import { useParams } from "react-router-dom";
import Card from "../components/Catalogo/Card";
import "../components/Datos/index.css";

export default function Datos() {
  const { id } = useParams();
  const [puchamon, setPuchamon] = React.useState({});

  React.useEffect(() => {
    const load = mones.find((mon) => mon.id.toString() === id);
    if (load !== undefined && load !== null) {
      setPuchamon(load);
    }
  }, [id]);

  return (
    <div className="container-content">
      <div className="content-card-data">
        <div className="container noselect">
          <div className="canvas">
            <div className="tracker tr-1"></div>
            <div className="tracker tr-2"></div>
            <div className="tracker tr-3"></div>
            <div className="tracker tr-4"></div>
            <div className="tracker tr-5"></div>
            <div className="tracker tr-6"></div>
            <div className="tracker tr-7"></div>
            <div className="tracker tr-8"></div>
            <div className="tracker tr-9"></div>
            <div className="tracker tr-10"></div>
            <div className="tracker tr-11"></div>
            <div className="tracker tr-12"></div>
            <div className="tracker tr-13"></div>
            <div className="tracker tr-14"></div>
            <div className="tracker tr-15"></div>
            <div className="tracker tr-16"></div>
            <div className="tracker tr-17"></div>
            <div className="tracker tr-18"></div>
            <div className="tracker tr-19"></div>
            <div className="tracker tr-20"></div>
            <div className="tracker tr-21"></div>
            <div className="tracker tr-22"></div>
            <div className="tracker tr-23"></div>
            <div className="tracker tr-24"></div>
            <div className="tracker tr-25"></div>
            <div id="card">
              <img
                className="card-img-puchamon"
                srcSet={puchamon.image}
                alt="front-img"
              />
              <p id="prompt">{puchamon.name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-panel-data">
        <div className="content-text-panel-data">
          <h1 className={`name-panel text-${puchamon.rarity}`}>
            {puchamon.name}
          </h1>
        </div>
        <div className="content-bar-data">
          <div className="content-data">
            <h1 className="content-data-prev">LIF</h1>
            <div className="bar-data">
              <div
                className="barra-datos-life"
                style={{ width: `${puchamon?.stats?.life / 5}%` }}
              ></div>
            </div>
            <h1 className="content-data-name">{puchamon?.stats?.life}</h1>
          </div>
          <div className="content-data">
            <h1 className="content-data-prev">ATK</h1>
            <div className="bar-data">
              <div
                className="barra-datos-attack"
                style={{ width: `${puchamon?.stats?.attack / 5}%` }}
              ></div>
            </div>
            <h1 className="content-data-name">{puchamon?.stats?.attack}</h1>
          </div>
          <div className="content-data">
            <h1 className="content-data-prev">REC</h1>
            <div className="bar-data">
              <div
                className="barra-datos-recovery"
                style={{ width: `${puchamon?.stats?.recovery / 5}%` }}
              ></div>
            </div>
            <h1 className="content-data-name">{puchamon?.stats?.recovery}</h1>
          </div>
          <div className="content-data">
            <h1 className="content-data-prev">ENR</h1>
            <div className="bar-data">
              <div
                className="barra-datos-energy"
                style={{ width: `${puchamon?.stats?.energy / 5}%` }}
              ></div>
            </div>
            <h1 className="content-data-name">{puchamon?.stats?.energy}</h1>
          </div>
          <div className="content-data">
            <h1 className="content-data-prev">DEF</h1>
            <div className="bar-data">
              <div
                className="barra-datos-defense"
                style={{ width: `${puchamon?.stats?.defense / 5}%` }}
              ></div>
            </div>
            <h1 className="content-data-name">{puchamon?.stats?.defense}</h1>
          </div>
        </div>
        <div className="content-descAelement">
        <h1 className="description">{puchamon.description}</h1>
        <img  className="element" src={puchamon.iconElement} alt="element" srcset={puchamon.iconElement} />
      </div>
      </div>
      
    </div>
  );
}
