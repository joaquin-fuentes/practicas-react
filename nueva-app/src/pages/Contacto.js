import React, {Component} from "react";
import "./css/contacto.css"


class Contacto extends Component {
   
    render(){
        return (
            <React.Fragment>
            <div className="section-contacto">
                <h2 className="titulo-contacto">Visita nuestra tienda</h2>
                <p className="parrafo-contacto">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                    doloremque laudantium totam rem aperiam eaque ipsa quae ab.</p>
                <h4 className="subtitulo-contacto">Zapatillas pensadas para ti</h4>
                <p className="parrafo-contacto">España 2456 - Barrio Jardín - San Miguel de Tucumán</p>
                <p className="parrafo-contacto">joaquin.fuentes1327@gmail.com</p>
                <p className="parrafo-contacto">3816097754</p>
                <h4 className="subtitulo-contacto">Abierto</h4>
                <p className="parrafo-contacto">Lun - Vie :  8am . 6pm</p>
                <p className="parrafo-contacto">Sab: 8am - 12.30px</p>
                <p className="parrafo-contacto">Dom: Cerrado</p>
            </div>

           
            </React.Fragment>
           
        )
    }
}

export default Contacto