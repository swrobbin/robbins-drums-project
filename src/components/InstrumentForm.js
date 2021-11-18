import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { MyConsumer } from '../context/MyContext';

const InstrumentForm = () => {
    let navigate = useNavigate();
    const [newInstrument, setNewInstrument] = useState({
        name: '',
        price: '',
        description: '',
        category: ''
    })


    return (
        <MyConsumer>
            {context => {

                const handleChange = (e) => {
                    setNewInstrument({
                    ...newInstrument, [e.target.name]: e.target.value
                    })
                }

                const handleSubmit = (e) => {
                    e.preventDefault()
                    context.addInstrument(newInstrument)
                    navigate('/instruments') 
                }    

                return (
                    <div className="new-instrument-form">
                        <h2>Add New Instrument below:</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Instrument Name:</label>
                            <br/>
                            <input type="text" onChange={handleChange} name="name" className="input"/>
                            <br/>
                            <br/>
                            <label>Price:</label>
                            <br/>
                            <input type="text" onChange={handleChange} name="price" className="input"/>
                            <br/>
                            <br/>
                            <label>Description:</label>
                            <br/>
                            <textarea type="text" onChange={handleChange} name="description" className="input"/>
                            <br/>
                            <br/>
                            <select name="category" onChange={handleChange} id="category">
                                <option value="snare">Snare Drum</option>
                                <option value="drumset">Drum Set</option>
                                <option value="bass drum">Bass Drum</option>
                                <option value="tom">Tom</option>
                                <option value="cymbal">Cymbal</option>
                                <option value="other">Other</option>
                            </select>
                            <br/>
                            <br/>
                            <input  className='button' type="submit" />
                        </form>
                        
                    </div>
)
            }
        }
        </MyConsumer>
    )

}    

    

export default InstrumentForm
