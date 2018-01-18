//Comment.js
import React, { Component } from 'react';
import './Chat.css';

export class Comment extends React.Component {
	return() {
		return (
		<div className="comment-wrapper">
			{this.children}
		</div>
	 );
 };
};

export default Comment;