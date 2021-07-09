import React from "react"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'

export default function CartWidget(props){
    return(
        <div>
            <li><FontAwesomeIcon icon={faCartPlus}/></li>
        </div>
    )
}