import React from 'react'

export const MovilPanelHamburguesa = ({setVista,setSeccion}) => {


  

  

    return (
        <div>

<aside className="panel-movil">
          <nav className="menu-movil">
              
            <a href="ee" data-scroll-spy onClick={(e)=>{
              
              e.preventDefault()
              console.log('clickeaste en inicio');
              setSeccion(v=>'inicio');

                    setVista(V=>('inicio'));
            }}>Inicio</a>

            <a  href="ee" onClick={(e)=>{
              e.preventDefault()
              console.log('clickeaste en ollanta');
              setSeccion(v=>'vida');

                    setVista(V=>('biografia'));
            }}>Ollanta Humala</a>



            <a href="#seccion3" onClick={(e)=>{
              e.preventDefault()
              console.log('clickeaste en ollanta');
              setSeccion(v=>'vidaWil');

                    setVista(V=>('wilfredo'));
            }}>Wilfredo Pedraza</a> 


            <a href="#seccion4" onClick={(e)=>{
              e.preventDefault()
              console.log('clickeaste en ollanta');
              setSeccion(v=>'logros');

                    setVista(V=>('obras'));
            }}>Logros ex-gobierno</a> 


            <a href="#seccion5" onClick={(e)=>{
              e.preventDefault()
              console.log('clickeaste en ollanta');
              setSeccion(v=>'propuestas');

                    setVista(V=>('propuestas'));
            }}>Propuestas 2021-2026</a>


            <a href="#seccion6" onClick={(e)=>{
              e.preventDefault()
              console.log('clickeaste en ollanta');
              setSeccion(v=>'wilfredo');

                    setVista(V=>('contactar'));
            }}>Contactar</a>
            
          </nav>
      </aside>
     
        </div>

         
    )
}
