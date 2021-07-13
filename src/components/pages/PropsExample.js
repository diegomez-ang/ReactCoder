
import React, { Component} from'react'

export default class ClassComponentStateExample extends Component { 
    constructor(props){
        super(props)
        /*this.state es una funcion especial de react que cada vez que cambia la misma vuelve a realizar un render del componente */
        this.state = {
            color: Math.floor(Math.random()*16777215).toString(16)
        }
    }
    render(){
        return(
            <div style={{alignItems:'center'}}>
                <h1 style={{backgroundColor:'#' + this.state.color,  transition:'500ms ease-in-out'}}>CAMBIANDO COLOR </h1>
                {/*Usando el setState() podemos darle un nuevo valor al state */}
                <button onClick={()=> this.setState({
                    color:Math.floor(Math.random()*16777215).toString(16)
                })}>cambiar color</button>
                
            </div>
        )
    }
}