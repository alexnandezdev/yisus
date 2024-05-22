import React from "react";
import Tarjeta from '../componentes/uno';
import ImagesA from "../imagenes/yisus.png";
import Saludo from '../componentes/Saludo.js';

class Fuente extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[{
                id:0,
                "nombre":"Yisus",
                "imagen":ImagesA
            },
            {
                id:1,
                "nombre":"Andres",
                "imagen":ImagesA
            },
            {
                id:2,
                "nombre":"Yeison",
                "imagen":ImagesA
            }
        ]
        }
    }
    render(){
        return(
            <div>
                <Saludo/>  
                {
                    this.state.data.map((agua)=>{
                        return(
                            <Tarjeta
                            nombre= {agua.nombre}
                            img={agua.imagen}/>
                        )
                    })
                }
                
            </div>
        )
    }
}
export default Fuente