import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import Activity from "../../pages/Activity";
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


    loadingElement: <div style={{ height: `100%`, width:`100%`}} />,
    containerElement: <div style={{ height: `300px`, width:`100%`, margin:`1%`}} />,
    mapElement: <div style={{ height: `100%`, width:`100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
  )(props => (

    <GoogleMap
    
      defaultZoom={20} 
      defaultCenter={{ lat: parseFloat(props.lat), lng: parseFloat(props.lng)  }}
      mapTypeId={'hybrid'}
    >
    <Marker position={{ lat: parseFloat(props.lat), lng: parseFloat(props.lng) }}

    />
    
    </GoogleMap>
  ));


ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));


export default MyMapComponent;