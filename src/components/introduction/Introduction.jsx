import { Link } from "react-router-dom"
import SectionImages from "../sections/SectionImages"

const Introduction = () => {
    return (
        <>
        <section className="introduction">
            <div className="introduction__position-R">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://drive.google.com/uc?export=download&id=1KZrTQ5l82WjJQv06mgXndbJ5hOaADHoD" className="d-block introduction__carouselImage" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://drive.google.com/uc?export=download&id=1qMzE0QGF9vffQCYg8CSqTf-hgDato-Jr" className="d-block introduction__carouselImage" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://drive.google.com/uc?export=download&id=1cHuxwyfl8hjuc8e_lYpwSqJK1u5MRg9_" className="d-block introduction__carouselImage" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="introduction__position-A">
                    <h1 className="introduction__title">¡Bienvenido a Aerodynamic Store cliente!</h1>
                    <p className="introduction__subTitle">Explora nuestros productos y elije lo que más deseas.</p>
                </div>
                <div className="introduction__buttonContainer">
                    <Link to='/all'>
                    <button className="introduction__buttonContainer__button">Viajar a la tienda</button>
                    </Link>
                </div>
            </div>
        </section>
        <SectionImages/>
        </>
    )
}

export default Introduction