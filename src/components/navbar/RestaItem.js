import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

function RestaItem(){

    const dd = useSelector(state=>state)
    console.log(dd)
    const stores = dd.data.map(store=>
    <div className="card">
        <div className="card-left">
            <img width="160px" height="170px" src={store.Picture.PictureUrl1} />
        </div>
        <div className="card-right">
            <h3>{store.Name}</h3>
            <h5>{store.Address}</h5>
            <h6>{store.OpenTime}</h6>
            <h6>{store.Phone}</h6>
        </div>
    </div>
    )
    return(
        <div>
            {stores}
        </div>
    )
}

export default RestaItem;