import React from 'react';
import ecommer from '../assets/commerce.png';
import podekex from '../assets/pokedex1.png';
import rick from '../assets/rikyandmorti.png';
import god from '../assets/godofwar.png';
import calc from '../assets/calculator.png';
import hallowen from '../assets/halloween.png';
import maquetacion from '../assets/maquetacion.png';
import generador from '../assets/generador.png'

const Text = ({ info }) => {

  switch (info) {
    case ecommer:
      return (
        <div className="back_info">
          <h3>Ecommerce</h3>
          <h4>Desarrollado con:</h4>
          <p className='text_pro'>React Js, Axios, React Router, Redux, Css</p>
          <p style={{ textAlign: 'center', fontSize: '0.8rem', marginTop: "5px" }} >"Diseño de un Ecommerce que simula la funcionalidad del mismo"</p>
          <div>
            <a href="https://ecommerce-rp.netlify.app/" target={'_blank'}>ir al sitio</a>
          </div>
        </div>
      )
      break;
    case podekex:
      return (
        <div className="back_info">
          <h3>Pokedex</h3>
          <h4>Desarrollado con:</h4>
          <p className='text_pro'>React Js, Axios, React Router, Redux, Css</p>
          <p style={{ textAlign: 'center', fontSize: '0.8rem', marginTop: "5px" }} >"Sitio Web para presentar todos los tipos de pokemones, con sus características y tipos."</p>
          <div>
            <a href="https://pokedex-ronnypomasqui.netlify.app/" target={'_blank'}>ir al sitio</a>
          </div>
        </div>
      )
      break;
    case rick:
      return (
        <div className="back_info">
          <h3>Rick and Morty - API</h3>
          <h4>Desarrollado con:</h4>
          <p className='text_pro'>React Js, Axios, Css</p>
          <p style={{ textAlign: 'center', fontSize: '0.8rem', marginTop: "5px" }} >"Conoces a los personajes de la serie más popular al momento? puedes chequearlo visitando el link"</p>
          <div>
            <a href="https://rick-and-morty-ronny-pomasqui.netlify.app/" target={'_blank'}>ir al sitio</a>
          </div>
        </div>
      )
      break;
    case god:
      return (
        <div className="back_info">
          <h3>Landing Page - God of War</h3>
          <h4>Desarrollado con:</h4>
          <p className='text_pro'>React Js, React Router, Css, Swiper js y AOS</p>
          <p style={{ textAlign: 'center', fontSize: '0.8rem', marginTop: "5px" }} >"Ya conoces a todos los personajes de la franquia más esperada?. Nos vemos hay"</p>
          <div>
            <a href="https://fan-page-god-war-ragnarok-rp.netlify.app/" target={'_blank'}>ir al sitio</a>
          </div>
        </div>
      )
      break;

    case calc:
      return (
        <div className="back_info">
          <h3>Calculadora</h3>
          <h4>Desarrollado con:</h4>
          <p className='text_pro'>Html, Css y Javascript</p>
          <p style={{ textAlign: 'center', fontSize: '0.8rem', marginTop: "5px" }} >"Estas en apuros y necesitas safarte de un aprieto, ya sabes a donde acudir "</p>
          <div>
            <a href="https://calculator-app-rp.netlify.app/" target={'_blank'}>ir al sitio</a>
          </div>
        </div>
      )
      break;
    case hallowen:
      return (
        <div className="back_info">
          <h3>Aplicación del clima</h3>
          <h4>Desarrollado con:</h4>
          <p className='text_pro'>React js y Axios</p>
          <p style={{ textAlign: 'center', fontSize: '0.8rem', marginTop: "5px" }} >"Quieres saber el clima de tu zona?. Visita el link"</p>
          <div>
            <a href="https://weather-app-rp-v2.netlify.app/" target={'_blank'}>ir al sitio</a>
          </div>
        </div>
      )
      break;
    case maquetacion:
      return (
        <div className="back_info">
          <h3>{`Ecommerce - (maquetacion)`}</h3>
          <h4>Desarrollado con:</h4>
          <p className='text_pro'>Html y Css</p>
          <p style={{ textAlign: 'center', fontSize: '0.8rem', marginTop: "5px" }} >"Mi primera maquetación desarrollado por mi."</p>
          <div>
            <a href="https://e-commerce-rp.netlify.app/#" target={'_blank'}>ir al sitio</a>
          </div>
        </div>
      )
      break;

      case generador:
        return (
          <div className="back_info">
            <h3>Box Shadow Generador</h3>
            <h4>Desarrollado con:</h4>
            <p className='text_pro'>Html, Css y Javascript</p>
            <p style={{ textAlign: 'center', fontSize: '0.8rem', marginTop: "5px" }} >"Eres novato y batallas con el box-shadow? no te preocupes tenemos la solución.."</p>
            <div>
              <a href="https://box-shadow-generator-rp.netlify.app/" target={'_blank'}>ir al sitio</a>
            </div>
          </div>
        )
        break;


    default:
      return (
        <div className="back_info">
          <h3>No se pudo encontrar el contenido</h3>
          <p style={{ textAlign: 'center' }}>{`(seleccione una imagen porfavor)`}</p>
        </div>
      )
      break;
  }
};

export default Text;