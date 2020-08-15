import React from 'react';
import './footer.css'



const Footer = (props) => {


    return (
        <footer className="footer_container">
            <div className="footer">
                <p>Copyright © 2020 - Tomas Pizarro</p>
                <p> se reservan los derechos de autor a la marca registrada de Tomas Pizarro, por derechos de copyright</p>
                <div>
                    <p>
                        Iconos con derecho de autor de © 2020 Icons8 LLC.
                     </p>
                    <p>
                        Iconos con derecho de autor de © 2020 IconscoutLLC.
                     </p>
                    <a href="https://icons8.com">
                        Icons8
                   </a>
                    <p>
                        Photo by Daniel absi from Pexels
                   </p>
                    <a href="https://iconscout.com/icons/express" target="_blank"></a><a href="https://iconscout.com/contributors/icon-mafia" target="_blank">Icon Mafia</a>
                </div>
            </div>
        </footer>
    )


}

export default Footer; 