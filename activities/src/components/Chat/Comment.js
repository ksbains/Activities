//Comment.js
import React, { Component } from 'react';
import from './Chat.css';
import marked from 'marked';

export class Comment extends Component {
	 return() {
		return (
		<div className="comment-wrapper">
			{this.children}
		</div>
		}
	 )
 }
}
