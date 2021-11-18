import React from 'react'
import { MyConsumer } from '../context/MyContext'
import {useParams, useNavigate } from "react-router-dom"
import InstrumentEditLink from './InstrumentEditLink'


const Instrument = (props) => {

    let { id } = useParams();
    let navigate = useNavigate();
 
  
    return (
        <MyConsumer>
            {context => {
                const handleDelete = (e) => {
                    context.onDelete(e.target.id) 
                    navigate('/instruments')   
                }

                const item = context.instruments.find(instrument => instrument.id === parseInt(id))

                
                if (context.instruments.length > 0) {
                    return (
                        <div>
                            <p>instruuuu</p>
                            <h2>Model: {item.name}</h2>
                            {/* <h3>Brand: {item.brand.name}</h3> */}
                            <p>Price: {item.price}</p>
                            <p>{item.description}</p>
                            <button id={item.id} onClick={handleDelete}>Delete Instrument</button>
                            <InstrumentEditLink instrument={item}/>
                        </div>
                        
                    )
                } else {
                    return (
                        <h3>Loading...</h3>
                    )
                }
                


            }}
        </MyConsumer>
    )
}

export default Instrument
