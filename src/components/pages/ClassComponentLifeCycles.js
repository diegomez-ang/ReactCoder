import React, { Component } from 'react';
/*Los life cycles se refieren a lo que sucede con un componente durante su creacion, actualizacion y destruccion */
/*Reacta tiene metodos de controlar lo que sucede durant el ciclo de vida de cada componente */

export default class ClassComponentLifeCycles extends Component{ 
    constructor(props){
        super(props)
         /*tiene dos state el color y el date se separa con comas (,) */
        this.state = {
            date:new Date(),
            color: Math.floor(Math.random()*16777215).toString(16)
        }
    }
    /*ComponentDidMount
     es un cycle events method y nospermite controlar lo que sucede justo despues del render de nuestro componente

     componentDidUpdate similar al Mount pero captura cualquier cambio.
    */
   componentDidMount(){
       /*los eventos del componente se activan despues de que el render del componente ha finalizado*/
       this.timer = setInterval(()=> this.tick(),1000);
       /*con el set interval le pedimos que ejecute el method tick cada segundo (linea 38), cada vez que el componente esta renderizado*/

       document.addEventListener('click', (e)=>{
           /*en este caso le pedimos que el addEventListener en lo que el render del componene este completo */
           this.setState({
               color: Math.floor(Math.random()*16777215).toString(16)
           })
       })
   }
   componentDidUpdate(prevProps, PrevState){
       /* los eventos en el componentDidUpdate se activan siempre que ocurre algun cambio en el render
       PrevProps y PrevState nos ayudaran a filtrar que cambios deben disparar eventos y que no
        
       if(PrevState.color !== this.state.color){
           alert(`Cambio el color`)
       }*/
   }
   /* El metodo Tick que llamamos en el ComponentDidMount cambia el valor de nuestro state date y vuelve a hacer el render de nuestro reloj */
   tick(){
       this.setState({
           date:new Date()
       })
   }

   render(){
       return(
           <div>
               <h1 style={{backgroundColor:'#'+ this.state.color}}>
                   {this.state.date.toLocaleTimeString()}
               </h1>
               
           </div>
       )
   }
}