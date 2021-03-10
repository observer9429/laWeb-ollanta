import React from 'react'

export const ListaVertical = ({laSeccion,obras,vida,propuestas,vidaWil}) => {
    return (

        <div className="listaV unido">

            {
                (laSeccion==='inicio' || laSeccion==='wilfredo')  &&   < img  alt='sinfoto' className='fotoInicioVertical' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Logo_-_Partido_Nacionalista_Peruano.svg/1200px-Logo_-_Partido_Nacionalista_Peruano.svg.png'/> 
              
            }

            <ul className='ulVertical'>

                
 
                {
                (laSeccion==='logros')  &&   obras.map(v=>(<li className='liVertical' key={v}>{v}</li>)) 
              
            }
 
{
                (laSeccion==='propuestas')  &&  propuestas.map(v=>(<li className='liVertical' key={v}>{v}</li>))
              
            } 
 
 
            </ul>

            {
                (laSeccion==='vida')  &&  <p className='liVertical'>{vida}</p>
              
            }

{
                (laSeccion==='vidaWil')  &&  <p className='liVertical'>{vidaWil}</p>
                
              
            }
            {
                (laSeccion==='vidaWil')  &&  <img className='fotoWvertical' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/CONFERENCIA_DE_PRENSA_EN_LA_PCM_%288797249257%29.jpg/220px-CONFERENCIA_DE_PRENSA_EN_LA_PCM_%288797249257%29.jpg' />
            } 
            
            
            
        </div>
    ) 
}
