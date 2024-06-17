import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import p1 from '../assets/img/combo-antojito.jpg'
import p2 from '../assets/img/combo-fiesta.jpg'
import p3 from '../assets/img/combo-trio.jpg'
import p4 from '../assets/img/combo-especial.jpg'
import p5 from '../assets/img/combo-copalitos.jpg'
import p6 from '../assets/img/combopaceñisimo.jpg'
import p7 from '../assets/img/pipocas-de-pollo.jpg'


import b1 from '../assets/img/baldes/balde-8solobalde.jpg'
import b2 from '../assets/img/baldes/balde-8-solo-papaoarroz.jpg'
import b3 from '../assets/img/baldes/balde-8-combo-papa.jpg'
import b4 from '../assets/img/baldes/balde-12-solo-papaoarroz.jpg'
import b5 from '../assets/img/baldes/balde-12-combo-papa.jpg'
import b6 from '../assets/img/baldes/balde-12 solo balde.jpg'

import h1 from '../assets/img/Hamburguesa/hb-recreo.jpg'
import h2 from '../assets/img/Hamburguesa/hbbicentenario.jpg'
import h3 from '../assets/img/Hamburguesa/hbcopacabana-xl-combo.jpg'
import h4 from '../assets/img/Hamburguesa/hbcopacabana.jpg'
import h5 from '../assets/img/Hamburguesa/hbcopasandwich.jpg'
import h6 from '../assets/img/Hamburguesa/hbdoble-xl.jpg'
import h7 from '../assets/img/Hamburguesa/hbpollo-crocante.jpg'
import h8 from '../assets/img/Hamburguesa/hbqueso-xl.jpg'
import h9 from '../assets/img/Hamburguesa/hbqueso.jpg'
import h10 from '../assets/img/Hamburguesa/hbquinua.jpg'
import h11 from '../assets/img/Hamburguesa/hbdoble.jpg'


import e1 from '../assets/img/Ensaladas/encoleslaw-grande.jpg'
import e2 from '../assets/img/Ensaladas/encoleslaw-mediana.jpg'
import e3 from '../assets/img/Ensaladas/encombo-gaseosa.jpg'
import e4 from '../assets/img/Ensaladas/enensalda-primavera.jpg'
import e5 from '../assets/img/Ensaladas/enpccoleslaw.jpg'

import po1 from '../assets/img/Postre/podonut.jpg'
import po2 from '../assets/img/Postre/pomousse.jpg'
import po3 from '../assets/img/Postre/popie.jpg'


import w1 from '../assets/img/Wraps/wrcopalitos.jpg'
import w2 from '../assets/img/Wraps/wrespinacatocinopapa.jpg'
import w3 from '../assets/img/Wraps/wrpapa-pocalitos.jpg'
import w4 from '../assets/img/Wraps/wrsoloespinacatocino.jpg'
import w5 from '../assets/img/Wraps/wrsolopocalitos.jpg'
import w6 from '../assets/img/Wraps/wrwraps-espinaca.jpg'





export default function Menu() {
  return (
    <div className='bodymenu'>  
  <br />
    <div className='pollos'>
    <h3>Pollos</h3>
    </div>
    <br />

      <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={p1}  />
      <Card.Body>
        <Card.Title>Combo-Antojito</Card.Title>
        <Card.Text>
          costo = 45 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }} href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card>    
            


    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={p2} />
      <Card.Body>
        <Card.Title>Combo-Fiesta</Card.Title>
        <Card.Text>
         Costo = 65 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 


    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={p3} />
      <Card.Body>
        <Card.Title>combo-trio</Card.Title>
        <Card.Text>
         Costo = 125 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 



    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={p4} />
      <Card.Body>
        <Card.Title>Combo-Especial</Card.Title>
        <Card.Text>
         Costo = 35 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 



    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={p5} />
      <Card.Body>
        <Card.Title>Combo-Copalitos</Card.Title>
        <Card.Text>
         Costo = 84 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 



    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={p6} />
      <Card.Body>
        <Card.Title>Combo Paceñisimo</Card.Title>
        <Card.Text>
         Costo = 64 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 



    
    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={p7} />
      <Card.Body>
        <Card.Title>Pipocas-De-Pollo</Card.Title>
        <Card.Text>
         Costo = 130 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 
    <br />
    <div className='Baldes'>
          <h3>Baldes</h3>
    </div>
    <br />
    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={b1} />
      <Card.Body>
        <Card.Title>Combo-Antojito</Card.Title>
        <Card.Text>
          costo = 90 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card>    
            


    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={b2} />
      <Card.Body>
        <Card.Title>Combo-Fiesta</Card.Title>
        <Card.Text>
         Costo = 100 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 


    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={b3} />
      <Card.Body>
        <Card.Title>combo-trio</Card.Title>
        <Card.Text>
         Costo = 125 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 



    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={b4} />
      <Card.Body>
        <Card.Title>Combo-Especial</Card.Title>
        <Card.Text>
         Costo = 145 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 



    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={b5} />
      <Card.Body>
        <Card.Title>Combo-Copalitos</Card.Title>
        <Card.Text>
         Costo = 100 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 



    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={b6} />
      <Card.Body>
        <Card.Title>Combo Paceñisimo</Card.Title>
        <Card.Text>
         Costo = 185 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 


    <br />
    <div className='Hamburguesa'>
          <h3>Hamburguesa</h3>
    </div>
    <br />
    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={h1} />
      <Card.Body>
        <Card.Title>Combo-Antojito</Card.Title>
        <Card.Text>
          costo = 75 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card>    
            


    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={h2} />
      <Card.Body>
        <Card.Title>Combo-Fiesta</Card.Title>
        <Card.Text>
         Costo = 65 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 


    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={h3} />
      <Card.Body>
        <Card.Title>combo-trio</Card.Title>
        <Card.Text>
         Costo = 95 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 



    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={h4} />
      <Card.Body>
        <Card.Title>Combo-Especial</Card.Title>
        <Card.Text>
         Costo = 98 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 



    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={h5} />
      <Card.Body>
        <Card.Title>Combo-Copalitos</Card.Title>
        <Card.Text>
         Costo = 88 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 



    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={h6} />
      <Card.Body>
        <Card.Title>Combo Paceñisimo</Card.Title>
        <Card.Text>
         Costo = 87 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 

    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={h7} />
      <Card.Body>
        <Card.Title>Combo-Antojito</Card.Title>
        <Card.Text>
          costo = 100 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card>    
            


    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={h8} />
      <Card.Body>
        <Card.Title>Combo-Fiesta</Card.Title>
        <Card.Text>
         Costo = 67 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 


    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={h9} />
      <Card.Body>
        <Card.Title>combo-trio</Card.Title>
        <Card.Text>
         Costo = 134 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 



    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={h10} />
      <Card.Body>
        <Card.Title>Combo-Especial</Card.Title>
        <Card.Text>
         Costo = 100 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 



    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={h11} />
      <Card.Body>
        <Card.Title>Combo-Copalitos</Card.Title>
        <Card.Text>
         Costo = 120 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 



    <br />
    <div className='Ensaladas'>
          <h3>Ensaladas</h3>
    </div>
    <br />

    
    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={e1} />
      <Card.Body>
        <Card.Title>Combo-Fiesta</Card.Title>
        <Card.Text>
         Costo = 65 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 


    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={e2} />
      <Card.Body>
        <Card.Title>combo-trio</Card.Title>
        <Card.Text>
         Costo = 55 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 



    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={e3} />
      <Card.Body>
        <Card.Title>Combo-Especial</Card.Title>
        <Card.Text>
         Costo = 80 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 



    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={e4} />
      <Card.Body>
        <Card.Title>Combo-Copalitos</Card.Title>
        <Card.Text>
         Costo = 90 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 



    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={e5} />
      <Card.Body>
        <Card.Title>Combo Paceñisimo</Card.Title>
        <Card.Text>
         Costo = 65 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 


    <br />
    <div className='Postre'>
          <h3>Postre</h3>
    </div>
    <br />



    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={po1} />
      <Card.Body>
        <Card.Title>Combo-Antojito</Card.Title>
        <Card.Text>
          costo = 20 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card>    
            


    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={po2} />
      <Card.Body>
        <Card.Title>Combo-Fiesta</Card.Title>
        <Card.Text>
         Costo = 35 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 


    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={po3} />
      <Card.Body>
        <Card.Title>combo-trio</Card.Title>
        <Card.Text>
         Costo = 35 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 


    <br />
    <div className='Wraps'>
          <h3>Wraps</h3>
    </div>
    <br />


    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={w1} />
      <Card.Body>
        <Card.Title>Combo-Antojito</Card.Title>
        <Card.Text>
          costo = 45 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card>    
            


    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={w2} />
      <Card.Body>
        <Card.Title>Combo-Fiesta</Card.Title>
        <Card.Text>
         Costo = 67 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 


    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={w3} />
      <Card.Body>
        <Card.Title>combo-trio</Card.Title>
        <Card.Text>
         Costo = 58 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 



    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={w4} />
      <Card.Body>
        <Card.Title>Combo-Especial</Card.Title>
        <Card.Text>
         Costo = 88 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 



    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={w5} />
      <Card.Body>
        <Card.Title>Combo-Copalitos</Card.Title>
        <Card.Text>
         Costo = 90 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 



    <Card style={{ width: '15rem',height:'25rem', background:'',color:'',margin:'10px 10px'}}>
      <Card.Img variant="top" src={w6} />
      <Card.Body>
        <Card.Title>Combo Paceñisimo</Card.Title>
        <Card.Text>
         Costo = 45 Bs
        </Card.Text>
        <Button style={{ backgroundColor: 'green', borderColor: 'green' }}href =' Compra'>Comprar</Button>
      </Card.Body>
    </Card> 




            </div>
  )
}
