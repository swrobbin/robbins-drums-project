import React from 'react';
import { Link } from 'react-router-dom'

const NewButton = () => {
    return (
        <Link to={'/instruments/new'} >
            <button className='button'>Add new instrument here!</button>
        </Link>
        
    )
}

export default NewButton