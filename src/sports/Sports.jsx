
import './Sports.css';

import busketball from '../assets/images/busketball.png';
import football from '../assets/images/football.png';
import tennis from '../assets/images/tennis.png';
import taekvondo from '../assets/images/taekvondo.png';
import swimming from '../assets/images/swimming.png';
import valleyball from '../assets/images/valleyball.png';
import boks from '../assets/images/boks.png';
import sycle from '../assets/images/sycle.png';
import yoga from '../assets/images/yoga.png';



    



const sports = [
  { name: "Баскетбол", image: busketball },
  { name: "Футбол", image: football },
  { name: "Теннис", image: tennis },
  { name: "Плавание", image: swimming },
     { name: "Волейбол", image: valleyball },
  { name: "Таэквондо", image: taekvondo },

  { name: "Бокс", image: boks },
  { name: "Велоспорт", image: sycle },
  { name: "Йога", image: yoga },
];

const Sports = () => {
  return (
    <div className="sp-container">
      <h1 className="sp-title">Виды спорта</h1>
      <div className="sp-grid">
        {sports.map((sport, index) => (
          <div key={index} className="sp-card">
            <div className="sp-image-wrapper">
              <img src={sport.image} alt={sport.name} className="sp-image" />
              
              
            </div>
            <div className="sp-name">{sport.name}</div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Sports;




