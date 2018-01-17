// //CommentBox.js
// import React, { Component } from 'react';
// import axios from 'axios';
// import CommentList from './CommentList';
// import CommentForm from './CommentForm';
// import style from './style';

// class CommentBox extends Component {
// constructor(props) {
//     super(props);
//     this.state = { data: [] };
//     this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
//     this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
//     this.handleCommentDelete = this.handleCommentDelete.bind(this);
//     this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
// }

// loadCommentsFromServer() {
//     axios.get(this.props.url)
//         .then(res => {
//             this.setState({ data: res.data });
//         })
// }

// handleCommentSubmit(comment) {
//     let comments = this.state.data;
//     comment.id = Date.now();
//     let newComments = comments.concat([comment]);
//     this.setState({ data: newComments });
//     axios.post(this.props.url, comment)
//         .catch(err => {
//             console.error(err);
//             this.setState({ data: comments });
//         });
// }handleCommentDelete(id) {
//     axios.delete(`${this.props.url}/${id}`)
//         .then(res => {
//             console.log('Comment deleted');
//         })
//         .catch(err => {
//             console.error(err);
//         });
// }
// handleCommentUpdate(id, comment) {
//     //sends the comment id and new author/text to our api
//     axios.put(`${this.props.url}/${id}`, comment)
//         .catch(err => {
//             console.log(err);
//         })
// }
// componentDidMount() {
//     this.loadCommentsFromServer();
//     setInterval(this.loadCommentsFromServer, this.props.pollInterval);
// }
//  render() {
//  return (
//  <div style={ style.commentBox }>
//  <h2 style={ style.title }>Comments:</h2>
//  <CommentList
//  onCommentDelete={ this.handleCommentDelete }
//  onCommentUpdate={ this.handleCommentUpdate }
//  data={ this.state.data }/>
//  <CommentForm onCommentSubmit={ this.handleCommentSubmit }/>
//  </div>
//  )
//  }
// }
// export default CommentBox;

// //CommentList.js
// import React, { Component } from 'react';
// import Comment from './Comment';
// import style from './style';
// class CommentList extends Component {
//     render() {
//             let commentNodes = this.props.data.map(comment => {
//  return (
//  <Comment
//  author={ comment.author }
//  uniqueID={ comment['_id'] }
//  onCommentDelete={ this.props.onCommentDelete }
//  onCommentUpdate={ this.props.onCommentUpdate }
//  key={ comment['_id'] }>
//  { comment.text }
//  </Comment>
//  )
//  })
//  return (
//  <div style={ style.commentList }>
//  { commentNodes }
//  </div>
//  )
//  }
// }

// export default CommentList;
// //Comment.js
// import React, { Component } from 'react';
// import style from './style';
// import marked from 'marked';
// class Comment extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             toBeUpdated: false,
//             author: '',
//             text: ''
//         };
//         //binding all our functions to this class
//         this.deleteComment = this.deleteComment.bind(this);
//         this.updateComment = this.updateComment.bind(this);
//         this.handleAuthorChange = this.handleAuthorChange.bind(this);
//         this.handleTextChange = this.handleTextChange.bind(this);
//         this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
//     }
//     updateComment(e) {
//         e.preventDefault();
//         //brings up the update field when we click on the update link.
//         this.setState({ toBeUpdated: !this.state.toBeUpdated });
//     }
//     handleCommentUpdate(e) {
//         e.preventDefault();
//         let id = this.props.uniqueID;
//         //if author or text changed, set it. if not, leave null and our PUT 
//         //request will ignore it.
//         let author = (this.state.author) ? this.state.author : null;
//         let text = (this.state.text) ? this.state.text : null;
//         let comment = { author: author, text: text };
//         this.props.onCommentUpdate(id, comment);
//         this.setState({
//             toBeUpdated: !this.state.toBeUpdated,
//             author: '',
//             text: ''
//         })
//     }
//  deleteComment(e) {
//     e.preventDefault();
//     let id = this.props.uniqueID;
//     this.props.onCommentDelete(id);
//     console.log('oops deleted');
// }
// handleTextChange(e) {
//     this.setState({ text: e.target.value });
// }
// handleAuthorChange(e) {
//     this.setState({ author: e.target.value });
// }
// rawMarkup() {
//     let rawMarkup = marked(this.props.children.toString());
//     return { __html: rawMarkup };
// }
// render() {
//  return (
//  <div style={ style.comment }>
//  <h3>{this.props.author}</h3>
//  <span dangerouslySetInnerHTML={ this.rawMarkup() } />
//  <a style={ style.updateLink } href='#' onClick={ this.updateComment }>update</a>
//  <a style={ style.deleteLink } href='#' onClick={ this.deleteComment }>delete</a>
//  { (this.state.toBeUpdated)
//  ? (<form onSubmit={ this.handleCommentUpdate }>
//  <input
//  type='text'
//  placeholder='Update name…'
//  style={ style.commentFormAuthor }
//  value={ this.state.author }
//  onChange= { this.handleAuthorChange } />
//  <input
//  type='text'
//  placeholder='Update your comment…'
//  style= { style.commentFormText }
//  value={ this.state.text }
//  onChange={ this.handleTextChange } />
//  <input
//  type='submit'
//  style={ style.commentFormPost }
//  value='Update' />
//  </form>)
//  : null}
//  </div>
//  )
//  }
// }export default Comment;
// //CommentForm.js
// import React, { Component } from 'react';
// import style from './style';
// class CommentForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { author: '', text: '' };
//         this.handleAuthorChange = this.handleAuthorChange.bind(this);
//         this.handleTextChange = this.handleTextChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleAuthorChange(e) {
//         this.setState({ author: e.target.value });
//     }
//     handleTextChange(e) {
//         this.setState({ text: e.target.value });
//     }
//     handleSubmit(e) {
//             e.preventDefault();
//             let author = this.state.author.trim();
//             let text = this.state.text.trim();
//             if (!text || !author) {
//                 return;
//             }this.props.onCommentSubmit({ author: author, text: text });
// this.setState({ author: '', text: '' });
// }
// render() {
//  return (
//  <form style={ style.commentForm } onSubmit={ this.handleSubmit }>
//  <input
//  type='text'
//  placeholder='Your name…'
//  style={ style.commentFormAuthor}
//  value={ this.state.author }
//  onChange={ this.handleAuthorChange } />
//  <input
//  type='text'
//  placeholder='Say something…'
//  style={ style.commentFormText}
//  value={ this.state.text }
//  onChange={ this.handleTextChange } />
//  <input
//  type='submit'
//  style={ style.commentFormPost }
//  value='Post'/>
//  </form>
//  )
//  }
// }
// export default CommentForm;