import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import ListaDeTexto from '../lista_texto/lista_texto';
import './informacion.css';


class Informacion extends Component {
    state = {
        title: { message: "JavaScript Junior Developer", color: "#212B85" },
        lista: [],
    }
    componentDidMount() {
        fetch('https://tomas-pizarro.herokuapp.com/admin/edit-admin-info', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(promise => promise.json())
            .then(res => {
                if(res.status === 200 ) {
                    this.setState({ lista: res.lista })
                }
                else {
                    this.setState({ lista : [] })
                }
            })
    }
    addFieldOfInfo = () => {
        const newLista = [...this.state.lista];
        newLista.push({
            id: newLista.length,
            texto: ""
        })
        this.setState({ lista: newLista })
    }
    removeFieldOfInfo = (id) => {
        const newLista = [...this.state.lista];
        newLista.splice(id, 1)
        this.setState({ lista: newLista })
    }
    inputChangeHandler = (event, i) => {
        const newLista = [...this.state.lista];
        newLista[i].texto = event.target.value;
        this.setState({ lista: newLista })
    }
    submitChanges = () => {
        const cookie = new Cookies();
        fetch('https://tomas-pizarro.herokuapp.com/admin/edit-admin-info', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookie.get('token'),
            },
            body: JSON.stringify({
                info: this.state.lista
            })
        }).then(promise => promise.json())
        this.setState({ edit: !this.state.edit })
    }
    render() {
        return (
            <div className="informacion_container">
                <ListaDeTexto title={this.state.title} lista={this.state.lista} />
                {this.state.edit ?
                    <div className="informacion__edit">
                        {this.state.lista.map((e) => {
                            return (<div key={e.id} className="informacion_field"><input onChange={(event) => { this.inputChangeHandler(event, e.id) }} value={e.texto} /><button className="informacion_remove__button" onClick={() => { this.removeFieldOfInfo(e.id) }}>X</button></div>)
                        })}
                        <div className="informacion_add">
                            <button className="informacion_add__button" onClick={this.addFieldOfInfo}>+</button>
                            <button className="informacion_submit__button" onClick={this.submitChanges}>Update</button>
                        </div>
                    </div> : this.props.user.token ? <button className="informacion_add__button" onClick={this.submitChanges}>editar</button> : null}

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Informacion);