import React from 'react'

export const ListaVertical = ({laSeccion,obras,vida,propuestas}) => {
    return (

        <div className="listaV unido">
            <ul>

                
 
                {
                (laSeccion==='logros')  &&   obras.map(v=>(<li key={v}>{v}</li>))
              
            }
 
{
                (laSeccion==='propuestas')  &&  propuestas.map(v=>(<li key={v}>{v}</li>))
              
            } 
 

            </ul>

            {
                (laSeccion==='vida')  &&  <p>{vida}</p>
              
            }
            
            
        </div>
    ) 
}
