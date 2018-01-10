import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
     
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC2QMuOhfc0txDC0c2VoVI60SU-3JEjw04&v=3.exp&libraries=geometry,drawing,places",


    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px`, width:`40%`, float:`right` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={3} defaultCenter={{ lat: 32.715736, lng: -117.161087 }}>
      <Marker position={{ lat: 32.715736, lng: -117.161087 }} />
    
  </GoogleMap>
));


ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));


export default MyMapComponent;