import React, {Component} from "react";
import "./css/sobreNosotros.css"


class SobreNosotros extends Component {
   
    render(){
        return (
            <React.Fragment>
                <div className="section-sobre-nosotros">
                    <div className="contenedor-imagen">
                        <img src="https://d1di2lzuh97fh2.cloudfront.net/files/41/41z/700/41zwzh.jpg?ph=37e3c938fc" alt="" />

                    </div>
                    <div className="contenedor-sobre-nosotros">
                        <h2>La zapatería con la más amplia selección de calzado deportivo</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat laboriosam, fugiat beatae soluta
                             repellendus minus porro deserunt commodi, quibusdam facilis alias enim?
                             Exercitationem commodi repudiandae hic ut inventore ad assumenda.</p>
                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat laboriosam, fugiat beatae soluta
                             repellendus minus porro deserunt commodi, quibusdam facilis alias enim?
                             Exercitationem commodi repudiandae hic ut inventore ad assumenda.</p>

                    </div>

                </div>
           
            </React.Fragment>
           
        )
    }
}

export default SobreNosotros