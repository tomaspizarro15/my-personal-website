import React from 'react'; 
import './toolbar.css'; 
import { NavLink ,Link } from 'react-router-dom';


const ToolbarItems = (props) => {
    let activeStyle = "toolbar_item"; 
    if(!props.status) {
       activeStyle = "toolbar_item hidden"
    }
    return(
       <React.Fragment>
               {props.items.map((item , i) => {
                return (
                    <li className = {activeStyle} key = {i}><Link to ={props.path}>{item.title}</Link></li>
                ) 
            })}
       </React.Fragment>
    )
}

export default ToolbarItems