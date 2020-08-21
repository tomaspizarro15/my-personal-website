import React, { Component } from 'react';
import './toolbar.css';
import ToolbarItems from './toolbar_items';

class Toolbar extends Component {

    state = {
      
    }
    
    sendSectionsToMongo = () => {
        fetch('')
    }

    activateSection = (i) => {
        let newSections = {...this.state.sections}
        let sectionsArray = []; 
        console.log(newSections)
        for( let id in newSections){
            sectionsArray.push({
                ...newSections[id]
            })
        }
        
        sectionsArray[i].status = !sectionsArray[i].status; 
        console.log(sectionsArray[i])

        let sections = {...sectionsArray}
        this.setState({sections : sections})
    }

    render() {
      
        return (
            <div className="toolbar_container">
                <h1>Blogs</h1>
                <div className="toolbar">
                   
                </div>
            </div>
        )
    }
}
export default Toolbar; 
