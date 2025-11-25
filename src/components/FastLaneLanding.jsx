import React from 'react'; 
import { Link } from "react-router-dom";
import Hotcar3 from "../assets/Hotcar3.png";


const FastLaneLanding = () => {
  return (
    <section id="fastlanelanding">
        <header className="header container">
            <div>
        <h1 className="header__title">
            Welcome to America's favorite car movie collection. Get the lastest and hotest car movies downloaded here at <span className="orange">Fast Lane Cars.</span>
        </h1>
            </div>
    <figure className="header__img--wrapper">
        <img src={Hotcar3} alt="" className="header__img" />
    </figure>
        </header>
    </section>
  );
};

export default FastLaneLanding;
