import React from "react"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NuevoProducto from "../pages/NuevoProducto"
import Home from "../pages/Home"
import Layout from "./Layout"
import NotFound from "../pages/NotFound"
import SobreNosotros from "../pages/SobreNosotros"
import Contacto from "../pages/Contacto"
import Carrito from "../pages/Carrito"
import ZapCorrer from "../pages/ZapCorrer"
import ZapExterior from "../pages/ZapExterior"
import ZapGym from "../pages/ZapGym"
import ZapTenis from "../pages/ZapTenis"







function App (){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/crear-producto" component={NuevoProducto} />
                    <Route exact path="/sobre-nosotros" component={SobreNosotros} />
                    <Route exact path="/contacto" component={Contacto} />
                    <Route exact path="/Carrito" component={Carrito} />
                    <Route exact path="/zapatillas-correr" component={ZapCorrer} />
                    <Route exact path="/zapatillas-exterior" component={ZapExterior} />
                    <Route exact path="/zapatillas-gym" component={ZapGym} />
                    <Route exact path="/zapatillas-tenis" component={ZapTenis} />
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )

}

export default App