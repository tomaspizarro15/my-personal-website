import React from 'react';


const Spacer = (props) => {
    return (
        <div style={{ height: props.height, width: "100%" , marginTop: props.height}}>
            <div style={{height: "1px" , width: "100%" , backgroundColor:"#ccc"}}></div>
        </div>
    )
}

export default Spacer;