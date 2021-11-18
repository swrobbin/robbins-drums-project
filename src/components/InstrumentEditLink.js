import React from 'react';
import { Link } from 'react-router-dom';


const InstrumentEditLink = ({instrument}) => {
    return (
            <div className="instrument-edit-link">
            <br/>
                <Link to={`/instruments/${instrument.id}/edit`}>
                   <button className='button'>Edit Instrument</button> 
                </Link>
            <br/>
        </div>
    )
}

export default InstrumentEditLink
