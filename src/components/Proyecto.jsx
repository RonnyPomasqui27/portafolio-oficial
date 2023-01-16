import React, { useState } from 'react';
import '../styles/proyecto.css'
import ecommer from '../assets/commerce.png'
import podekex from '../assets/pokedex1.png'
import rick from '../assets/rikyandmorti.png'
import god from '../assets/godofwar.png'
import calc from '../assets/calculator.png'
import hallowen from '../assets/halloween.png'
import maquetacion from '../assets/maquetacion.png'
import generador from '../assets/generador.png'

import Text from './Text';




const Proyecto = () => {
  const [info, setInfo] = useState();
  const [isSelectec, setIsSelect] = useState(true);

  const change = () => {


  };

  return (
    <div className='proyectos'>
      <div className="proyectos_img">
        <img src={ecommer} className='img_proyects' onClick={() => setInfo(ecommer)} />
        <img src={podekex} className='img_proyects' onClick={() => setInfo(podekex)} />
        <img src={rick} className='img_proyects' onClick={() => setInfo(rick)} />
        <img src={god} className='img_proyects' onClick={() => setInfo(god)} />
        <img src={calc} className='img_proyects' onClick={() => setInfo(calc)} />
        <img src={hallowen} className='img_proyects' onClick={() => setInfo(hallowen)} />
        <img src={generador} className='img_proyects' onClick={() => setInfo(generador)} />
        <img src={maquetacion} className='img_proyects' onClick={() => setInfo(maquetacion)} />
      </div>
      <div className="info_img_pro">
        <div className="backgroun_img" style={{ background: `url('${info}')` }}></div>
        <div className="conjunto_text">
          <div className="raya"></div>
          <Text info={info} />
        </div>
      </div>
    </div>
  );
};

export default Proyecto;