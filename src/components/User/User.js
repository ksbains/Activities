import React, { Component } from "react";
import "./User.css";
import picture from "./basketball.jpg";

// const imageStyles = {
//     width: '150px',
//     height: '150px',
//     display: 'block',
//     margin: 'auto',
//     verticalAlign: 'middle',
//     borderRadius: '50%'
// }

export class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
    return ( <div className="container user">
            <div className="row">
                <div className="profile">
                    <div className="wrapper">
                        <img className="profilePic"src={this.props.pic} id='image'/>
                    </div>
                </div>

                <div className="username">
                        {this.props.username}
                </div>

                <div className="aboutme">
                    {this.props.bio}
                </div>
                
                <div className="flakescore">
                    {this.props.flakeScore}
                </div>
            </div>
        </div>
        )
    }
};

export default User;
