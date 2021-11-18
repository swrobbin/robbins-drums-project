import React, {useState, useEffect} from 'react'
import { MyConsumer } from '../context/MyContext'
import { useParams } from "react-router-dom"

const InstrumentEditForm = () => {
    let { id } = useParams();
    const [editedInstrument, setEditedInstrument] = useState({
        name: '',
        price: '',
        description: '',
        category: ''
    })

    useEffect(() => {

    }, [])
    
    



    return (
        <MyConsumer>

        {context => {
            if (editedInstrument.name === ''){
                const instrumentToEdit = context.instruments.find((instrument) => instrument.id === parseInt(id))
                setEditedInstrument(instrumentToEdit)
             }

            const handleChange = (e) => {
                setEditedInstrument({
                ...editedInstrument, [e.target.name]: e.target.value
                })
            }

            const handleSubmit = (e) => {
                e.preventDefault()
                context.onUpdate(editedInstrument)
            }

            return (
                <div className="edit-instrument-form">
                        <h2>Edit Instrument below:</h2>
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


        }}

        </MyConsumer>

    )

    
}

export default InstrumentEditForm
