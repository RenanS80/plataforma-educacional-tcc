import { NavLink } from 'react-router-dom';

import './styles.css';

function SignUpButton() {
    return (
        <NavLink to="/student/auth/signup" role="button" className="base-btn btn-register">Cadastre-se</NavLink>
    );
}

export default SignUpButton;