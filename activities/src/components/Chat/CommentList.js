//CommentList.js

import React, { Component } from 'react';
import Comment from './Comment';
import from './Chat.css';

export class CommentList extends Component {
	 render() {
	 let commentNodes = this.props.data.map(comment => {
		 return (
			 <Comment author={ comment.author } key={ comment.id }>
			 	{ comment.text}
			 </Comment>
		 );
	 })
 	return (
	 	<div style={ style.commentList }>
	 		{ commentNodes }
	 	</div>
		 )
	}
}
