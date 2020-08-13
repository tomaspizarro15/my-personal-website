import React from 'react'; 
import './home_button.css'; 



const HomeButton = (props) => {
    return(
        <div className ="home_button__container">
            <img className ="home_button__logo" src = {props.src} alt = {props.alt}></img>
        </div>
    )
}

export default HomeButton; 
