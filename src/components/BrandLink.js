import React from 'react'
import { Link } from 'react-router-dom';

const BrandLink = ({brand}) => {
    return (
        <div className="brand-link">
            <Link to={`/brands/${brand.id}`} className="each-brand-link" >
                <br/>
                <h1>{brand.name}</h1>
                <br/>
            </Link>
        </div>
    )
}

export default BrandLink