import React, { Component } from 'react';
import './login.css';
import Cookies from 'universal-cookie'
import { connect } from 'react-redux';

class login extends Component {
    state = {
        fields: [
            { id: "00", label: "email", value: "", status: true },
            { id: "01", label: "password", value: "", status: true },
        ],
        loginStatus: {
            code: 100, message: "", status: false,
        },
        token: {},
        label :"",
    }
    inputChangeHandler = (event, index) => {
        const newFields = [...this.state.fields]
        newFields[index].value = event.target.value;
        this.setState({ fields: newFields })
    }
    submitFormHandler = (event) => {
        event.preventDefault();
        fetch('https://tomas-pizarro.herokuapp.com/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: this.state.fields[0].value,
                password: this.state.fields[1].value,
            })
        })
            .then(promise => {
                return promise.json();
            })
            .then(response => {
                console.log(response)
                if (!response.token) {
                    console.log(response)
                    const newStatus = { ...this.state.loginStatus };
                    newStatus.code = response.status;
                    newStatus.message = response.message;
                    newStatus.status = true;
                    this.setState({ loginStatus: newStatus })
                } else {
                    const newStatus = { ...this.state.loginStatus };
                    this.fetchCookieHandler(response.token);
                    this.props.auth(this.fetchCookieHandler(response.token));
                    newStatus.status = false;
                    this.setState({ loginStatus: newStatus })
                    window.location.replace('https://tomas-pizarro-web.herokuapp.com/')
                }
            })
    }
    fetchCookieHandler = (token) => {
        const cookie = new Cookies();
        const date = new Date();
        let time = date.getTime();
        time += 3600 * 1000;
        date.setTime(time);
        cookie.set('token', token, { maxAge: date })
        return cookie.get('token');
    }
    render() {
        let errorMessage;
        let loginStyle = "login_input";
        if (this.state.loginStatus.status) {
            errorMessage = (
                <p>{this.state.loginStatus.message}</p>
            )
            loginStyle = "login_input invalid"
        }
        return (
            <div className="login_container">
                <form className="login" onSubmit={(event) => { this.submitFormHandler(event) }}>
                    <p className="login_title">Admin</p>
                    {this.state.fields.map((field, index) => {
                        return (
                            <React.Fragment key={field.id}>
                                <label className="login_label">{field.label}</label>
                                <input className={loginStyle} name={field.label} type={field.label} value={field.value} placeholder={field.label} onChange={(event) => { this.inputChangeHandler(event, index) }}></input>
                            </React.Fragment>
                        )
                    })}
                    {errorMessage}
                    <button className="login_button" type="submit">Log in</button>
                </form>
            </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}
const dispatchPropsToState = (dispatch) => {
    console.log("[dispatchPropsToState]")
    return {
        auth: (token) => dispatch({ type: 'TOKEN_FETCHING', payload: { value: token } })
    }
}
export default connect(mapStateToProps, dispatchPropsToState)(login); 