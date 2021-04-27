import React from 'react';
import './card-list.css';
import { Card } from '../card/card.component';
export const Cardlist = props => {
   
    return <div className="card-list">

        {props.monster.map(monst => (
            <Card name={monst.id} monster={monst} />
        )
      )}
    </div>;
};
