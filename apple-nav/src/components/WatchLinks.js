import React from 'react';
import { watchLinks } from '../data'

const WatchLinks = () => {
    return (
        <div className='link-container'>
            {watchLinks.map(item => <a href="#">{item}</a>)}
        </div>
    )
}

export default WatchLinks;