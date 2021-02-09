import React from 'react';
import Phrase from '../phrases/phrases';
import './lista_texto.css';


const ListaDeTexto = (props) => {
    return (
        <React.Fragment>
            <Phrase phrase={props.title} />
            <ul className="text_list">
                {props.lista ?
                    props.lista.map(e => {
                        return (
                            <li className="text_list__element" key={e.id}><p className="element__p">{e.texto}</p></li>
                        )
                    })
                    : null}
            </ul>
        </React.Fragment>
    )
}

export default ListaDeTexto;