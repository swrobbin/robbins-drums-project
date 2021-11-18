import React from 'react'
import { MyConsumer } from '../context/MyContext';
import InstrumentLink from './InstrumentLink';
import NewButton from './NewButton';




const Instruments = () => {
   
    return  (
        <MyConsumer>
            {context => {
                    
                    // console.log(context.instruments, 'FROM CONTEXT')
                    const list = context.instruments.map((instrument) => {
                           return (
                            <div className="instrument-link">
                            <InstrumentLink key={instrument.id} instrument={instrument}/>
                            </div>
                           ) 
                        })

                return (
                    <div className="instruments" >
                        <p>Instruments</p>
                            {list}


                            <NewButton/>
                    </div>
                )


            }}

        </MyConsumer>
    )

    
}

export default Instruments
