import React from 'react';
import { padLinks } from '../data'

const PadLinks = () => {
    return (
        <div className='link-container'>
            {padLinks.map(item => <a href="#">{item}</a>)}
        </div>
    )
}

export default PadLinks;