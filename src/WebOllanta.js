import React from 'react';
import { ListaHorizontal } from './componentes/ListaHorizontal';
import { ListaVertical } from './componentes/ListaVertical';
import { PanelVista } from './componentes/PanelVista';
import { Titulo } from './componentes/Titulo';


export const WebOllanta = () => {


    
    
    
   
    
    return (
        <div className="divPrincipal">

 
            <Titulo/>
            <ListaHorizontal />
            <div className='divBajo'>
            <ListaVertical />
            <PanelVista />
            </div>



        </div>
    )
}
