import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { MyConsumer } from '../context/MyContext';

const BrandForm = () => {
    let navigate = useNavigate();
    const [newBrand, setNewBrand] = useState({
        name: '',
    })


    return (
        <MyConsumer>
            {context => {

                const handleChange = (e) => {
                    setNewBrand({
                    ...newBrand, [e.target.name]: e.target.value
                    })
                }

                const handleSubmit = (e) => {
                    e.preventDefault()
                    context.addBrand(newBrand)
                    navigate('/brands') 
                }    

                return (
                    <div className="new-brand-form">
                        <h2>Add New Brand below:</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Brand Name:</label>
                            <br/>
                            <input type="text" onChange={handleChange} name="name" className="input"/>
                            <input  className='button' type="submit" />
                        </form>
                    </div>
                )
            }}
        </MyConsumer>
    )

}    

    

export default BrandForm
