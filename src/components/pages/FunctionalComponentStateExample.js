import { directive } from '@babel/types'
import React from 'react'
//Para poder usar SetState en una funcion es necesario importar el hook useState
import { useState } from 'react'

export default function FunctionalComponentStateExample(){
    /*el Hook useState nos permite crear un array de variables donde en este caso State es el valor mutable y setState funciona para pasar el valor a nuestro State e iniciar el Re-render del componente */

const [state, setState]=useState(['Desactivado'])/*dentro de useState debemos colocar el valor por defecto, en este caso un string, debe tener siempre un valor inicial */

return(
    <div>
        <h1>{state}</h1>
        {/* es importante que los set state esten siempre dento de una funcion para evitar reders infinitos*/}
        <button onClick={()=> setState('Activado')}>Activar</button>
    </div>
)
}