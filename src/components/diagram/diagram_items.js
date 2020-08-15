import React from 'react';

const diagramItems = (props) => {
    let stickStyle = "item_stick";
    if(props.status) {
        stickStyle = "item_stick on"
    }
    return (
        <div className="item__line">
            <div className={stickStyle}>

            </div>
        </div>
    )
}

export default diagramItems;