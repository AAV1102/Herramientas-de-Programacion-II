import React from 'react';
import './Contact.css'

function Contact() {
  return (
    <div className="contact-form" id='contact'>
      <h2>Contacto</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
