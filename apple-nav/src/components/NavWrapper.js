import React from "react";
import { Link } from 'react-router-dom';
import { topLinks } from '../data';

const NavWrapper = () => {
    return (
        <div className='link-container'>
            {topLinks.map(item => <Link to={item}>{item}</Link>)}
        </div>

    );
}

export default NavWrapper;