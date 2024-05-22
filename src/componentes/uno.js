import React from "react";
import './style/uno.css'
import img from "../imagenes/yisus.png"


class Tarjeta extends React.Component{
    constructor(props){
        super(props)
        this.state={
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Cristo_abrazado_a_la_cruz_%28El_Greco%2C_Museo_del_Prado%29.jpg/800px-Cristo_abrazado_a_la_cruz_%28El_Greco%2C_Museo_del_Prado%29.jpg'
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                image:img
            })
        },5000
        )
    }

render(){
    const {nombre}=this.props
    return(
    <div>
        <h1 className="titulo">Hola {nombre}</h1>
        <img src={this.state.image} alt=""/>
    </div>
    )
}
}
export default Tarjeta