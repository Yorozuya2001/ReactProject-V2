import { NavLink } from "react-router-dom";
import { GiAerodynamicHarpoon } from "react-icons/gi";
import CardWidget from "./CardWidget";

const NavBar = () => {
    return (
        <header className="sticky-lg-top">
            <nav className="navbar d-flex flex-column navbar-expand-lg navbar-light">
                <div className="container-fluid align-items-center justify-content-between">
                    <NavLink className="logoText mx-2 " to="/">
                        <div className="logoContainer d-flex align-items-center">
                            <GiAerodynamicHarpoon className="logo" />
                            <p className="dissapear">Aerodynamic Store</p>
                        </div>
                    </NavLink>
                    <div>
                        <CardWidget />
                    </div>
                </div>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="divNavBarCollapse  collapse navbar-collapse justify-content-start" id="navbarNav">
                        <ul className="navbar-nav menuResponsive">
                            <li className="nav-item">
                                <NavLink className="ul__li__a" to="/all">Todos los productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="ul__li__a" to="/category/procesadores">Procesadores</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="ul__li__a" to="/category/memoriasRam">Memorias Ram</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="ul__li__a" to="/category/motherboards">Motherboards</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="ul__li__a" to="/category/placasDeVideo">Placas de Video</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="ul__li__a" to="/category/Almacenamiento">Almacenamiento</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="ul__li__a" to="/category/gabinetes">Gabinetes</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar