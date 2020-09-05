import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import RestaList from './navbar/Restalist';



function Navbar(){
    const dispatch = useDispatch();
    const getdata = () => {
        dispatch({
            type:"GETDATA"
        })
    }
    getdata();
    return(
        <div className="wrap-navbar">
            456
        </div>
    )
}



export default Navbar;