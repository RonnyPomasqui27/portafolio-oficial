import React, { useRef, useState } from 'react';
// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/email.css';

const Email = () => {

  const form = useRef();
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o1ivzud', 'template_9l6mksz', form.current, '7xqla_-4kEMRCVyl_')
      .then((result) => {
        console.log(result.text);
        setInput1('');
        setInput2('');
        setInput3('');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='email_container' >
      {/* <form onSubmit={}></form> */}
      <h3>No olvides contactarme !!!</h3>
      <form onSubmit={sendEmail} ref={form} className='formulario'>
        <section className='nombre'>
          <div className="fomr_cnt">
            <input type="text"
              id='sms1'
              className='input'
              placeholder=' '
              name="user_name"
              maxLength={50}
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
            <label htmlFor="sms1" className='label'>Nombre:</label>
          </div>
        </section>
        <section className='nombre'>
          <div className="fomr_cnt">
            <input type="text"
              id='sms2'
              className='input'
              placeholder=' '
              name="user_email"
              maxLength={100}
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />
            <label htmlFor="sms2" className='label'>Correo:</label>
          </div>
        </section>
        <section className='nombre'>
          <div className="fomr_cnt">
            <textarea type='text'
              className='input2'
              placeholder=' '
              name="user_message"
              id="mensaje"
              cols="20"
              rows="5"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
            ></textarea>
            <label htmlFor="mensaje" className='label2'>Mensaje:</label>
          </div>
        </section>
        <button type='submit' className='submit'>Enviar Correo</button>
      </form>
    </div>
  );
};

export default Email;