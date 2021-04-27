import React from 'react';
import './card.css';

export const Card = (props) => {
    return <div className="card-container">
        <img src={`https://robohash.org/${props.name}?set=set2&size=150x150`} alt="monster"/>
        <h1>{props.monster.name}</h1>
        <p>{props.monster.email}</p>
    </div>
    
}