import React from 'react';
import './App.css';
import Header from  './components/header/Header';
import Slider from './components/Slider/Slider';
import OurWork from './components/OurWork/OurWork';
import Companies from './components/Companies/Companies';
import WorldMap from './components/WorldMap/WorldMap';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';


class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Slider />
        <OurWork />
        <Companies />
        <WorldMap />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
