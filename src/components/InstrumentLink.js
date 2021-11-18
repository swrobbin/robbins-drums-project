import React from 'react'
import { Link } from 'react-router-dom';

const InstrumentLink = ({instrument}) => {
    return (
        <div className="instrument-link">
            <Link to={`/instruments/${instrument.id}`} className="each-instrument-link" >
                <br/>
                {instrument.name} - ${instrument.price}
                <br/>
            </Link>
        </div>
    )
}

export default InstrumentLink
