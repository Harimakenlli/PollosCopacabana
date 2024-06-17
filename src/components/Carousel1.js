import React from 'react'
import Fondo3 from '../assets/img/Logo2.png'
export default function Carousel1() {
  return (
    <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{width: '0px', height: '370px',margin:'10px -10px'}} src="https://userscontent2.emaze.com/images/d49646ad-a488-451e-92fd-48335dfc8636/6e0b86df2570d3365721ef71dfb62e14.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3 style={{color:'black'}}>Aqui encontraras las mejores ofertas</h3>
        <p style={{color:'black'}}>mas aun si te registrar a la pagina </p>
      </div>
    </div>
    <div className="carousel-item">
      <img style={{width: '0px', height: '370px',margin:'10px -10px'}}src={Fondo3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h3 style={{color:'black'}}>Acemos pedidos onile</h3>
      <p style={{color:'black'}}>puedes comprar desde de la pagina </p>
      </div>
    </div>
    <div className="carousel-item">
      <img style={{width: '0px', height: '370px',margin:'10px -10px'}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOwzlFJTro04CtJzVberGDhPrry-mWg7_UA&s" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h3 style={{color:'black'}}>Aqui hay grandes combos</h3>
      <p style={{color:'black'}}>a precios regalados  </p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}
