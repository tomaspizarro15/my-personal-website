import React from 'react';
import './404.css';
import logo from './404.png'
import { Link } from 'react-router-dom';


const My404Component = () => {
    return (
        <div className="error_component__container">
            <img src={logo} alt="404_logo"></img>
            <p className="error_p">¡Wow , al parecer esta pagina no existe!</p>
            <p className="error_code">¡404!</p>
            <Link to ="/">
                <button className="error_button">Llevame a casa</button>
            </Link>
        </div>
    )
}

export default My404Component; 