import React, { useState, useEffect } from 'react';


 const MyContext = React.createContext()
 
 const MyProvider = (props) => {
    const [brands, setBrands] = useState([])
    const [instruments, setInstruments] = useState([])



    useEffect(() => {
        fetch('http://localhost:9292/instruments')
        .then(r => r.json())
        .then(data => {
            setInstruments(data)})
        
        fetch('http://localhost:9292/brands')
        .then(r => r.json())
        .then(data => {
            setBrands(data)})    
    }, []);

    const onDelete = (id) => {
        fetch(`http://localhost:9292/instruments/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"}   
        })
        .then(() => {
            const instrument = instruments.find((inst) => inst.id === parseInt(id))
            const brand = brands.find((b) => b.id === instrument.brand_id)
            let updatedBrandInstruments = brand.instruments.filter(i => i.id !== parseInt(id))
            let updatedBrand = {...brand, instruments: updatedBrandInstruments}
            const updatedBrands = brands.map((b) => b.id === brand.id ? updatedBrand : b)
            setBrands(updatedBrands)
            const updatedInstruments = instruments.filter((r) => r.id !== parseInt(id))
            setInstruments(updatedInstruments)
        })
    }

    const addInstrument = (newInstrument) => {
        fetch("http://localhost:9292/instruments", {
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newInstrument)
                })
                .then(r => r.json())
                .then(data => {
                setInstruments([...instruments, data])
                let brand = brands.find((b) => b.id === parseInt(newInstrument.brand_id))
                let newBrand = {...brand, instruments: [...brand.instruments, data]}
                let newBrands = brands.map((b) => b.id === parseInt(newInstrument.brand_id) ? newBrand : b)
                setBrands(newBrands)   
            }
        )
    }
    const addBrand = (newBrand) => {
        fetch("http://localhost:9292/brands", {
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newBrand)
                })
                .then(r => r.json())
                .then(data => {
                setBrands([...brands, data])
                   
            }
        )
    }

    const onUpdate = (editedInstrument) => {
        
        const editedInstruments = instruments;
        const updatedInstruments = editedInstruments.map((instrument) => {
            if (instrument.id !== editedInstrument.id) {
                return instrument 
            } else {
                return editedInstrument
            }
        })
        setInstruments(updatedInstruments)
    }

    return (
        <MyContext.Provider value={{
            instruments: instruments,
            brands: brands, 
            onDelete: onDelete, 
            addInstrument: addInstrument, 
            onUpdate: onUpdate, 
            addBrand: addBrand
            }}>
            {props.children}
        </MyContext.Provider>
    )   

}
const MyConsumer = MyContext.Consumer
export { MyProvider, MyConsumer };
