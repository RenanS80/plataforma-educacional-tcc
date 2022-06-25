import { Redirect, Route } from 'react-router-dom';
import { hasAnyRoles, isAuthenticated, Role } from 'utils/auth';

type Props = {
    children: React.ReactNode;
    path: string;
    roles?: Role[];
};

function PrivateRoute({ children, path, roles = [] }: Props) {
    return (
        <Route
            path={path}
            render={({ location }) =>

                !isAuthenticated() ? (<Redirect to={{
                    pathname: '/student/auth/login',
                    state: { from: location }
                }} />
                ) : (
                    !hasAnyRoles(roles) ? (
                        <Redirect to='/student/dashboard' />
                    ) : (
                        children
                    )
                )
            }
        />
    );
};

export default PrivateRoute;