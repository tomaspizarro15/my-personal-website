import React from 'react';
import './add_segment.css';

const AddSegment = (props) => {
    return (
        <div className="add_segment">
            <h1>Nombre de la seccion</h1>
            <form onSubmit={props.submit}>
                <input onChange={props.change} value = {props.value} />
                <button type="submit">Add segment</button>
            </form>

        </div>
    )
}

export default AddSegment;