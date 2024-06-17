import React from 'react'
import redes from '../assets/img/RedesS.png'
import Ubi from '../assets/img/Ubi.png'
import Soci from '../assets/img/RSociales.png'
import Correo from '../assets/img/Correo.png'
import Acerca from '../assets/img/Acerca.png'

export default function Footer1() {
  return (
        <div className="bodyfooter">
        <div className="footer">
        <ul className="abajo">
           <li className="menu-elem">
            <a href="" className="menu-elem"> Telefono </a> 
            <li>
            <img style={{width: '115px', height: '115px',margin:'5px 65px'}} src={redes}/> 
            </li>
            <p>Puedes contactrnos</p>
            <a href="https://web.whatsapp.com/" className="icon"target='_blank'>
            <img style={{width: '30px', height: '30px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHKUlEQVR4nO1ZeWwUZRRfPKIx8T4SNWr806gx0T+M/lWvaIwaQUIQr6hBRFQ8IMjlhaggCgohiuCBNx6J0KC0YsEWtHa7c3R3Z75v5pvZbo89elJ2d/Z+5k3odqa77R4dNCZ9yZdsZmfee7/vnd/7XK5pmqZpmjIBwAk8Idd7CFvRoWgNAtWCPFHjnKxmceFvfCZSbT8nqas8knLjLoATXf81cYRczFO2nidswMcCsa5wNDM0chQSyRRksznI5/Pmwt/4bGgkBl3hvqyfdcYEwoZ4wja5vezSf11xrzd4jkC0HTxRDVTaSKagWjJSaeiO9GUFwgyBsp0eSs//V5TnZGUOT9gRVDyTzcJUKZvLoVUyPGFHOYk9cNwUb2pqOkkg2navqifiRrKkMr1GGPaGf4NN6jZY5l0DTwvLYZGw3Py9Uf0I9oQaoNvoLfltIpkEn6on0Bput/tkZ5XX9VMFojUowR4Dd8xKecjDb9E/YCG/DOqaZ1a0nuCWQH2oEdK5tI1XLpcD1tWbFCk76Hb3nObkzjdo3aEUBqSV3EMCzOderFjx8Wtu2wJo6W+1b0g+D4GecEog7IAjluCp9jHuvFX5HORhm/5FzYqPXxuUrZCyWANloSXQnaakvEdis72qHre6jZE1YIXvTceUrzu2nhNXQzwbt7mTVw0YNQe2KHaeLRA2bA1Y3PmV/rccV77u2FosrrJZAgObJ2zELcvnVQ+Asm3BUDRj9U8n3WYyd7ISpliBss+rUt7tD1yIRcqa51sHPUXCbm65Dz7r/BakEQp/9P8Fdx6e5wiIFktgYxXHYtehKJdUDECQ1TexUI0yyeSz8EDbU0WCdnXvtu3Wh/rnjgCY27bAlmKxYvOEbaxIeQCYIRAtir3LKO2LNBUJedC9yKwB4wvZTc2zHAFRH2q0tR3YO1XUAAp+5VqfGohZFVvEv1QkAOOhFGHVdQLAAm6Jja+fBWLtfuWGsgA4SV0aDEcL9osk+0ru6u7QvpIADg387VhA9xphWzBzkrKyLIAOqtUPHjla+PDXyO8lmX8Z/KEkgIN9hx0DUG9xI2zTRUVrLAtApBqz5v4tbEdJ5q9I64uUH0gNwZy/5zsG4H314wJvjEmBskD5GCBsOJ0ZS58TFa7bDs2B4fQRG4A18nuOKV/XPBNe8r1R4I0pXSAsVj4GZJbEMj5KWOInEvAB217U3DmVheqaZ8Izwgpbf8TJaqYsAF5WbS3zix2vTCgAC5l0VLGBwL7fKQDPCisLfHOVAhAo60+lxzqIV6UNkwp52P202eAVTJ3PwFLva44AWO5ba3MhPLWVB6BoqjWIt2qflhW02r/OVtSwIZsoHtBCX3X9CLNbHy/LdzPbYQniJIiU6WUBiIr2ff/wWHA29bVUtFvbA18VZSU8Qt7950OFd16V3ikAxVZhT6gB5rUtnJDnL+H9BV6Y2kWq/1oWgEdSFwdDkUIh608NVByYpWpDLBM3d3wt2WRztTHfzpln6PG8UCYW0VHC3oyT1WVlAfB+9aoORR87WQDAC5MEcikXyearm1b82FNfxAcHAlbyqXqsXVKvKwvAdCPKuq1xsD/aXFXwPckthUA8WDGA1+V3i3g0RA7Y/F+gDM0xoyIAPGVrOi1uhCexxz3PVwXi1pbZsI5uga5Ez6TKtw3xcEvL7KLMZrViMBzNCIS95apm8sYTNWFNpyio1nSII5cfevaYVhkNYoytbfoXJtDxvo8FcZQyGUyfaqJdki6qGMAxK3wdHhgqMAoZEUdy+x2H74e7/nxwwv8/CXxtsxB6gkC0ra5qSaQ6PxIbi2Vsn50AMNla5X/bdNdRiiUM8yDjZuzMqpSXJOl0jrBULjfGDLvP46n8av86W5rFdqZD0ROcrNxb9e63S8o9NNAVs+Zqa0Fyct3UPAs+0nfadh4bNxrsNniibXHVQjjEDfcPFjj6RkhB4O2H5sKSjtfgm66foDF6EB5tX1yz8o+0PwOeIdHm86g8jjFFyvbWfAkiUNZrPdTjKQuDix/2Fg9kIW+2G8+Lqyuq2PjOs+JKcyCcy9sHxThCoZ3dBipPKT2lJuV5Wb5cpCwBNVB/ahB+72sxxyvY92AFx4XBiU3hvsgB851SFEsYps+LVNsypesnTlIXBHrCpS8ALGZGgdaTW62UzmShszeS5gkbxNhzTZVEhe0bPDJSJAivkaKDw6AEe+O8zHByrOPhp7M3kprowmMywm+CoWgai5RAtc1/UXqGI3cBeKOI1Q+r8MDwCGg9IfRJvDkJ4YwSr5hGh62tfv+5vKy+jDHToWhx7GKxFUfl8HtMhbjSmYz5DPnhOzjxFogWxpaFV9ULXE4Rp+tnYf73KjreIg6LlP3MS+yxdp92Wblv2wm5AltxgbLvRKpRPNmhhXBhMRKppoiKtpuXlRc8RLum4sasWhIkdjXnU66s+sNpmibX/5L+AahqYyCllOFHAAAAAElFTkSuQmCC"></img> 
            </a>
            </li>
        
            





            <li className="menu-elem">
            <a href="" className="menu-icon"> Ubicacion</a>
            <li><img style={{width: '115px', height: '115px',margin:'5px 65px'}} src={Ubi}/> </li>
            <p>Puedes encontrarnos en</p>
            <a href="https://www.google.com/maps/dir/-16.5019648,-68.1312256/Pollos+Copacabana,+Av.+16+de+Julio+1854,+La+Paz/@-16.5034226,-68.1317851,19.21z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x915f207aca060e67:0x80769ac30771f348!2m2!1d-68.1315415!2d-16.5036986?entry=ttu" className="icon" target='_blank'>
            <img style={{width: '30px', height: '30px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEcklEQVR4nO2WfWwTZRzHL5rwF3/6H/zhWxSXOJPtbtO53sEYiQhRJq6LgRENQzAqM+qSRWEal8BAEWOIbCZg5t7MENkgmca2GwRI17dtDe1dhTmYW1e2wbpmmy9byc88j7b06L09115dYn/JN22uT9LP5/nd756jqGz9j8uXk7PCb6IrBJZu51kmILDMPMo/3+n2AMuY0RpqOZawlt7Kc8yvAseAUniWGeZZ+iVquRSUl9/Pc/RnauBCssinQFH3/df8lB54IR76kOY/yuksX7GqseLQqibzxOqmCkhHXtm3WSc4E4+fK9iiSWB1k7khXeAoD35lBtumopQFeI4e0TTYUjtf1PE2tAlWmJi/DUt3ovizhbfA0+1vqQps+2CTIpizOB+6mFwcZ3Ge4toAV1CuoQNigMqegzC/+AdI1djcNDx6olJR4PiOdbJAZ5lcqH38Eah57GEc9B1dU+hCK5HAsx174/A3IjfhvfONsKVrP/4cmhqGjadrVTtg3Vwku/O1CfCJEnKdQOcEkUC7YIvDrzn5qq4ZGFhfKAlzhslNgo+li3lSugssM0ckcHNhBgugHY9dK+v+CA442kTZbflcVsBbUiAJ06Ug0C0nwDELRAJoYFGh2yZ27ajn+6RZcISE5XkLheZvY8D3L9ztwGs/HYZW3opzdWYM/24Z9cgKHNlZQjTE5wqUhphp1DUDo5FJWPONeAaeat4Fkwth/HuDo0NWgGsoU3mM5uF7HsWl8hjlTfl5RALo+R97CiGJmgtNUNZdB++ePw4jsyF8Hf2e37JHcZC/M5tSPsgElraqwt8rgLK95wDMLf4ueQ4s3lmCPZajivAPfW2Gvu4SCJSmcAqzzJ+/sIVP6BJAQScuOnmDc7fgr+giPsB+uHZR9RxA8JbLGwAEE9z64pkUOkDXaIKXE9CTRHgcvwl+e6OQfPc5pofoddoQ+H8TdRbD1Re1v9j5XyiFAJf/gGb4dAjIwaNEfFUw2NkM/Frpw02UdYUw0NECRPCpCqjBezyXweV2gLd+n6qAt34/XpsxAa3wOP2XwP+y/Gs2v/V5vCZjAkrwSyPVMBG8Dm6P866A2wEDbc2yAoOtJ+PrDBdQgw/PTEI4HIZgcDxJwrerMgne9/oO0RpDBbTCxxKcCIokBr49obj7hgoowbt6q8HqmRLBxyUSO+HqF80CvvedduMFlOAdtmoorZuG9XUR+Nk9qyrhbfgkLjB0uF4Eb4iAFnj2wwiOFgnP2dNxAc+5M8YKkMBrlnA7QHiOA2Eji28pwwT0wGuV8FVtA1/V9iT4tAmkAq9FYuTLI+A9+LExAumAJ5kJVzoF0gmvV4LSK2AEvBaJ8XskdAkYCU8qQZFWJuBZDRJj42NYgligTxb+nbTCs3GJWegdlJa4Pj5KLjDl5aJG7zwr2YlkgWuhG1FigR8vbbAnwvfb9hoKzyZ0wjYoFjh1pddOLHCsj1uJJFAn7L1vZgSeTZCwDk3DcGg0euqKzX7M17mSWCBb2cpWtqhM1N/zqhV03khKRQAAAABJRU5ErkJggg=="/> 
            </a>
            </li>








            <li className="menu-elem">
            <a href="" className="menu-icon"> Contacto </a> 
            <li><img style={{width: '115px', height: '115px',margin:'5px 65px'}} src={Soci}/> </li>
            
                        <p>Revisa nuestras redes Sociales</p>
            <a href="https://www.instagram.com/accounts/login/" className="icon" target='_blank'>
                <img style={{width: '30px', height: '30px'}} src="data:image/png;base64,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"></img>
            </a>
        
            
            <a href="https://www.tiktok.com/discover/pollos-copacabana-la-paz" className="icon" target='_blank'>
                <img style={{width: '30px', height: '30px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9ElEQVR4nO2ZPUscURSGHwkiKeLHJjH+A3+DiBhts6mSdDb+BSPYilnEL2StksY0SZrtAiEhxe7WaYKN/yCQSnEdsQl65MIsrJeZnTubu+y5y7zwNss9c87D5dw5dxYKFSrUq14CTeAKkAH7CmgA5bwQ2wqKlxRX8uyEKHfZBaSpoFDJcN0FJFJQqGT40gVEAnGmBl2gaAeZtvL8GhaQ/WEBmQX+hQjyNCHXboggTxJyPQBqwwBiNAKsA61QQB5n5B0HVoAj4FYzSAl33WgGmbLyrIUKUrLymHnpbdwjQe9IFP/+E3huAd0MCsScOIfAYseLz56iJ1NA2v4T3wJrg2r2zylHa16QvPYKstXlOXahE1pBvmQ8JwiQVsrs9Br4BpwkNOy4RpBqQtz7jBiVIMtWzCuHmEcaQWasmK+hgoxaMb8dYh5aMdcaQJ7l3JG/1vqJ/4QQXyBLOXvknbV+TgtINSHuQ8raH8CYtXZHC0gr5T3yBvgOnMbD4Gp8ne2UGR7PtIBIPGP1omMPEOITxHgzJ8SGJwjxDWL8qcuHhbbMpeqjRwjpB4jxBXAALHTcBE0vzAN7wLlnCOkXiG2Xi1EQIKIBJFJQpDgc/5lqKChUfPz1VlZQqGT4BY6qKChWHOc2p52pK+mZKK7FeScKFSrEPd0Bxx7VAwDpFdUAAAAASUVORK5CYII="/>
            </a>
            
            
            <a href="https://www.facebook.com/PollosCopacabanaoficial/?locale=es_LA" className="icon" target='_blank'>
                <img style={{width: '30px', height: '30px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE1klEQVR4nO2Z609bZRzHT7ht64DJdWNlzA7GWoyvjIv+FZqomZkvJJkvfa8hjsNt0DEqQ2DQcqczJijgBXDqFuOyxPhCsxBMHPSyXg6l7WnP6SnQnkL5maeoYeG05zx9oGrCN/m9/3xPn9/v+T3fUtSRjnQkck1BtnYi9OqlcaGhdjw0XTvO/35xNBSsGeNi1aNcrHqED2qGuSXNcHBaYwo2nDexr1A0ZFH/tl74bPOczhzWaycF96UJAVDVjofg4hgqHmpGeage4eHCMJcozVAQnjehCsD5wYCraoDtUJvYyoyD10wJZTpz2KidFETtZBiw4Y0BqBpkE1V5xy9W3vENVBiZ0ozA190NX9VOrgd05jCQwp8bSBhIlLrfx57t9b19aOAvGSG37m54SGdeh0OAh7N9qLxQ0esdpIyQe9DwqjpzeCED8HDmEy+U96zNVxgZ1UHB52YS/nTPWqLKbq/+QNFLecQGMnRsYC98+W0PlHV7oLSbGSCD/zT8Dim8xsjCtXsCjC5G4IFDhF/XtuBnJgYPnSLMWaLw0UNBEr6sexVKP16Foi73lbTgtROhEt3kup8E/rVZHmz8NqTSI5eYFL7EwEBJFxPI70pjxKI5TwL/+iwP4vZOSvi9BiThDQwUdzFQ1Onqx4J/0bxRSXJJXTCx4BLioESPXGJq+FtuVGKRnqnC+fp6koZ9/35YEfzfBmTg4blOF5y66exQRk9DlnZCcJFMm+knUZCSI7QNb85wUDvo260BL2j61xTAu6BQ73CjpVGWP7FVEo7K5aB0474xw6VuWIM0/KmbTijUJ+qyrAG0EpPO+WBkf/N61uNwhgC+oMMB+XrHh/IGJkIzpJfUlkT//rIaI4Iv6HDAyXbH57IGasf4JdIbNi4xPe/bo0Tw+e0OUN2wL8oaqBkLBUjXAykD39uiRPAnbzyFE212v7yBUU4k3W2SG0gfXtX2FFSt9qisgeoRTsSBRxcWH915pqQUiwNwkfi+Mv22rgy+zQ4nWpQZCOB8eUGUXxdSqeknXhl8qx2OtdjkjxBKD3CODamBqzOsIvjjLTY43myTb2LNUHAG58yTGrg87FEG32KDY802+TGKchuchg0RGNiKA5TecimFh7wmyweyBlDohPOSqp/j4b2Fv2qeg2tzHEhZerwWg/qvA1D/FQvvfrlbV77wY8BbIafZ+rKiZa7KyDrTfQaiUSk1Rr+zRpRPm9b98LlNVofiNA8lZunCozmfzEC68HnIAG1pp5QKxX27iRk+PLqgpAzcs0RI4KNUwxM1hSMU96UDn9zAZrrwkN1o6cWCTxgY4ovVfT4/LjxaD5IZSAc+p9HCUvQf6eWmKKvEhUd7TSoDmPCQ3bjyFkUilFXiwKcygA1/fbmPItYUZJ/u8cziPEYkDaxsYsHnNK7MUfSPOeQG0K9gZFTl3Z55pfu8lIFvVzaVw19f+YaiDyjc/UdGyEVZpZJ9PrkBhceGPqAvLyWUVZYY3P5Uj5FkBmTgfcQNq1QF7e4SFPcVdbqjUutBMgPJLqlsNOfppWIq0yo2ONUoMSvUO5x7LykpAwvLG8/uNrTVmVgPcG/YQxENWSh0QrkNij4WveKGi4/FN2I7sLm1A0xoK25+LLBon0crcWKr/C/8zXqkI1H/f/0JPDNnaCVeJTwAAAAASUVORK5CYII="/>
            </a>
        

            </li>




            <li className="menu-elem">
            <a href="" className="menu-icon"> Correo </a>
            <li>
                <li><img style={{width: '115px', height: '115px',margin:'5px 50px'}} src={Correo}/> </li>
                <p>Envianos correos </p>
            <a href="https://mail.google.com/mail/u/0/#inbox" className=""target='_blank'> 
            <img  style={{width: '30px', height: '30px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEB0lEQVR4nO2Z228TRxSH89RXxF/QP4NHJKCRUAsBQwJNAo5kIAmQmIIEAkKhCghVVNBWLfCAECoXcW9DESWKIFyEaJPg2BQn8X12be/ujGPX8QUJRHWqs02CnV2PHXttgrRH+skvuzvfNzvn7IPr6swyyyyzzDKqkk/vLpZv3XikEDJBKV1QUQiZUG7fHISRgUW68KTv1jLavR2Uhs+BdWyBlMsJ2Wx2QSTlcqpMyEa7d4B0785SjQDtPfIWL5iNZTUkfrkA2VTqw8GnUioDsuSxHf3mrVagZWP+RdOJ7e6GtN9Xc/h0KAixvXt0mWjrl6AVsFl1L1ZvaLJAsu9XyGYy1YfPZNS1cM2CPDarVsC31QZ0XUPBmzCTX/dAJhqtGnwmGlXX4DEgo3+LTSswtGQJeNqsQK0t/Ae0boSpwYeGw08NPlSfzV3b2qIyIquuAMaxfBnIe3ZxH4SJHz8KGcYqh4/HIf7DqaLryV/ZYfSzFSojV2Amwc4OoM1N3IcyWxtMjQyXDZ9yjgJrt/HhN6wDYu/KYytJQJUYGQZWYBLMZs0XkDjzM2SSydLhU1P/j8e1q/gbtNsOEYdDw1WygM/nA8/4OMgXzoNi4Tc429EB6fGx4uPR64HYrp38TbGsBnb2NIihIBBCyhfAm71eL3g8HhAePwZa5HXTxrXwz9Ur+uMWx+PvfdzxqKgjsg3kp0/UtWdSkUAoFFIFMF63G+iP3xdtuNiBfZAWxfzxeJg/HhV8i98eB8HrzYOvWAATDAZnJTCRO78BbdnA38nmJkgO9KspNgwoPuveXQ24YQKYQCCQJ+F3OIAdOlB0V4vu+v69IL50FYQ3TACjNnWOhGdiAuRLF4GuXzN/eEsDsPPngIRCXHhDBXKbOjehZ8+A7uwsfdc7t4H05/Oi4FURwKbWk8AGV07/pH4XeN8MdvI7EHy+kuGJ0QJzJ9PciPf/ANrWqm3UTc2gDPTPC5xUS0BvMuU1uHMU6JFD749Mz36IuF+VBU+qJYDx+/0FJTDS1StAb1wrG5xUWwCPkmYyTQfHriAIFcOTagoUamqjwEktBHKbGkXC4bCh8KQWAhhRFA3feVIrAUmSIB6Pq78flYAgCMAYg0QiMZtIJPJxCITDYZicnMyDx+CbwOO0oAWk6SMzF34msVhsYQqIoqg5MoVCKa2twHB9/b88ATzbvF3XSzQarYrAi5UrtQLO9vYxPQFsVEVR5gWeGyO+C0NzuP4+ePCdRsDd2/vpi8bGdO6FeGTwPJcLj8FGr/T7MJTD5Ny8GYL9/fV1evXq+vVPXvb0HHbZ7Q9cXV1/ybL8iDH2vNJIkuQRRTFdbsaOHXvjPnHitffyZVciEND/g8Mss8wyy6y6Muo/6oerF8nw6+QAAAAASUVORK5CYII="/>
            </a>
            </li>



            </li>
            <li className="menu-elem">
            <a href="" className="menu-icon"> Sobre Nosotros </a>
            <li><img style={{width: '115px', height: '115px',margin:'5px 65px'}} src={Acerca}/> </li>
            <p>Puedes ver como comenzo todo </p>
            <a href="Acerca" className=""> 
            <img  style={{width: '30px', height: '30px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADDElEQVR4nO2aX4gNURzHP9e/FGLt5s+iZVfhWRTyQinUWskLEQ+kbHmTJxIPS1FeFG/+ZUtqPSjRhl0P5IFVREhhL2KXsOvuWjs69b11mu7uzJ2Zu3dmm2/9mnvvzPmd+cz5nTnn/M6FVKlSpZLuAjmgW/YVeAHcAy4Bh4CNQCXFqwrYABwGLgLtwBvgG9ALODJTV2g5Pu0f8Ehgc4bxNxM4CDxUGb/+QyvvaAJQAcwGFgFrgd1Ak1rtl3XtgFqr1vJjyp0H+qzrfgP3gZPytUa+q1RXphQgXjKg6xUiOZUxcPuABoWL+a0faAbqgYkR1l8SR7P09Add4XEBmFekL6ecIHltVj8wobZtpOuv0NN8CbyN4Ink1BeCypHl35g31N881RzxWyMqEMeyFj8FTaf8C1S7HJUbxGi61Tqe6pERQxCs17anUpAhlLaIlIZWT8SdvWO0dHajZYwCkKkhysYGpElzLTPN3wVMSSrIcdfUwvi9DKwDxiYJZLFV/o9rWv/Y5/LYiQMIWv6a8o3AfC288j6f+IBx4gKyX+VvApOAVn3v8wnjxAWkUjdtZtRfLH87tebxgnHiAmJ03fJjFmu3rESGF4wTJ5AFwHv5aQMmW+e8YJy4gCzUsS4gTF9cQJ4BS/S5Bngnfw9cA6RJ3D3XuafKbaFMZC5KkDvANeAKcA44DRwD9ihZZ8JnXAF/WaVB8dEy1UO0zKYoQLqGSAAUsl5NR44CK5UpzKrijHVjQWBCg5gY3+qyHcAB3fBZ4LZCxp3Lfa0RfUDnfwDLQ8L0BwUpRtMU02dcY0beuhSSmRAwW/RASgpia7xi29zEB2C7fnPLhmn3CVM/kiC2xnicDwLjqe+KwyAbN2EUOUyLCti7VKW0TmC1D5i9Rc6amQFcBT6PEIixj8CKYWAarBG+O0iYlUt1FkyHBXFCYfbKGqRjr1oLxtFrG23NdVprmlUkDKYNWGpBZHU0O8wkDWZQx1b1nZ/6HiQ7E4swawFO6fMnEqa5wJEC2+BmxpBI1eifEk0hU7GpKKX+A77aJnRFdlV6AAAAAElFTkSuQmCC"></img>
            </a>
            </li>

        </ul>





            
            
            
         
         
            
            
            
        <p className="text">@2024 | Todos los derechos reservados</p>
        </div>
        <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
    </div>
  )
}
