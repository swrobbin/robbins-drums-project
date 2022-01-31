import React, {useState} from 'react'
import { MyConsumer } from '../context/MyContext'
import { useParams, useNavigate } from "react-router-dom"

const InstrumentEditForm = () => {
    let { id } = useParams();
    let navigate = useNavigate();
    const [editedInstrument, setEditedInstrument] = useState({
        name: '',
        price: '',
        description: '',
        category: ''
    })

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
                fetch(`http://localhost:9292/instruments/${editedInstrument.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"},
                    body: JSON.stringify(editedInstrument)    
                })
                .then(r => r.json())
                .then(data => {
                    context.onUpdate(data)
                    navigate(`/instruments/${editedInstrument.id}`)
                })
                
            }

            return (
                <div className="edit-instrument-form">
                        <h2>Edit Instrument below:</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Instrument Name:</label>
                            <br/>
                            <input type="text" value= {editedInstrument.name} onChange={handleChange} name="name" className="input"/>
                            <br/>
                            <br/>
                            <label>Price:</label>
                            <br/>
                            <input type="text"  value= {editedInstrument.price} onChange={handleChange} name="price" className="input"/>
                            <br/>
                            <br/>
                            <label>Description:</label>
                            <br/>
                            <textarea type="text" value= {editedInstrument.description} onChange={handleChange} name="description" className="input"/>
                            <br/>
                            <br/>
                            <select name="category" value= {editedInstrument.category} onChange={handleChange} id="category">
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
