
import React, { Component } from 'react'
import FunctionComponent from './FunctionComponent'

export default class Clase_4 extends Component {
   
    constructor(props){
        super(props)
        this.array = ['item1','item2']
    }
    render() {
        return(
            <div>
                <h1>REnderizando</h1>
                <FunctionComponent
                    titulo={this.array[0]}
                    descripcion = {this.array[1]}/>

            </div>
        )
    }
}