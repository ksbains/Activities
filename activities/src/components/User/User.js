import React from "react";
import "./User.css";
import picture from "./basketball.jpg";

const User = props => {
    return <div className="container user">
        <div className="row">
            <div className="profile">
                <div className="wrapper">
                    <img src={picture}/>
                </div>
            </div>
            <div className="info">
                <div className="username">
                    Username
                </div>
                <div className="location">
                    Location
                </div>

            </div>
            <div className="aboutme">
                Description
            </div>
            <div className="flakescore">
                Flake Score
            </div>
        </div>
    </div>;
};

export default User;
