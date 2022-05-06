import { NavLink } from 'react-router-dom';

import './styles.css';

function RegisterButton() {
    return (
        <NavLink to="/signup" role="button" className="btn-register">Cadastre-se</NavLink>
    );
}

export default RegisterButton;