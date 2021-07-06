import react from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faBicycle, faCartPlus} from '@fortawesome/free-solid-svg-icons'
import reactDom from 'react-dom';

export default function NavBar(){
    return(
        <section className='Navbar' style={{display:'flex', padding:'20px', backgroundColor:'black', width:'100%'}} >
            <div style={{color:'#9FCC2E', fontSize:'40px', width:'30%'}}>
                <FontAwesomeIcon icon = {faBicycle}/>
            </div>
            <div className= 'Menu' style={{width:'60%'}}>
                <ul style={{listStyle:'none', display:'flex',justifyContent: 'space-between', margin:'10px', color:'white'}}>
                    <li>Home</li>
                    <li>Nosotros</li>
                    <li>Productos</li>
                    <li>Login</li>
                    <li><FontAwesomeIcon icon={faCartPlus}/></li>
            </ul>
            </div>
        </section>        
    )
}