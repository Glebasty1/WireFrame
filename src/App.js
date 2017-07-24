import React from 'react';
import './App.css';
import WorldMap from './components/WorldMap/WorldMap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      populationData: {},
    };
  }
  render() {
    return (
          <WorldMap />
    );
  }
}

export default App;
