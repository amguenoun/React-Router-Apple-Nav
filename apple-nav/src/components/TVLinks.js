import React from 'react';
import { tvLinks } from '../data'

const TVLinks = () => {
    return (
        <div className='link-container'>
            {tvLinks.map(item => <a href="#">{item}</a>)}
        </div>
    )
}

export default TVLinks;