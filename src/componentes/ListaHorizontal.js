import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import {ListaVertical} from './ListaVertical'



export const ListaHorizontal = ({setVista,setSeccion}) => {



    
    





    return (
        <>
        <div className="listaH">
                <ul className='elUl'>

                <li className='liH' onClick={()=>{
                    setSeccion(v=>'inicio')

                    setVista(V=>('inicio'));

                    console.log('en li de obras');

                }}>Inicio</li>

                <li className='liH' onClick={()=>{ 
                    setSeccion(v=>'vida')
 
                    setVista(V=>('biografia'));

                    console.log('en li de biografia');
                    
                }}>Ollanta</li>

                <li className='liH' onClick={()=>{
                    setSeccion(v=>'vidaWil')

                    setVista(V=>('wilfredo'));

                    console.log('en li de obras');

                }}>Wilfredo</li>

                <li className='liH' onClick={()=>{
                    setSeccion(v=>'logros')

                    setVista(V=>('obras'));

                    console.log('en li de obras');

                }}>Logros ex-gobierno</li>

                <li className='liH' onClick={()=>{
                    setSeccion(v=>'propuestas')

                    setVista(V=>('propuestas'));
                }}>Propuestas 2021-2026</li>

                <li className='liH' onClick={()=>{
                    setSeccion(v=>'wilfredo')

                    setVista(V=>('contactar'));

                    console.log('en li de obras');

                }}>Contactar</li>

                </ul>
        </div>

                
        </>
    )
}
