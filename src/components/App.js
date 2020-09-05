import React, { useState, Fragment } from 'react';
import Map from './Map';
import Navbar from './Navbar';

function App(){

  return(
    <Fragment>
      <div className="wrap-banner">
        <div className="banner">
          <h3 className="logo">123</h3>
          <div className="wrap-input">
            <div>
              <input type="search" placeholder="搜尋地點"></input>
            </div>
            <div>
              <input type="search" placeholder="美食分類"></input>
            </div>
            <div>
              <input type="button" className="search"></input>
            </div>
          </div> 
        </div>
      </div>
      <div className="container">
        <Map/>
        <Navbar/>
      </div>
    </Fragment>
  );
}


export default App;