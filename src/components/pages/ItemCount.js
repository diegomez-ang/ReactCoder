import React from "react";

import { useState, useEffect } from "react";

export default function ItemCount() {
    const [contador, setContador]=useState(1)

    

    const incrementar= ()=>{
        setContador(contador+1)
    }
    const decrementar = ()=>{
        setContador(contador-1)
    }
    const reset = ()=>{
        alert('Quise reiniciar el contador pero no supe como hacerlo :(')
    }




  return (
    <section>
      <div>
        <h1 style={{ backgroundColor: "lightblue" }}>
          Desafio Contador con botón
        </h1>
      </div>

      <div style={{display:'flex',justifyContent:'center', padding:'10px',width:'50%',backgroundColor:'blueviolet'}}>
        <button onClick={()=> decrementar()} style={{color:'red', width:'70px', fontSize:'50px'}}>-</button>
        <h2 style={{margin:'20px 50px 10px 50px', fontSize:'30px'}}>{contador}</h2>
        <button onClick={()=> incrementar()}
        style={{color:'green', width:'70px', fontSize:'50px'}}>+</button>
      </div>
      <div>
          <button onClick={()=> reset()}>Reset</button>
      </div>
    </section>
  );
}
