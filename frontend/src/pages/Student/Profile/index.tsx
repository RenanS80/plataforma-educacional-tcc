import { AuthContext } from "AuthContext";
import { useContext, useEffect } from "react";
import { getTokenData, isAuthenticated } from "utils/auth";

function Profile() {

    const { authContextData, setAuthContextData } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated()) {
            setAuthContextData({
                authenticated: isAuthenticated(),
                tokenData: getTokenData()
            })
        }
        else {
            setAuthContextData({
                authenticated: false
            })
        }
    }, [authContextData])

    return(
        <div>
            <p><strong>Nome: </strong></p>
            <p><strong>E-mail: </strong>{authContextData.tokenData?.user_name}</p>
        </div>
    );
}

export default Profile;