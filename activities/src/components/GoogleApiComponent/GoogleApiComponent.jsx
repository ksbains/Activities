import React from "react";
import ReactDOM from "react-dom";
import { Map } from './Map';

export class Container extends React.Component {

	render() {
		 if (!this.props.loaded) {
	      return <div>Loading...</div>
	    }
	    return (
	      <div>
	        <Map google={this.props.google} />
	      </div>
	    )
	}
 
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyC2QMuOhfc0txDC0c2VoVI60SU-3JEjw04'
})(Container);