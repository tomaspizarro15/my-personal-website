import React, { Component } from 'react';
import './toolbar.css';
import ToolbarItems from './toolbar_items';

class Toolbar extends Component {

    state = {
        sections: []
    }
    componentDidMount() {
        fetch('http://localhost:8080/toolbar', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                return res.json()
            })
            .then(data => {
                this.setState({ sections: data.toolbar })
            })
            .catch(err => {
                console.log("Failed", err)
            })
    }
    componentDidUpdate() {
        console.log("Refreshed")
    }
    activateSection = (i) => {
        let newSections = { ...this.state.sections }
        let sectionsArray = [];
        console.log(newSections)
        for (let id in newSections) {
            sectionsArray.push({
                ...newSections[id]
            })
        }

        sectionsArray[i].status = !sectionsArray[i].status;
        console.log(sectionsArray[i])

        let sections = { ...sectionsArray }
        this.setState({ sections: sections })
    }

    render() {

        let sections = [...this.state.sections]

        return (
            <div className="toolbar_container">
                <h1>Blogs</h1>
                <div className="toolbar">
                    {sections.map(section => {
                        return (
                            <ul className="toolbar_section">
                                <h1 className="toolbar_title">{section.title}</h1>
                            </ul>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Toolbar; 
