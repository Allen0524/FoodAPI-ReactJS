import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import RestaItem from './RestaItem';

function Restalist(){

    return(
        <div className="wrap-navlist">
            <RestaItem/>
        </div>
    )
}

export default Restalist;