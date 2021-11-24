import React from 'react'
import { MyConsumer } from '../context/MyContext';
import InstrumentLink from './InstrumentLink';





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
                        <p>All Instruments</p>
                            {list}


                            
                    </div>
                )


            }}

        </MyConsumer>
    )

    
}

export default Instruments
