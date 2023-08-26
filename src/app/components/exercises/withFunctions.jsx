import React, { useState } from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(
        !(localStorage.getItem("auth") === "token")
    );

    const handleLogin = () => {
        localStorage.setItem("auth", "token");
        setIsAuth(false);
    };
    const handleLogOut = () => {
        localStorage.removeItem("auth");
        setIsAuth(true);
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isAuth}
                onLogin={handleLogin}
                onLogOut={handleLogOut}
            />
        </CardWrapper>
    );
};

export default withFunctions;
