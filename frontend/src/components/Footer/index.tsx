import Logo from 'assets/img/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import './styles.css';

function Footer() {

    return (
        <footer>
            <div className="container">
                <div className="footer-credits">
                    <div className="footer-credits-logo">
                        <img src={Logo} alt="Learn Logo" />
                    </div>
                    <div className="footer-credits-social">
                        <a href="https://github.com/RenanS80" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="github" />
                        </a>
                        <a href="https://www.linkedin.com/in/renansoaresf/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} className="linkedin" />
                        </a>
                    </div>
                </div>

                <div className="footer-copyright">
                    <p>Todos os direitos reservados aos criadores dos cursos, eventos e recursos disponíveis no catálogo</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;