import React from 'react';
import Cookies from 'universal-cookie';
import './logout_icon.css';



const LogoutIcon = (props) => {

    const logoutHandler = () => {
        const cookie = new Cookies();
        cookie.remove('token');
        window.location.replace('http://localhost:3000/');
    }

    return (
        <div className="logout_icon__container" onClick={logoutHandler}>
            <div className="logout_icon__square">
                <div className="logout_icon__arrow"></div>
            </div>
        </div>
    )
}
export default LogoutIcon