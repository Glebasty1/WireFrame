import React from 'react';
import './Companies.css';

const Companies = (props) => {
  return(
    <div>
    <div className="row">
      <h1 className="title">featured Companies</h1>
      <div className="col-md-4 ">
        <div className="companies"></div>
      </div>
      <div className="col-md-4">
        <div className="companies"></div>
      </div>
      <div className="col-md-4">
        <div className="companies"></div>
      </div>
    </div>
      <div className="row">
        <div className="col-md-4">
          <div className="companies"></div>
        </div>
        <div className="col-md-4">
          <div className="companies"></div>
        </div>
        <div className="col-md-4">
          <div className="companies"></div>
        </div>
      </div>
    </div>
  );
};

export default Companies;