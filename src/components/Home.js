import React from 'react'
import Carousel1 from './Carousel1'
import ReactPlayer from 'react-player'

export default function Home() {
   const videoprueba='https://www.youtube.com/watch?v=t5ETR2QiKkw'
  return (
    <div>
      <Carousel1/>
      <h2>Disfruta  nuestros beneficios de registro a la pagina web</h2>
      <center><h5>tendras descuento del 10% de nuestros productos </h5></center>

      <div style={{alignItems:'center'}}>
        <ReactPlayer style={{margin:'0px auto'}}
            url={videoprueba} //Nos sirve para llamar a la URL
            playing={true} //Nos sirve para reproducir automac¿ticamente o no un video al cargar la pagina
            volume={0.8}  //Es para poner el volumen por defecto en este caso al 50%
            controls      //Para que aparezcan los controles de pausa y volumen
            width='70%'
            height='400px'
        />
    </div>
    <p> <pre><img src="https://polloscopacabana.com/images/products/pc3-papas-3-gaseosas.png"/>
    
    
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROfJdBe-Lh9aUL-793u_zLM44FoFEegOJAnA&s"/>
      
      
    <h3>productos</h3></pre></p>
    <div className='bodySocios'>
        <ul>
	<li>
		<a href="">
			<figure>
				<img className='imgSocios' src='https://media.calcetin.online/wp-content/uploads/2023/12/05200259/2-WEB_0016_2-HD_0021_Group-17.png' alt='Volcano and lava field against a stormy sky'/>
				<figcaption>Calcetines</figcaption>
			</figure>
		</a>
	</li>
	<li>
		<a href="">
			<figure>
				<img className='imgSocios' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfcqqIW_n3YQ93EnoXOmvt20UPbdsJ82q7fw&s' alt='Guy on a bike ok a wooden bridge with a forest backdrop'/>
				<figcaption>Cafeteria</figcaption>
			</figure>
		</a>
	</li>
	<li>
		<a href="">
			<figure>
				<img className='imgSocios' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR0MxuStVCYgK_APNsGf6zRmJ0NQy_lOiTHA&s' alt='Person standing alone in a misty forest'/>
				<figcaption>Oferta</figcaption>
			</figure>
		</a>
	</li>
	<li>
		<a href="">
			<figure>
				<img className='imgSocios' src='https://i.redd.it/que-opinan-de-los-nuevos-platillos-de-pollos-copacabana-los-v0-v395c3lc5pfa1.jpg?width=1080&format=pjpg&auto=webp&s=f46737d3a94d885dba870ed36a323d8af881d6bb' alt='Person hiking on a trail through mountains while taking a photo with phone'/>
				<figcaption>Oferta</figcaption>
			</figure>
		</a>
	</li>
	<li>
		<a href="">
			<figure>
				<img className='imgSocios' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYgnyfQErgZHFyRw0jhmcPsctrJ-QPgAESMQ&s' alt='Street scene with person walking and others on motorbikes, all wearing masks'/>
				<figcaption>Bebidas</figcaption>
			</figure>
		</a>
	</li>
	<li>
		<a href="">
			<figure>
				<img className='imgSocios' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRobz98vIugZIe4-fxoIuiOD_j3KxPcLT8g&s' alt='Fashionable-looking girl with blond hair and pink sunglasses'/>
				<figcaption>Hamburguesa</figcaption>
			</figure>
		</a>
	</li>
</ul>
    </div>
    </div>
  )
}

