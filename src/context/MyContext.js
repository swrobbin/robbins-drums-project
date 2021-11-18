import React, { useState, useEffect } from 'react';


 const MyContext = React.createContext()
  
 const MyProvider = (props) => {
 
    const [instruments, setInstruments] = useState([])


    useEffect(() => {
        fetch('http://localhost:9292/instruments')
        .then(r => r.json())
        .then(data => {
            setInstruments(data)})
    }, []);

    const onDelete = (id) => {
        fetch(`http://localhost:9292/instruments/${id}`, {
            method: "DELETE"})
        const updatedInstruments = instruments.filter((r) => r.id !== parseInt(id))
        setInstruments(updatedInstruments)
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
            onDelete: onDelete, 
            addInstrument: addInstrument, 
            onUpdate: onUpdate
            }}>
            {props.children}
        </MyContext.Provider>
    )   

}
const MyConsumer = MyContext.Consumer
export { MyProvider, MyConsumer };
