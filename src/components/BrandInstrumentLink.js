import React from 'react'
import { Link } from 'react-router-dom';

const BrandInstrumentLink = ({instrument, brand}) => {
    return (
        <div className="instrument-link">
            <Link to={`/brands/${brand.id}/instruments/${instrument.id}`} className="each-instrument-link" >
                <br/>
                {instrument.name}
                <br/>
                 ${instrument.price}
                 <br/>
                <br/>
            </Link>
        </div>
    )
}

export default BrandInstrumentLink
