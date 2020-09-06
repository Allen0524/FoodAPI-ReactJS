import React, { useState, Fragment, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Map from './Map';
import Navbar from './Navbar';


function App(){

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({
      type:"FETCH_DATA"
    })
  },[])

  const loading = useSelector(state=>state.loading)

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
        {loading?<Navbar/>:null}
        <Map/>
      </div>
    </Fragment>
  );
}


export default App;