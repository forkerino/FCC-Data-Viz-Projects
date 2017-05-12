import React, {Component} from 'react';
import CamperItem from './camper_item';

const CamperList = (props) => {
    const camperItems = props.list ? props.list.map((camper,i) => <CamperItem key={i} camper={camper} number={i+1}/>) : "";

    return (
        <ul>
            {camperItems}
        </ul>
    );
};

export default CamperList;