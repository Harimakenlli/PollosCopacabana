import React, { useState } from 'react';
import Fondo6 from '../assets/img/fondodedespedida.png'

export default function Compra() {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [metodoPago, setMetodoPago] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('¡Muy buena elección! Tu compra ha sido realizada :V.');
  };

  return (
    <div>
      <h1>Procesando su compra </h1>
      <p>Esta es la página de compra de Pollos Copacabana</p>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Dirección de envío:
          <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Método de pago:
          <select
            value={metodoPago}
            onChange={(e) => setMetodoPago(e.target.value)}
            required
          >
            <option value="">Selecciona un método de pago</option>
            <option value="tarjeta">Tarjeta de crédito</option>
            <option value="paypal">PayPal</option>
            <option value="transferencia">Transferencia bancaria</option>
          </select>
        </label>
        <br />
        <button type="submit">Confirmar compra</button>
      </form>
      <img   src={Fondo6} />
    </div>
  );
}

