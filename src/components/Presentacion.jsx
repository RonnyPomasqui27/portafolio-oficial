import React from 'react';
import '../styles/social.css'
import nave from '../assets/nave.svg'

const Presentacion = () => {
  return (
    <section className='presentation_container'>
      <div className="present">
        <div>
          <p className='present_txt'>Desarrollador</p>
          <p className='present_txt'>Front-end</p>
          <p className='present_txt'>Ronny Pomasqui</p>
          <div className="links">
            <a href="./Curriculum Vitae - ronny pomasqui.pdf" download={true}>Curriculum Vitae <i className="fa-solid fa-download" style={{ marginLeft: '10px' }}></i></a>
            {/* <a href="#">Proyectos</a> */}
          </div>
        </div>
        <div>
          <img src={nave} className='nave' />
        </div>
      </div>
    </section>
  );
};

export default Presentacion;