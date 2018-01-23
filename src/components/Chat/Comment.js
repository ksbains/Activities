//Comment.js
import React, { Component } from 'react';
import './Chat.css';

export class Comment extends Component {
	return() {
		return (
		<div className="comment-wrapper">
			{this.props.children}
		</div>
	 	);
 	};
};

export default Comment;