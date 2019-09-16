import React from 'react';
import { phoneLinks } from '../data'

const PhoneLinks = () => {
    return (
        <div className='link-container'>
            {phoneLinks.map(item => <a href="#">{item}</a>)}
        </div>
    )
}

export default PhoneLinks;