import react from 'react'

export default function ItemListcontainer(){
    return(
        <section style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div className='contenedor' style={{color:'orangered', textAlign:'center'}}>
                <h2>CONTENEDOR DE PRODUCTOS</h2>
            </div>
            <div className='elementos' style={{width:'80%', backgroundColor:'red', display:'flex', justifyContent:'center'}}>
                <h3>Elementos de la tienda BeatleBikes!</h3>
            </div>
        </section>
    )
}