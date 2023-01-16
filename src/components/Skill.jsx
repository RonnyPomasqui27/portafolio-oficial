import React from 'react';
import html from '../assets/hmtl.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import rct from '../assets/react.svg'
import redux from '../assets/redux.png'
import git from '../assets/git.png'


const Skill = () => {
  return (
    <div className='skill_container' >
      <h2>Habilidades</h2>
      <div className="skill_collage">
        <img src={redux} className='skill_img' />
        <img src={rct} className='skill_img' />
        <img src={js} className='skill_img' />
        <img src={css} className='skill_img' />
        <img src={html} className='skill_img' />
        <img src={git} className='skill_img' />
      </div>
    </div>
  );
};

export default Skill;