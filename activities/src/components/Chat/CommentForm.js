import React, { Component } from 'react';
import './Chat.css';

export class CommentForm extends Component {
	
	 constructor(props) {
		 super(props);
				 this.state = { author: '', text: '' };
				 this.handleAuthorChange = this.handleAuthorChange.bind(this);
				 this.handleTextChange = this.handleTextChange.bind(this);
				 this.handleSubmit = this.handleSubmit.bind(this);
			 }
			 	handleAuthorChange(e) {
			 	this.setState({ author: e.target.value });
			 }
			 	handleTextChange(e) {
			 	this.setState({ text: e.target.value });
			 }
			 	handleSubmit(e) {
			 	e.preventDefault();
			 }
			 	render() {
			 		return (
			 			<form onSubmit={ this.handleSubmit }>
							 <input
							 type='text'
							 placeholder='user_name'
							 value={ this.state.author }
							 onChange={ this.handleAuthorChange } />
							 <input
							 type='text'
							 placeholder='user_comment'
							 value={ this.state.text }
							 onChange={ this.handleTextChange } />
							 <input
							 type='submit'
							 value='Post' />
						</form>
		 		)
		}
	}

export default CommentForm;