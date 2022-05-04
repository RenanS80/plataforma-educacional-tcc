import Logo from 'assets/img/logo.png';
import Github from 'assets/img/github.svg';
import Linkedin from 'assets/img/linkedin.svg';

import './styles.css';

function Footer() {

    return (
        <footer>
            <div className="container">
                <div className="footer-credits">
                    <img src={Logo} alt="Learn Logo" />
                    <p>Todos os direitos reservados aos criadores dos cursos, eventos e recursos disponíveis no catálogo</p>
                </div>

                <div className="footer-icons">
                    <img src={Github} alt="Github" />
                    <img src={Linkedin} alt="Linkedin" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;