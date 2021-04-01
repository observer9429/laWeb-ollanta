import React, { useEffect } from 'react'
import { Boton } from './Boton';
import { Contactar } from './Contactar';

export const PanelVista = ({vista}) => {

    

    const vistaObras=['https://portal.andina.pe/EDPfotografia/Thumbnail/2013/04/17/000207872W.jpg'
    ,'https://cde.canaln.pe/actualidad-reorganizacion-programa-qali-warma-durara-60-dias-n331652-764x480-489767.png'];

    const textoVistaObras=['Aumento presupuesto en Educación','Programa Qali warma'];

    const elInicio=['https://caretas.pe/wp-content/uploads/2021/02/15553078442_1dc9e5a4c5_c-750x533.jpg',
'https://pbs.twimg.com/profile_images/1357897689149669376/LfqNh8Ow_400x400.jpg'];
    
const textoElInicio=['Ollanta Humala','Wilfredo Pedraza'];

    const vistaPropuestas=['https://zaragozabuenasnoticias.com/wp-content/uploads/2015/03/educacion-1.jpg',
'https://elperuano.pe/fotografia/thumbnail/2020/10/31/000095760M.jpg',
'https://www.radionacional.com.pe/sites/default/files/noticias/colegioarequipa.jpg'];

const textoVistaPropuestas=['Mejora en educación','Reducción de la criminalidad','Mejora en educación']

    const vistaFotoOllanta=['https://www.radionacional.com.pe/sites/default/files/styles/note/public/noticias/ollanta-humala-llegara-a-arequ-jpg_600x0_0.jpg?itok=MIZA4AES'];

    const textoVistaOllanta=['Ollanta Humala','Ollanta Humala'];

    
    let portadaWilfredo=[`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpZi6zcS6IPr8PcldO1MCrcJ2oDK5NZ-ipA&usqp=CAU`];
    let opcionElegida=[''];
    let textoElegido=[''];




    //poreguntas y resupuestaS

    const preguntas=[`1.- ¿Qué reformas se deben impulsar para que la ciudadanía recobre la confianza en la policía?`,
                    `2.-¿Qué proyectos propone para evitar las largas demoras en los procesos contra funcionarios públicos
                     por corrupción?`,`3.- ¿Cómo fomentar el empleo formal desde el Congreso?`];

    const respuestas=[`Lo primero debe ser fortalecer el brazo más importante que tiene el Estado para la 
    lucha contra la inseguridad, que es la Policía Nacional. En estos tiempos, ha sido maltratada y rescatar 
    la institucionalidad me parece fundamental. Eso se supone respaldarla en sus acciones. Por supuesto, esto 
    no significa generar impunidad. En segundo lugar, creo que hay que cambiar las normas que permitan al 
    policía una estabilidad absoluta en los ascensos y también saber la forma en la que deben terminar su 
    carrera policial. Nosotros vamos a promover una ley orgánica en favor de la Policía Nacional para que las 
    reglas de ascensos no cambien cada año a voluntad del comando de turno. Voy a proponer que el pase a 
    retiro sea por promociones y por cumplimiento de servicio. Además, hay que continuar con todo el 
    equipamiento policial, que lo hemos venido haciendo ya en el gobierno del presidente Humala, porque sin 
    logística, sin equipamiento, no hay forma de combatir con eficacia.`,`Desde el Congreso, pretendemos 
    modificar la Ley Orgánica del Poder Judicial y la Ley Orgánica del Ministerio Público para fortalecer 
    su autonomía, para consolidar los procesos de investigación especializadas. Nos parece importante que 
    las investigaciones que se hacen sobre lavado de activos, corrupción, cualquier otra modalidad del 
    llamado crimen organizado, se hagan sobre bases fiscales estables e incorporando una investigación 
    interdisciplinaria, incorporando peritos contables, peritos informáticos, peritos que manejen el sistema 
    financiero. De manera tal que, en la lucha contra la corrupción, lo podemos hacer es desde el Congreso 
    es mejorar la normativa del Ejecutivo. En el caso del gobierno, puede dar los recursos económicos que 
    correspondan. Además nos parece importante transparentar el sistema de contrataciones del Estado. 
    Nosotros vamos a proponer una ley que permita incorporar en los contratos del Estado, no solo la cláusula 
    penal, sino también la cláusula de resolución de contrato cuando la obra se paralice más de cinco meses.`,
    `El Congreso puede acompañar en políticas que el Ejecutivo puede promover. En el Nacionalismo apostamos por 
    recuperar los más de dos millones de puestos de trabajo que se han perdido en este tiempo, básicamente de 
    jóvenes e informales. Por eso, lo que vamos a hacer es recuperar los grandes proyectos de infraestructura 
    que hoy están absolutamente paralizados. Vamos a ofrecer el programa Trabaja Perú para dar empleo temporal 
    en la construcción de parques, lozas, etc. Las mypes, que generan el 85% de los puestos de trabajo en nuestro 
    país, tienen que ser fortalecidas. Vamos a crear el Reactiva Mypes, para darles créditos blandos, asesorías 
    e invitarlas a la formalización.`];

 
        

const definirOpcion=(laOpcion='inicio')=>{

    const $elDiv=document.querySelector('.panelVista');
    $elDiv.innerHTML = "";

    switch (laOpcion) {
        case 'inicio':
            
            opcionElegida=[...elInicio];
            textoElegido=[...textoElInicio]

           
        break;
        case 'obras':
    //el filter devuelve un nuevo array con las expcepciones que se le indique
           
            opcionElegida=[...vistaObras];
            textoElegido=[...textoVistaObras]
           
            break;

        case 'propuestas':

            opcionElegida=[...vistaPropuestas];
            textoElegido=[...textoVistaPropuestas];

        break;

        case 'biografia':

            opcionElegida=[...vistaFotoOllanta];
            textoElegido=[...textoVistaOllanta];

        break;

        case 'wilfredo':

        opcionElegida=[...portadaWilfredo];
        break;


        case 'contactar':
            
        break;


        default:
            opcionElegida=[...elInicio]; ;

    }


    

    


}


//definirOpcion(vista);







const agregaFoto=()=>{

    console.log(elInicio);
    console.log(elInicio[0]);

    const $elDiv=document.querySelector('.panelVista');

    if($elDiv.classList.contains('conBlock')){
        $elDiv.classList.remove('conBlock');
    }
    //$elDiv.className('conBlock');

    
    //const $figure=document.querySelector(".figurePrincipal");

    
    definirOpcion(vista);


    for(let i=0;i<opcionElegida.length;i++){

        const $otroFigure=document.createElement("figure");
        const $img=document.createElement("img");
        const $figcaption=document.createElement("figcaption");
        const $figcaptionText=document.createTextNode(textoElegido[i]);
    
    
    
        //agregamos el texto al figcaption
    $figcaption.appendChild($figcaptionText);
    //asignamos la imagen al objeto img
    $img.setAttribute("src",opcionElegida[i]);
    $img.setAttribute("alt",textoElegido[i]);
    $img.setAttribute("key",textoElegido[i]); 
    $img.classList.add("imgVista");
    
    //console.log($figure); 
    console.log($img);
    
    
    /* 
    $figure.appendChild($img);
    $figure.appendChild($figcaption);*/
    
    $otroFigure.appendChild($img);
    $otroFigure.appendChild($figcaption)
    
    $elDiv.appendChild($otroFigure);
    
    if(i===0 && vista==='wilfredo'){
    
        $img.classList.remove('imgVista');
        $img.classList.add('portadaPedraza');
    
        console.log($elDiv.classList.contains('conBlock'));
        
    }
    
    }


if(vista==='wilfredo'){
    addPreguntasYRespuestas();
    console.log($elDiv.classList.contains('conBlock'));
}




}

let elH1=['Wilfredo respondiendo tus dudas'];

const addPreguntasYRespuestas=()=>{



    const $elDiv=document.querySelector('.panelVista');

    $elDiv.classList.add('conBlock');

    const $elH1=document.createElement('p');
    $elH1.classList.add('elpAnuncio');
    const $textoH1=document.createTextNode(elH1[0]);
    $elH1.appendChild($textoH1);

    $elDiv.appendChild($elH1);

    console.log('en el add');
    console.log($elH1);

    for(let i=0;i<preguntas.length;i++){

        const $article=document.createElement("article");
        const $h2=document.createElement("h2");
        const $p=document.createElement("p");

        const $h2Text=document.createTextNode(preguntas[i]);
        const $pText=document.createTextNode(respuestas[i]);

        $h2.appendChild($h2Text);
        $p.appendChild($pText);

        $article.appendChild($h2);
        $article.appendChild($p);

        $elDiv.appendChild($article);
    }

    
   
    
}


const verlog=()=>{
    console.log(vista);
}





    return (

        
       
        <div className="panelVista unido">

            
        

           {setTimeout(() => { 
               
               if(vista!=='contactar'){
               agregaFoto();
              
                }
               }, 20)}

           {(vista==='contactar') && <Contactar/>}
           {verlog()}

           
          
        
        </div>  
    )
}
