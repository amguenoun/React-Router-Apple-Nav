import React from 'react';
import { musicLinks } from '../data'

const MusicLinks = () => {
    return (
        <div className='link-container'>
            {musicLinks.map(item => <a href="#">{item}</a>)}
        </div>
    )
}

export default MusicLinks;