import React from 'react';
import './Slider.css';

const Slider = () => {
  return(
      <div className="row">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active indicarots"></li>
            <li className="indicarots" data-target="#myCarousel" data-slide-to="1"></li>
            <li className="indicarots" data-target="#myCarousel" data-slide-to="2"></li>
            <li className="indicarots"data-target="#myCarousel" data-slide-to="3"></li>
          </ol>

          <div className="carousel-inner">
            <div className="item active">
              <h1 className="text-center">Extending your team?</h1>
              <h3 className="text-center">Find a perfect match</h3>
            </div>

            <div className="item">
              <h1 className="text-center">Extending your team?</h1>
              <h3 className="text-center">Find a perfect match</h3>
            </div>

            <div className="item">
              <h1 className="text-center">Extending your team?</h1>
              <h3 className="text-center">Find a perfect match</h3>
            </div>

            <div className="item">
              <h1 className="text-center">Extending your team?</h1>
              <h3 className="text-center">Find a perfect match</h3>
            </div>
          </div>

          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
  );
};

export default Slider;