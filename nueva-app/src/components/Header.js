import React from "react"
import "./css/header.css"
import {Link} from "react-router-dom"

function Header() {
    return (
            <header className="header-home">
                <h2 className="titulo-header">Zapatillas pensadas para tí</h2>
                <nav className="nav-header">
                    <ul className="nav-list">
                        <li className="nav-list-li-titulo"><Link className="link" to="/"> Inicio </Link></li>
                        <li className="nav-list-li"><Link className="link" to="/crear-producto"> Crear Producto </Link></li>
                        <li className="nav-list-li"><Link className="link" to="/sobre-nosotros"> Sobre Nosotros </Link></li>          
                        <li className="nav-list-li"><Link className="link" to="/contacto"> Contacto </Link></li>          
                        <li className="nav-list-li"><Link className="link" to="/carrito"> Carrito </Link></li>          
                    </ul>
                </nav>
            </header>
          );
  }
  
  export default Header;
  