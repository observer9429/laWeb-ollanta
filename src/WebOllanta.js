import React, { useEffect, useState } from 'react';
import { Boton } from './componentes/Boton';
import { Contactar } from './componentes/Contactar';
import { ListaHorizontal } from './componentes/ListaHorizontal';
import { ListaVertical } from './componentes/ListaVertical';
import { MovilPanelHamburguesa } from './componentes/MovilPanelHamburguesa';
import { PanelVista } from './componentes/PanelVista';
import { Titulo } from './componentes/Titulo';


export const WebOllanta = () => {

    

    const obras=['-Aumento del Presupuesto en Educación (3.8 % del PBI)',
'Instauración del Programa Nacional de Alimentación Escolar “Qali Warma”',
'Implantación de 13 Centros de Alto Rendimiento',
'-Ampliación de la Red Dorsal Nacional de Fibra Óptica',
'-Ejecución de la construcción del Aeropuerto de Chinchero',
'-Construcción de La Línea 2 del Metro de Lima',
'-Ampliación de la carretera Longitudinal de la Sierra'];

    let vida=`Ollanta Moisés Humala Tasso (Lima, 27 de junio de 1962) es un militar retirado y 
    político peruano. Fue presidente de la República de Perú desde el 28 de julio de 2011 hasta el 28 de 
    julio de 2016, tras ser candidato por la alianza electoral Gana Perú en las elecciones generales de 2011, 
    ealizadas el 10 de abril. Pasó a la segunda vuelta, realizada el 5 de junio, al no haber superado el 50 %,
    o mismo que Keiko Fujimori y venció al conseguir el 51,45 % de los votos válidos.2​ 
    Humala ingresó en la palestra política cuando protagonizó junto a su hermano Antauro el levantamiento de Locumba (Tacna), manifestándose en contra del gobierno de Alberto Fujimori. Más tarde fundó junto a su esposa, el Partido Nacionalista Peruano.`;


    const propuestas=[`Recuperar la economía del país
    promoviendo y viabilizando
    inversiones públicas y privadas ,
    reactivación de los proyectos
    paralizados, recuperación d el
    empleo perdido y creación de
    una política de formalización
    de la economía.`,`Desarrollar
    el quinquenio de
    la transformación de la Salud
    Pública como un servicio de
    calidad y accesible para todos
    los peruanos`,`Continuar la reforma de la
    educación alcanzando una
    inversión equivalente al 6%
    del PBI cumpliendo así lo
    dispuesto por el Acuerdo
    Nacional.`,`Reducción de la pobreza,
    mediante el desarrollo de una
    política social focalizada a
    grupos vulnerables y
    construyendo una adecuada
    protección social para todos,
    bajo la estrategia de “Incluir
    para Crecer”.`,`Proteger a todas las personas
    contra el avance de la
    delincuencia y criminalidad
    organizada, incluyendo el
    narcotráfico y terrorismo .
    Cuidar integralmente a las
    mujeres violentadas y
    poblaciones vulnerables.`];

    let vidaWil=`Andahuaylino de nacimiento, a los tres años de edad sus padres lo llevaron a Abancay 
    donde cursó su educación primaria en la I.E. Armando Bonifaz y la secundaria en el Colegio 
    Miguel Grau. Pasó luego a Lima donde cursó sus estudios superiores en la Universidad de San Martín de 
    Porres.
    Es abogado especializado en Derecho Penal, Penitenciario y Derechos Humanos. Ha sido consultor, 
    conferencista y asesor de instituciones públicas y privadas en materias de seguridad. También ha 
    ejercido como profesor de Derecho Penal en varias universidades limeñas.`;

    

    const [seccion, setSeccion] = useState('inicio');
    
    const [vista, setVista] = useState('inicio');

    const [seccionMovil, setSeccionMovil] = useState('inicio');
    
    console.log({seccion})

    

        

        document.addEventListener("DOMContentLoaded",(e)=>{


            const elBoton=document.querySelector('.panel-btn');
        const elPanelMovil=document.querySelector('.panel-movil');
        const elementosPanelMovil=document.querySelector('.menu-movil a');

        console.log(document.querySelector('.panel-btn'),'91');
        console.log(elPanelMovil);
        console.log(elementosPanelMovil);

        
            document.addEventListener("click",(e)=>{

                //matches recibe selector valiudo de css
                //en el segundo e target ponemos que tambien funcione en todo el buton y
                //no solo en los bordes
                //todo lo que herede del boton, o lo que este contenido en el boton
                 
                        if(e.target.matches('.panel-btn') || e.target.matches(`${'.panel-btn'} *`)){//verifica el nombre de la clase
                            //el target es para identificar el elemento que dispara el evento
                            //el matches retorna tru si el elemento indicado existe , en caso contrario retorna false
                            //y el toogle agrega una clase si no la tiene
                            //y la quita en caso la tenga
                            document.querySelector('.panel-movil').classList.toggle("is-active");
                            document.querySelector('.panel-btn').classList.toggle("is-active");//para darle efecto al boton,quitandole
                            //esa clase o poniendola
                            
                           
                             
                            
                        }
                
                        //para que se cierre las segunda cara al escoger una opcion del menu 
                        if(e.target.matches('a')){
                            document.querySelector('.panel-movil').classList.remove("is-active");//eliminamos
                             //la que creo que es clase is-active para que se cirre la segunda cara
                             
                        }
                    })






        })

        



        

        useEffect(()=>{ 

            setTimeout(() => {
            
                const valor=document.querySelector('.panel-btn');
                const valor2=document.querySelector('listaV');

                
                const tt=document.getElementsByClassName('.panel-btn');
        
                console.log('valor del booleano',valor);

                
                
            }, 100);

            
           
        if(vista==='wilfredo'){
            console.log('estas en wilfredo');
        }
            
        
        },[vista]);


   
    


    
    return (

      <>

        <MovilPanelHamburguesa vista={vista} setVista={setVista} setSeccion={setSeccion} 
        seccionMovil={seccionMovil} setSeccionMovil={setSeccionMovil} />

        <div className="divPrincipal firstDiv">
          
 
            <Titulo/>
            <ListaHorizontal  setVista={setVista} setSeccion={setSeccion}/>
            <div className='divBajo'>
            <ListaVertical laSeccion={seccion} obras={obras} vida={vida} propuestas={propuestas} vidaWil={vidaWil}/>
            <PanelVista vista={vista}/>
            </div>

            <Boton />



        </div>

        

        {console.log(document.querySelector('panel-btn'))}

        </>
    )

}










    