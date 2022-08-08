import {NavLink} from "react-router-dom";
import { GiAerodynamicHarpoon } from "react-icons/gi";
import CardWidget from "./CardWidget";

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid align-items-center justify-content-center">
                    <GiAerodynamicHarpoon className="logo" />
                    <NavLink className="logoText mx-2" to="/">Aerodynamic Store</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="divNavBarCollapse collapse navbar-collapse justify-content-start" id="navbarNav">
                        <ul className="navbar-nav"> 
                            <li className="nav-item">
                                <NavLink className="ul__li__a" to="/">Todos los productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="ul__li__a" to="/category/procesadores">Procesadores</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="ul__li__a" to="/category/memoriasRam">Memorias Ram</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <CardWidget />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar