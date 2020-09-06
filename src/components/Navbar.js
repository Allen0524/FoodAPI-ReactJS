import React, { useState, Fragment } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import RestaList from './navbar/Restalist';


function Navbar(){

    return(
        <div className="wrap-nav">
           <RestaList/>
        </div>
    )
}



export default Navbar;