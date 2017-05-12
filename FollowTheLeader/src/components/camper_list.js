import React, {Component} from 'react';
import CamperItem from './camper_item';

const CamperList = ({list}) => {
    if (!list) {
        return <div>Loading...</div>
    }
    const camperItems = list.map((camper,i) => <CamperItem key={i} camper={camper} number={i+1}/>);

    return (
        <ul>
            {camperItems}
        </ul>
    );
};

export default CamperList;