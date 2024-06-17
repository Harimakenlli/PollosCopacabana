import React from 'react';

export default function Registrate() {
  return (
    <div className='formulario2'>
      <h1>Registrate</h1>
    <section class="formulario">
          <center><h4>Registrate a la pagina oficial de pollos Copacabana</h4></center>
          <input class="controles" type="text" name="nombres" id="nombres" placeholder="Ingrese su nombre de Usuario"/>
          <input class="controles" type="text" name="Numero" id="Numero" placeholder="Numero de celular"/>
          <input class="controles" type="password" name="contraseña" id="contraseña" placeholder="Establezca su Contraseña"/>
          <p>Estoy de acuerdo con los <a href="#">Terminos y Condiciones</a></p>
          <pre>  <a href="Contactos">Registrar</a></pre>
          <p><a href="Contactos">¿Ya tienes una Cuenta?</a></p>
        </section>
    </div>
  );
}
