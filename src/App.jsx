import './App.css'
import Navbar from './components/Navbar'
import back2 from './assets/background2.png'
import back3 from './assets/background3.png'
import back4 from './assets/background4.png'
import back41 from './assets/background4.png'
import back5 from './assets/background5.png'
import { useEffect, useState } from 'react'
import Social from './components/Social'
import Presentacion from './components/Presentacion'
import About from './components/About'
import Skill from './components/Skill'
import astrounata from './assets/astronauta.png'
import Experiencia from './components/Experiencia'
import Proyecto from './components/Proyecto'
import Email from './components/Email'

function App() {

  const [isVisible, setIsVisible] = useState(true);

  const [boll, setBoll] = useState(true);

  window.addEventListener('scroll', () => {
    let value = scrollY;
    if (value > 900) {
      setBoll(false)
    }

    if (value < 1000) {
      setBoll(true)
    }
  })
  return (
    <>
      <header className='navbar_container'>
        <img src="https://www.pngall.com/wp-content/uploads/2/Rocket-PNG-Pic.png" className='nav_logo' />
        <div className="nav_hambur" onClick={() => setIsVisible(!isVisible)}>
          <div className="hambur_item"></div>
          <div className="hambur_item"></div>
          <div className="hambur_item"></div>
        </div>
        <nav className='nav_list_container' >
          <ul className={isVisible ? 'nav_list' : 'nav_list active'}>
            <li className='nav_li'><a href="#home" className='nav_item'>Inicio</a></li>
            <li className='nav_li'><a href='#about' className='nav_item'>Sobre mi</a></li>
            <li className='nav_li'><a href="#proyect" className='nav_item'>Proyectos</a></li>
            <li className='nav_li'><a href="#contact" className='nav_item select'>Contáctame</a></li>
          </ul>
        </nav>
      </header>
      <Social />
      <Presentacion />
      <div className="App" id='home'>
        <img src={back2} className='back_img' id='estrellas' />
        <img src={back3} className='back_img' id='planeta' />
        <img src={back4} className='back_img' id='montania' />
        <img src={back5} className='back_img' id='rocas' />
      </div>
      <section className='about_container' id='about' data-aos="fade-up-right">
        <div className="cubos_container2">
          <div className="cubos"></div>
          <div className="cubos"></div>
          <div className="cubos"></div>
        </div>
        <About />
        <div className="cubos_container">
          <div className="cubos"></div>
          <div className="cubos"></div>
          <div className="cubos"></div>
        </div>
      </section>
      <section className='about_container2' data-aos="fade-up-right">
        <img src={astrounata} className='austronauta' id='skill' />
        <Skill id='skill' />
        <Experiencia />
      </section>
      <section className='about_container' id='proyect' data-aos="fade-up-right">
        <Proyecto id='proyect' />
      </section>
      <section className='about_container' id='contact' data-aos="fade-up-right">
        <Email id='email' />
      </section>
      <div className="subir">
        <a href="#home" className={boll ? 'up' : 'up isvisible'}><i className="fa-solid fa-up-long"></i></a>
      </div>
      <footer>
        <div className="footer">
          <a href="https://www.linkedin.com/in/pomasqui-ronny-46ab6a219/" target={'_blank'}><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/RonnyPomasqui27" target={'_blank'}><i className="fa-brands fa-github"></i></a>
        </div>
        <div className="foot">
          <p>ronny27pch@gmail.com</p>
        </div>
      </footer>
    </>
  )
}

export default App
