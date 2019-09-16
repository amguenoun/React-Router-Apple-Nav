import React from 'react';
import { macLinks } from '../data'

const MacLinks = () => {
    return (
        <div className='link-container'>
            {macLinks.map(item => <a href="#">{item}</a>)}
        </div>
    )
}

export default MacLinks;