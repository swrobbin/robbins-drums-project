import React from 'react'
import NewButton from './NewButton'
import { MyConsumer } from '../context/MyContext'
import {useParams} from "react-router-dom"
import BrandInstrumentLink from './BrandInstrumentLink'

const Brand = () => {
    let { id } = useParams();
 
  
    return (
        <MyConsumer>
            {context => {
                
                const selectedBrand = context.brands.find(brand => brand.id === parseInt(id))
                const brandInstruments = selectedBrand.instruments.map(instrument => {
                    return (

                        <div>
                            <BrandInstrumentLink instrument={instrument} brand={selectedBrand}/>
                        </div>
                    )
                })

                
                if (context.brands.length > 0) {
                    return (
                        <div>
                            <h2>Brand:</h2>
                            <h1>{selectedBrand.name}</h1>

                            {brandInstruments}
                            <NewButton brand={selectedBrand}/>
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

export default Brand
