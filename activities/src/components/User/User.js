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
                <div className="userloc">
                    aaaaMatt
                </div>
                <div className="userloc">
                    San Marcos, California
                </div>

            </div>
            <div className="aboutme">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam turpis quis nisl dapibus, nec tincidunt ante finibus. Integer at ante et libero convallis posuere eu vitae nisi. Quisque metus odio, faucibus ac ultrices id, sodales ac lorem. Nam vel posuere magna. Aliquam pretium nisi a sollicitudin posuere. Nulla nec justo orci. Duis dapibus, nisi at semper egestas, risus enim ornare mi, vitae pharetra nunc nisi vestibulum ipsum. Praesent eu sollicitudin massa.
            </div>
            <div className="flakescore">
                98
            </div>
        </div>
    </div>;
};

export default User;
