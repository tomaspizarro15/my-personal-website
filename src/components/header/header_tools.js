import React from 'react';
import { Link } from 'react-router-dom';


const headerTools = (props) => {
  return (
    <li class ="header_tools_list">
      <Link class="header_tools_anchor" to= {props.path}>{props.title}</Link>
    </li>
  )

}

export default headerTools;