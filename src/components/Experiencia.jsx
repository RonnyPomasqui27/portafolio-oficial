import React from 'react';

const Experiencia = () => {
  return (
    <div className='exp_container'>
      <div className="exp_lenguaje">
        <div className="exp_icon">
          <h3>Lenguajes</h3>
          <i className="fa-solid fa-flag"></i>
        </div>
        <div className="tex">
          <p><b>Español: </b> Nativo</p>
          <p><b>Ingles: </b> B2</p>
        </div>
      </div>
      <div className="exp_experiencia">
        <div className="exp_icon">
          <h3>Experiencia</h3>
          <i className="fa-solid fa-briefcase"></i>
        </div>
        <div className="exp_presen">
          <div className="exp_work">
            <div className="icon_exp">
              <i className="fa-solid fa-microchip"></i>
            </div>
            <div>
              <p className='date'>2021-2022</p>
              <p className='title'>Desarrollador con Visual basic</p>
              <p className='place'>Vteksoftfin</p>
            </div>
          </div>
          <div className="exp_work">
            <div className="icon_exp">
              <i className="fa-solid fa-shop"></i>
            </div>
            <div>
              <p className='date'>2020-2021</p>
              <p className='title'>Atención al cliente y cajero</p>
              <p className='place'>Broos shop</p>
            </div>
          </div>
        </div>
      </div>
      <div className="exp_educacion">
        <div className="exp_icon">
          <h3>Educación</h3>
          <i className="fa-solid fa-school"></i>
        </div>
        <div className="exp_presen2">
          <div className="exp_work">
            <div className="icon_exp">
            <i className="fa-solid fa-school"></i>
            </div>
            <div>
              <p className='date'>2020</p>
              <p className='title'>institucion educativa fiscal cumbaya</p>
              <p className='place'>Quito-Ecuador</p>
            </div>
          </div>
          <div className="exp_work">
            <div className="icon_exp">
            <i className="fa-solid fa-desktop"></i>
            </div>
            <div>
              <p className='date'>2022</p>
              <p className='title'>Fundamentos de Desarrollo Web</p>
              <p className='place'>Academlo</p>
            </div>
          </div>
          <div className="exp_work">
            <div className="icon_exp">
            <i className="fa-solid fa-tablet-screen-button"></i>
            </div>
            <div>
              <p className='date'>2022</p>
              <p className='title'>Desarrollo de Aplicaciones Web con React</p>
              <p className='place'>Academlo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiencia;