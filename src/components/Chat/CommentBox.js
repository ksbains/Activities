import React, { Component } from 'react';
import CommentForm from './CommentForm';
import './Chat.css';

export class CommentBox extends Component {
     constructor(props) {
     super(props);
     this.state = { data: [] };
        }
         render() {
             return (
                <div>
                    <h2>Comments:</h2>
                    <CommentForm />
                 </div>
            )
        }
}

export default CommentBox;