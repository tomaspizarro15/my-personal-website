import React, { Component } from 'react';
import './profile_card.css';
import gitLogo from './github_icon.png';
import linkLogo from './linkedin_icon.png';
import gmailLogo from './gmail_icon.png';
import { connect } from 'react-redux';

class ProfileCard extends Component {

    state = {
        logos: [
            { id: "logo01", alt: 'git', src: gitLogo },
            { id: "logo02", alt: 'linkedin', src: linkLogo },
            { id: "logo03", alt: 'gmail', src: gmailLogo },
        ],
        links: [

        ]
    }

    render() {
        console.log(this.props.user)
        return (
            <div className="profile_card">
                <div className="profile_card__photo">
                    <div className="profile_card__photo_image" style={{ backgroundImage: `url('${this.props.user.image}')` }}></div>
                </div>
                <div className="profile_card__info">
                    <p>{this.props.user.username}</p>
                </div>
                <div className="profile_card__media">
                    {this.state.logos.map((logo) => {
                        return (
                            <div key={logo.id} className="profile_card__media_image">
                                <img src={logo.src} alt={logo.alt}></img>
                            </div>
                        )
                    })}

                </div>
                <div className="profile_card__links">
                    <a className="profile_card__link" href="https://www.codewars.com/users/tomaspizarro15">Codewars Profile</a>
                </div>
            </div>
        );
    }
}

const mapPropsToState = state => {
    return {
        user: state.user
    }
}

export default connect(mapPropsToState)(ProfileCard);