import React from 'react'
import ReactDOM from 'react-dom';
import {ListaVertical} from './ListaVertical'



export const ListaHorizontal = ({setSeccion}) => {








    return (
        <>
        <div className="listaH">
                <ul className='elUl'>

                <li onClick={()=>{ 
                    setSeccion(v=>'vida')
                    
                    
                }}>Vida</li>

                <li onClick={()=>{
                    setSeccion(v=>'logros')
                }}>Logros en su ex-gobierno</li>

                <li onClick={()=>{
                    setSeccion(v=>'propuestas')
                }}>Propuestas 2021-2026</li>

                </ul>
        </div>

                
        </>
    )
}
