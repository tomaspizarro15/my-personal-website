import React, { Component } from 'react';
import './toolbar.css';
import ToolbarItems from './toolbar_items';

class Toolbar extends Component {

    state = {
        sections: {
            javascript: {
                title: 'Javascript',
                path: '/javascript',
                items: [
                    { title: 'History', path: '/' },
                    { title: 'introduction', path: '/' },
                    { title: 'How does work', path: '/' },
                    { title: 'Functional Programming', path: '/' },
                    { title: 'Functions', path: '' },
                    { title: 'Node.js', path: '/' },
                    { title: 'Arrays', path: '/' },
                    { title: 'Classes', path: '/' },
                    { title: 'Constructor', path: '/' },
                    { title: 'ES6', path: '/' },
                ]
            },
            react: {
                title: 'React',
                path: '/react',
                items: [
                    { title: 'Introduction', path: '/' },
                    { title: 'React basics', path: '/' },
                    { title: 'ReactDOM', path: '/' },
                    { title: 'JSX', path: '/' },
                    { title: 'State', path: '/' },
                    { title: 'Class Components', path: '/' },
                    { title: 'Functional Components', path: '/' },
                    { title: 'Life Cicles', path: '/' },
                    { title: 'React Hooks', path: '/' },
                    { title: 'ReactROUTER', path: '/' },
                ]
            },
            node: {
                title : 'Node',
                path : '/node',
                items :[
                    { title: 'About node', path: '/' },
                    { title: 'Basics', path: '/' },
                    { title: 'Async Javascript', path: '' },
                    { title: 'Callbacks', path: '' },
                    { title: 'Promises', path: '/' },
                    { title: 'NPM', path: '/' },
                    { title: 'API', path: '/' },
                    { title: 'Req', path: '/' },
                    { title: 'Res', path: '/' },
                    { title: 'Usefull modules', path: '/' },
                    { title: 'functions', path: '/' },
                    { title: 'EJS', path: '/' }
                ]
            },
            express: [
                { title: 'Introduction', path: '/' },
                { title: 'Router', path: '/' },
                { title: 'Express app', path: '/' },
                { title: 'Middleware', path: '/' },
            ]
        }
    }
    render() {

        console.log("TOOLBAR STATE::::>", this.state.sections)

        return (
            <div className="toolbar_container">
            
            </div>
        )
    }
}
export default Toolbar; 
