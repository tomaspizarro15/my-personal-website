import React, { Component } from 'react';
import Cookies from 'universal-cookie';


class EditProfile extends Component {
    state = {
        fields: [
            { id: "1", label: "Nombre", value: "", valid: false, type: "text", name: "name" },
            { id: "2", label: "Descripcion", value: "", valid: false, type: "text", name: "description" },
        ],
        image: "",
        file: "",
        url: 'https://tomas-pizarro.herokuapp.com/admin/edit-profile'
    }
    cookies = new Cookies();
    fileReader = (file) => {
        const reader = new FileReader();
        const promise = new Promise((resolve, reject) => {
            reader.onload = (event) => resolve(event.target.result);
            reader.onerror = (err) => reject(err)
        });
        reader.readAsDataURL(file);
        return promise
    }
    inputHandler = (event, id) => {
        const newFields = [...this.state.fields];
        newFields[id].value = event.target.value;
        this.setState({ fields: newFields })
    }
    filePickerHandler = (event) => {
        const file = event.target.files[0]
        this.fileReader(file).then(b64 => {
            console.log(b64)
            this.setState({ image: b64, file: file })
        }).catch(err => console.log(err))
        console.log(file)
    }
    formSubmitter = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('username', this.state.fields[0].value)
        formData.append('description', this.state.fields[1].value)
        console.log("This will be appended", this.state.file)
        formData.append('image', this.state.file)
        fetch(this.state.url, {
            method: "PUT",
            headers: {
                "Authorization": this.cookies.get('token')
            },
            body: formData,
        })
            .then(promise => promise.json())
            .then(response => {
                console.log(response)
            })
    }

    render() {
        console.log(this.state.file)
        return (
            <div>
                <p>Profile Editing</p>
                <div style={{ width: "100px", height: "100px", backgroundImage: `url('${this.state.image}')` }}></div>
                <form className="edit_profile__form" onSubmit={(event) => { this.formSubmitter(event) }}>
                    {this.state.fields.map((field, i) => {
                        return (
                            <li key={field.id}>
                                <label>{field.label}</label>
                                <input type={field.type} name={field.name} value={field.value} onChange={(event) => { this.inputHandler(event, i) }} />
                            </li>
                        )
                    })}
                    <button className="profile_pic__button" type="button"><input onChange={(event) => { this.filePickerHandler(event) }} name="image" className="profile_pic__input" type="file" />Profile pic</button>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default EditProfile;