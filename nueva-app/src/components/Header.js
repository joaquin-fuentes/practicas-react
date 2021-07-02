import React from "react"
import "./css/header.css"
import {Link} from "react-router-dom"

function Header() {
    return (
            <header className="header-home">
                <h2 className="titulo-header">Zapatillas pensadas para tí</h2>
                <nav className="nav-header">
                    <ul className="nav-list">
                        <li className="nav-list-li-titulo"><Link to="/"> Inicio </Link></li>
                        <li className="nav-list-li"><Link to="/crear-producto"> Crear Producto </Link></li>
                        <li className="nav-list-li">Sobre nosotros</li>
                        <li className="nav-list-li">Contacto</li>
                        <li className="nav-list-li">Carrito</li>
                    </ul>
                </nav>
            </header>
          );
  }
  
  export default Header;
  