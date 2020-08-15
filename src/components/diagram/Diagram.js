import React, { Component } from 'react';
import './diagram.css';
import Phrase from '../phrases/phrases';
import TextComponent from '../text_component/text_component';


import reactIcon from './react_icon.png';
import mongoDbIcon from './mongodb_icon.png';
import expressIcon from './node_express_icon.png';
import nodeIcon from './node_icon.png';
import DiagramItems from './diagram_items';

class Diagram extends Component {
    state = {
        mernDiagram: {
            title: 'Ecosistema MERN (JavaScript)',
            items: [
                { id: '0', status: false, color : 'green', title: 'Mongo', description: 'Mongo es el tipo de base de datos de este Ecosistema', href: '', color: '', icon: mongoDbIcon },
                { id: '1', status: false, color : 'yellow', title: '', description: '', href: '', color: '', icon: expressIcon },
                { id: '2', status: false, color : 'skyblue', title: '', description: '', href: '', color: '', icon: reactIcon },
                { id: '3', status: false, color : 'green', title: '', description: '', href: '', color: '', icon: nodeIcon },
            ],
            paragraphs: [
                { text: 'Se utilizo todo un Ecosistema JavaScript tanto para el backend como para el frontend' }
            ],
        }
    }

    activateDiagram = (id) => {
        const newDiagrams = { ...this.state.mernDiagram }
        const newItems = [...newDiagrams.items]

        newItems[id].status = !newItems[id].status;

        newItems.map((newItem, i) => {
            if (i != id) {
                newItem.status = false;
            }
        })

        newDiagrams.items = newItems;

        this.setState({ mernDiagram: newDiagrams })
        console.log(this.state.mernDiagram.items)
    }

    render() {
        let diagram = { ...this.state.mernDiagram }
        let stickStyle = "item_stick";

        return (
            <div className="diagram_container">
                <Phrase phrase={{ color: 'black', message: diagram.title }} />
                <TextComponent paragraphs={diagram.paragraphs} />
                <div className="diagram_items">
                    {diagram.items.map(item => {
                        return (
                            <div className="item_container" key={item.id}>
                                <ul className="diagram_item">
                                    <li className="item">
                                        <img className="diagram_item__icon" src={item.icon} onClick={() => { this.activateDiagram(item.id) }}></img>
                                    </li>
                                </ul>
                                <DiagramItems status = {item.status} color = {item.color}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }


}

export default Diagram;