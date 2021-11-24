import React from 'react'
import { Link } from 'react-router-dom';

const InstrumentLink = ({instrument}) => {
    return (
        <div className="instrument-link">
            <Link to={`/instruments/${instrument.id}`} className="each-instrument-link" >
                <br/>
                {/* {instrument.brand.name} */}
                <br/>
                {instrument.name}
                <br/>
                 ${instrument.price}
                 <br/>
                {/* {instrument.category} */}
                <br/>
            </Link>
        </div>
    )
}

export default InstrumentLink
