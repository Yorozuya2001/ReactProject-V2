import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__textContainer">
                <p className="footer__textStyle">AerodynamicStore</p>
                <p className="footer__textStyle">Axel Ariel Valiente 2022&copy;</p>
                <div className="footer__ContainerLinks">
                    <FaLinkedin className="footer__ContainerLinks__images"/>
                    <FaGithub className="footer__ContainerLinks__images"/>
                    <FaInstagram className="footer__ContainerLinks__images"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer