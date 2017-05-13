import React, {Component} from 'react';
import CamperItem from './camper_item';

const CamperList = ({list}) => {
    if (!list) {
        return <tbody><tr></tr></tbody>;
    }
    const camperItems = list.map((camper,i) => <CamperItem key={i} camper={camper} number={i+1}/>);

    return (
        <tbody>
            {camperItems}
        </tbody>
    );
};

export default CamperList;