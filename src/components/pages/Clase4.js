import React, { Component } from 'react'
import FunctionComponent from './FunctionComponent'

export default class Clase4 extends Component {
   
    constructor(props){
        super(props)
        this.array = ['diego','Gómez']
        this.state = {
            estado: 'Cosa desactivada'
        }
    }
    render() {
        return(
            <div>
                <h1>REnderizando</h1>
                <FunctionComponent
                    titulo={this.array[0]}
                    descripcion = {this.array[1]}/>
                <h2>Prueba de state</h2>
                <p style={{color: 'blue'}}>{this.state.estado}</p>

            </div>
        )
    }
}
