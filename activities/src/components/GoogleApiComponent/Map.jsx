import { React } from 'react';

export class Map extends React.Component {
  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    console.log('loadMap');
  }

  render() {
    return (
    	<div>
    	 Map Coming soon
    	</div>
    );
  }
}