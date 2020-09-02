import React, { PureComponent } from 'react';
import './toolbar.css';
import ToolbarItems from './toolbar_items';

class Toolbar extends PureComponent {

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
                data.toolbar.map(section => {
                    section.status = false; 
                })
                this.setState({ sections: data.toolbar })
            })
            .catch(err => {
                console.log("Failed", err)
            })
    }

    activateSection = (i) => {
        let updatedSection = [...this.state.sections]; 

        updatedSection.map((section , index) => {
            if(index === i) {
               section.status = !section.status; 
            }
        }) 
        this.setState({sections : updatedSection})
    }

    render() {
     
        let sections = [...this.state.sections]


        return (
            <div className="toolbar_container">
                <h1>Blogs</h1>
                <div className="toolbar">
                    {sections.map((section, i) => {
                        return (
                            <ul className="toolbar_section" key = {section._id} > 
                                <h1 className="toolbar_title" onClick={(event) => this.activateSection(i)}>{section.title}</h1>
                                <ToolbarItems  _id = {section._id}  items={section.items}  status = {section.status}/>
                            </ul>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Toolbar; 
