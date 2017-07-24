import React from 'react';
import Datamap from 'datamaps';
import './WorldMap.css';
import axios from 'axios';
import Papa from 'babyparse';
import * as d3 from 'd3';
import topojson from 'topojson';

class WorldMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputPopulation: null,
      populationData: {},
    };

  }

  componentDidMount() {
    // Make a request
   axios.get('world-cities-population.csv')
     .then( (response) => {
     this.setState({
     populationData: Papa.parse(response.data,{ header: true}),
     });
     this.initMap();
     console.log(this.state.populationData.data)
     })
     .catch((error) => {
     console.log(error);
     this.initMap();
     });
  }

  initMap = () => {
    const map = new Datamap({
     element: this.refs.container,
     scope: 'world',
     dataType: 'csv', // For use with dataUrl, currently 'json' or 'csv'. CSV should have an `id` column
     geographyConfig: {
      borderColor: '#2B2B2B',
     },
     dataUrl: '/world-cities-population.csv', // If not null, datamaps will attempt to fetch this based on dataType ( default: json )
     fills: {
     defaultFill: 'rgba(247,247,247,0.9)' // Any hex, color name or rgb/rgba value
     },
     responsive: true,

     });

   /* var map = new Datamap({
      element: this.refs.container,
      dataType: 'csv',
      dataUrl: '/world-cities-population.csv',
      scope: 'custom',
      setProjection: (element, options) => {
        const projection = d3.geoEquirectangular()
          .center([19, -3])
          .scale(element.offsetWidth)
          .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
      const path = d3.geoPath()
        .projection( projection );

    return {path: path, projection: projection};
  }
  });*/
  };
  render() {
    return(
      <div ref="container" id="map">
        <div className="population">
          <span>Population:</span>
          <input
            type="text"
            placeholder="enter desired population"
          />
        </div>
      </div>
    );
  }
}

export default WorldMap;