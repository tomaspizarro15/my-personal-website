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
                    { title: 'Operadores ES6', path: '/' },
                    { title: 'Babel Spread Operador', path: '/' },
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
                    { title: 'State Inmutable', path: '/' },
                    { title: 'setState - useState' },
                    { title: 'Class Components', path: '/' },
                    { title: 'Functional Components', path: '/' },
                    { title: 'Life Cicles', path: '/' },
                    { title: 'React Hooks', path: '/' },
                    { title: 'ReactROUTER', path: '/' },
                ]
            },
            reactNative: {
                title: 'React native',
                path: '/react-native',
                items: [
                    { title: '¿Que es React Native?', path: '/' },
                ]
            },
            redux: {
                title: 'Redux',
                path: '/redux',
                items: [
                    { title: '¿Que es Redux?', path: '/' },
                    { title: '¿Como funciona Redux?', path: '/' },
                    { title: 'Redux con React', path: '/' },
                    { title: 'State', path: '/' },
                    { title: 'Store', path: '/' },
                    { title: 'Reducer', path: '/' },
                ]
            },
            node: {
                title: 'Node',
                path: '/node',
                items: [
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
                    { title: 'EJS', path: '/' },
                    { title: 'Encriptacion', path: '/' },
                ]
            },
            express: {
                title: 'Express',
                path: '/node',
                items: [
                    { title: 'Introduction', path: '/' },
                    { title: 'Router', path: '/' },
                    { title: 'Express app', path: '/' },
                    { title: 'Modelo Vista Controlador', path: '/' },
                    { title: 'Middleware', path: '/' },
                    { title: 'Guardas', path: '/' },
                ]
            },
            Mongo: {
                title: 'Mongodb',
                path: '/mongodb',
                items: [
                    { title: 'Mongo', path: '/' },
                    { title: 'CRUD', path: '/' },
                    { title: 'Conexion', path: '/' },
                    { title: 'Tipo de modelo', path: '/' },
                    { title: 'Inyectar datos', path: '/' },
                    { title: 'Indexar Keys', path: '/' },
                    { title: 'Sesiones con Mongodb', path: '/' },
                ]
            },
            SQL: {
                title: 'SQL',
                path: '/sql',
                items: [
                    { title: 'Introduccion', path: '/' },
                    { title: 'mySQL', path: '/' },
                    { title: 'CRUD', path: '/' },
                    { title: 'Relaciones', path: '/' },
                    { title: 'Conexion', path: '/' },
                    { title: 'Padre a Hijo', path: '/' },
                    { title: 'Relacion Intermediada', path: '/' },
                ]
            },
            ORM: {
                title: 'ORM',
                path: '/orm',
                items: [
                    { title: '¿Que es un ORM?', path: '/' },
                    { title: 'Sequelize', path: '/' },
                    { title: 'Mongoose', path: '/' },
                ]
            },
        },
    }
    render() {
        let rForms = [];
        for (let id in this.state.sections) {

            rForms.push({
                id: id,
                ...this.state.sections[id],
            })
        }
        console.log(rForms)
        return (
            <div className="toolbar_container">
                {rForms.map((section, i) => {
                    return (
                        <ul key={i} className="toolbar_section">
                            <label className="toolbar_title">{section.title}</label>
                            <ToolbarItems items={section.items} title={section.title} path={section.path} />
                        </ul>
                    )
                })}
            </div>
        )
    }
}
export default Toolbar; 
