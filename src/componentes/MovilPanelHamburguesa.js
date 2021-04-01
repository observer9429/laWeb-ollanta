import React, { useState } from 'react'

export const MovilPanelHamburguesa = ({vista,setVista,setSeccion,seccionMovil,setSeccionMovil}) => {


  let este='';

  

  

  const addCssDiv=()=>{

    const $verPanel=document.querySelector('.firstDiv');

    console.log($verPanel);

    console.log(vista);
    


    console.log($verPanel.classList.contains('divPrincipal'));
console.log($verPanel.classList.contains('divPrincipalSecundario'));

    document.querySelector('.panelVista').classList.add('panelVistaSecundario');

    //document.querySelector('.panelVistaSecundario').classList.remove('panelVista');

    //document.querySelector('.panelVistaSecundario').classList.remove('unido');
    

    document.querySelector('.listaV').classList.add('listaVsecundaria');

    //document.querySelector('.listaV').classList.remove('unido');

   

    document.querySelector('.firstDiv').classList.add('divPrincipalSecundario');

    document.querySelector('.divBajo').classList.add('divBajoMovil');

    
    console.log(seccionMovil)
  }

  const removeCssDiv=()=>{




    

    document.querySelector('.panelVista').classList.add('panelVistaSecundario');

    //document.querySelector('.panelVistaSecundario').classList.remove('panelVista');

    //document.querySelector('.panelVistaSecundario').classList.remove('unido');
    

    document.querySelector('.listaV').classList.add('listaVsecundaria');

    //document.querySelector('.listaV').classList.remove('unido');

   

    document.querySelector('.firstDiv').classList.add('divPrincipalSecundario');

    document.querySelector('.divBajo').classList.add('divBajoMovil');

    
    
  }

  const pon=(valor)=>{
/*
    if(!este==='contactar'){
      if(document.querySelector('.listaV').classList.contains('esconder')){
        document.querySelector('.listaV').classList.remove('esconder');
      }
      document.querySelector('.listaV').classList.remove('panelVistaSecundario');
    }*/

    const $elPanel=document.querySelector('.firstDiv');

    console.log($elPanel.classList.contains('divPrincipalSecundario'));

    setSeccionMovil(valor);

    este=valor;
    
    console.log(este);

    if(este==='wilfredo' || este==='biografia'){
      if(document.querySelector('.listaV').classList.contains('esconder')){
        document.querySelector('.listaV').classList.remove('esconder');
      }

      if(!$elPanel.classList.contains('divPrincipalSecundario')){
        console.log('dentro de wilfredo o biografia, y a la vez en el false del div');

        document.querySelector('.panelVista').classList.add('panelVistaSecundario');

    
        document.querySelector('.listaV').classList.add('listaVsecundaria');
   

        document.querySelector('.firstDiv').classList.add('divPrincipalSecundario');

        document.querySelector('.divBajo').classList.add('divBajoMovil');   


      }


      console.log('estas en wilfredo del if');
    }

    if(este==='inicio' || este==='obras' || este==='propuestas'  ){

      if(document.querySelector('.listaV').classList.contains('esconder')){
        document.querySelector('.listaV').classList.remove('esconder');
      }

      if($elPanel.classList.contains('divPrincipalSecundario')){

        document.querySelector('.panelVista').classList.remove('panelVistaSecundario');

    
        document.querySelector('.listaV').classList.remove('listaVsecundaria');
   

        document.querySelector('.firstDiv').classList.remove('divPrincipalSecundario');

        document.querySelector('.divBajo').classList.remove('divBajoMovil');

      }
    }

    if(este==='contactar'){

      document.querySelector('.listaV').classList.add('esconder');
    }

    
  }

  

    return (
        <div>

<aside className="panel-movil">
          <nav className="menu-movil">
              
            <a className='lasA' href="ee" data-scroll-spy onClick={(e)=>{
              
              e.preventDefault()
              console.log('clickeaste en inicio');
              setSeccion(v=>'inicio');

                    setVista(V=>('inicio'));
                
                    pon('inicio');
            }}>Inicio</a>

            <a className='lasA' href="ee" onClick={(e)=>{
              e.preventDefault()
              console.log('clickeaste en ollanta');

              
              setSeccion(v=>'vida');

                    setVista(V=>('biografia'));


                    
                    pon('biografia');
                    console.log(seccionMovil);
                    

                    
            }}>Ollanta Humala</a>



            <a className='lasA' href="#seccion3" onClick={(e)=>{
              e.preventDefault()
              console.log('clickeaste en ollanta');
              setSeccion(v=>'vidaWil');

                    setVista(V=>('wilfredo'));

                    pon('wilfredo');
            }}>Wilfredo Pedraza</a> 


            <a className='lasA' href="#seccion4" onClick={(e)=>{
              e.preventDefault()
              console.log('clickeaste en ollanta');
              setSeccion(v=>'logros');

                    setVista(V=>('obras'));

                    pon('obras');
            }}>Logros ex-gobierno</a> 


            <a className='lasA' href="#seccion5" onClick={(e)=>{
              e.preventDefault()
              console.log('clickeaste en ollanta');
              setSeccion(v=>'propuestas');

                    setVista(V=>('propuestas'));

                    pon('propuestas');
            }}>Propuestas 2021</a>


            <a className='lasA' href="#seccion6" onClick={(e)=>{
              e.preventDefault()
              console.log('clickeaste en ollanta');
              setSeccion(v=>'wilfredo');

                    setVista(V=>('contactar'));

                    pon('contactar');
            }}>Contactar</a>
            
          </nav>
      </aside>
     
        </div>

         
    )
}
