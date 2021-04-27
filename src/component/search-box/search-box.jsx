import React from 'react';
import './search-box.css';

export const Searchbox = ({placeholder , handler}) => (
    
<input className="search" type="search" placeholder={placeholder} onChange={handler}/>
)



