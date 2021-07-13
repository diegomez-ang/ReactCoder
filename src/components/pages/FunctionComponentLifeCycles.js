import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

/*Para controlar los lyfe cycles en un function component se debe importar el useEffect HOOK */

import { useState, useEffect} from 'react'

export default function FunctionComponentLifeCycles(){

    const [date,setDate] = useState(new Date);
    const [bgColor, setbgColor] = useState(Math.floor(Math.random()*16777215).toString(16))

    /*useEffect cumple las funciones de 
        componentDidMount()
        componentDidUpdate()
        componentWillUnmount() de un class component */

        /* con esta sintaxis useEffect cumple las mismas funciones de componentDidMount() */
        useEffect(()=>{
            setInterval(()=>{
                tick();
            },1000)
        })
         /*useEffect(()=>{
            alert('cambio de color');
           agragandole un valor de nuestro state al final del use effect podemos activar nuestro evento, cada vez que se actualice el state 
        },[bgColor])*/

    const tick = ()=>{
        setDate(new Date);
    }

    return(
        <div>
            <h1 style={{backgroundColor:'#'+bgColor}}>{date.toLocaleTimeString()}</h1>
            <button onClick={()=>{
                   setbgColor(Math.floor(Math.random()*16777215).toString(16))
               }}>cambiar color</button>
        </div>
    )
}