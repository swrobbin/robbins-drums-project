import React from 'react';
import { Link } from 'react-router-dom'

const NewButton = ({brand}) => {
    return (
        <Link to={`/brands/${brand.id}/instruments/new`} >
            <button className='button'>Add new instrument here!</button>
        </Link> 
    )
}

export default NewButton