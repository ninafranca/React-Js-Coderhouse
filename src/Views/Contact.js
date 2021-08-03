import React from 'react';
// SCSS
import './_Contact.scss';

function Contact() {
    return (
        <div>
            <div>
                <h2 className="titulo">CONTACTO</h2>
            </div>
            <div className="form-cart">
                <section id="form">
                    <form className="contact-form">
                        <div className="section-contacto__form--nombre">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" id="nombre" className="shadow p-3 mb-2 bg-body rounded" />
                        </div>
                        <div className="section-contacto__form--email">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="mail" className="shadow p-3 mb-2 bg-body rounded" />
                        </div>
                        <div className="section-contacto__form--consulta">
                            <label htmlFor="consulta">Dejá tu consulta</label>
                            <textarea type="text" name="consulta" cols="42" rows="5" id="consulta" className="shadow p-3 mb-2 bg-body rounded" />
                        </div>
                        <div className="section-contacto__form--borrar-enviar">
                            <div>
                                <button type="reset" id="borrar" className="rounded btn-outline-dark">borrar</button>
                            </div>
                            <div>
                                <button type="submit" id="enviar" className="rounded btn-outline-dark">enviar</button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default Contact;
