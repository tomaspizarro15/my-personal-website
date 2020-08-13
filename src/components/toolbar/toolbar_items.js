import React from 'react'; 
import './toolbar.css'; 
import { NavLink ,Link } from 'react-router-dom';


const ToolbarItems = (props) => {
    console.log("Props received in dummy component" ,props.items)
    return(
       <React.Fragment>
               {props.items.map((item , i) => {
                return (
                    <li className ="toolbar_item" key = {i}><Link to ={item.path}>{item.title}</Link></li>
                ) 
            })}
       </React.Fragment>
    )
}

export default ToolbarItems