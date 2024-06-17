import React from 'react';

export default function Contactos() {
  return (
    <div>
      <h1><i>Registrate a la pagina oficial</i></h1>
      <img src="https://thumbs.dreamstime.com/b/comida-de-la-compra-gente-en-restaurante-los-alimentos-preparaci%C3%B3n-r%C3%A1pida-pollos-copacabana-paz-99331661.jpg?w=400" width="600" height="565"/>
      <h2><i>Beneficios de registro</i></h2>
      <ul>
        <li>Obtentras 10% de descuento en nuestros productos</li>
        <li>Podras hacer compras en linea</li>
        <li>Pedidos a domicilio</li>
        <li>Obtendras un codigo para un sorteo</li>
      </ul>
      <pre><h3><i>inicia sesion</i></h3></pre>
      <pre><p>Usuario                            Contraseña</p></pre>
      <input type="text" name="usuario" />
      <input type="password" name="Contraseña" />
      <br />
      <font color="blue" size="1"><p><a href="Registrate">Registrate</a></p></font>
      <pre><button><a href="Home">Entrar</a></button></pre>
      <br />
    </div>
  )
}
