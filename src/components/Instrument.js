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
                            <h2>Model: {item.name}</h2>
                            <p>Price: {item.price}</p>
                            <p>Category: {item.category}</p>
                            <p>{item.description}</p>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
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
