import React from "react";
import "./Character.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

class Character extends React.Component {

	updateCount = (event) => {
		console.log('updateCount', this.props)
		this.props.random(this.props.tile, this.props.loc);
	}

	render () {
		return (
			<div 
			  	role="img"
			  	aria-label="click item" 
			  	className="click-item"
			  	onClick={this.updateCount}
			  	style={
			  		{
			  			backgroundImage: `url(${this.props.tile.url})`
			  		}
			  	}> 
			</div>
		);
	}
}

export default Character;
