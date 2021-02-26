import React, { useEffect, useState } from 'react';
import { ListaHorizontal } from './componentes/ListaHorizontal';
import { ListaVertical } from './componentes/ListaVertical';
import { PanelVista } from './componentes/PanelVista';
import { Titulo } from './componentes/Titulo';


export const WebOllanta = () => {

    const obras=['Aumento del Presupuesto en Educación (3.8 % del PBI)',
'Instauración del Programa Nacional de Alimentación Escolar “Qali Warma”',
'Implantación de 13 Centros de Alto Rendimiento',
'Ampliación de la Red Dorsal Nacional de Fibra Óptica',
'Ejecución de la construcción del Aeropuerto de Chinchero',
'Construcción de La Línea 2 del Metro de Lima',
'Ampliación de la carretera Longitudinal de la Sierra'];

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
    la transformación de la S alud
    P ública como un servicio de
    calidad y accesible para todos
    los peruanos`,`Continuar la reforma de la
    educación alcanzando una
    inversión equivalente al 6%
    del PBI cumpliendo así lo
    dispuesto por el Acuerdo
    Nacional.`,`R
    educción de la pobreza,
    mediante el desarrollo de una
    política social focalizada a
    grupos vulnerables y
    construyendo una adecuada
    protección social para todos,
    bajo la estrategia de “Incluir
    para Crecer”.`,`Proteger a todas las personas
    contra el avance d e la
    delincuencia y criminalidad
    organizada, incluyendo el
    narcotráfico y terrorismo .
    Cuidar integralmente a las
    mujeres violentadas y
    poblaciones vulnerables.`];

    const [seccion, setSeccion] = useState('');
    
    
    console.log({seccion})

/*
    useEffect(()=>{ 
        console.log('cambió la seccion!');
    },[seccion]);*/
    
    return (
        <div className="divPrincipal">

 
            <Titulo/>
            <ListaHorizontal setSeccion={setSeccion}/>
            <div className='divBajo'>
            <ListaVertical laSeccion={seccion} obras={obras} vida={vida} propuestas={propuestas}/>
            <PanelVista />
            </div>



        </div>
    )
}
