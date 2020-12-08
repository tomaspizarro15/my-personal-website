import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './admin_profile.css';
import EditNews from './edit_components/edit_news';
import EditProfile from './edit_components/edit_profile';

class AdminProfile extends PureComponent {
    state = {
        editButtons: [
            { id: "00", label: "Edit profile", status: false, component: <EditProfile /> },
            { id: "01", label: "Edit news", status: false, component: <EditNews /> }
        ],
        activeButton: undefined,
    }

    openEditor = (id) => {
        const editButtons = [...this.state.editButtons];
        let activeButton;
        editButtons.map(button => {
            if (button.id === id) {
                button.status = !button.status;
                if (button.status) {
                }
            } else {
                button.status = false;
            }
            this.setState({ editButtons: editButtons })
        })
    }

    render() {
        let buttons = [...this.state.editButtons]
        let activeComponent;
        buttons.map(button => {
            if (button.status) {
                activeComponent = button.component
            }
        })
        return (
            <div className="profile">
                <div className="profile_pic__container" style={{ backgroundImage: `url('${this.props.user.image}')` }}></div>
                <h1>{this.props.user.username}</h1>
                <div className="profile_list">
                    <ul className="profile_button__list">
                        {buttons.map(button => {
                            return <li key={button.id}><button onClick={() => { this.openEditor(button.id) }}>{button.label}</button></li>
                        })}
                    </ul>
                    {activeComponent}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(AdminProfile); 