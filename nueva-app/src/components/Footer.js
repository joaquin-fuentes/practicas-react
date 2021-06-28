import React from "react"
import "./css/footer.css"

function Footer() {
    return (
         <footer className="footer-home">
             <div className="footer-columna">
                <ul className="listado-footer-columna">
                    <li className="titulo-listado-footer-columna">Informacion</li>
                    <li className="footer-columna-li">Política de privacidad</li>
                    <li className="footer-columna-li">Términos y condiciones</li>
                </ul>
             </div>
             <div className="footer-columna">
                <ul className="listado-footer-columna">
                    <li className="titulo-listado-footer-columna">Tienda</li>
                    <li className="footer-columna-li">Sobre nosotros</li>
                    <li className="footer-columna-li">Contáctanos</li>
                </ul>
             </div>
             <div className="footer-columna">
                <ul className="listado-footer-columna">
                    <li className="titulo-listado-footer-columna">Redes sociales</li>
                    <li className="footer-columna-li">Instagram</li>
                    <li className="footer-columna-li">Facebook</li>
                </ul>
             </div>
         </footer>
          );
  }
  
  export default Footer;
  