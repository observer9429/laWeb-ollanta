import React from 'react'
import ReactDOM from 'react-dom';
import {ListaVertical} from './ListaVertical'



export const ListaHorizontal = () => {


const obras=['Aumento del Presupuesto en Educación (3.8 % del PBI)',
'Instauración del Programa Nacional de Alimentación Escolar “Qali Warma”',
'Implantación de 13 Centros de Alto Rendimiento',
'Ampliación de la Red Dorsal Nacional de Fibra Óptica',
'Ejecución de la construcción del Aeropuerto de Chinchero',
'Construcción de La Línea 2 del Metro de Lima',
'Ampliación de la carretera Longitudinal de la Sierra'];





    return (
        <>
        <div className="listaH">
                <ul className='elUl'>

                <li >Vida</li>

                <li onClick={()=>{
                    alert('UPA que UPA el papa, el Cienciano del Cusco es el Papá');
                }}>Logros en su ex-gobierno</li>

                <li >Propuestas 2021-2026</li>

                </ul>
        </div>

                
        </>
    )
}
