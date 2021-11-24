import React from 'react';
import { Link } from 'react-router-dom'

const NewBrandButton = () => {
    return (
        <Link to={'/brands/new'} >
            <button className='button'>Add new brand here!</button>
        </Link>
        
    )
}

export default NewBrandButton