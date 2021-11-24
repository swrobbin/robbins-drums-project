import React from 'react'
import { MyConsumer } from '../context/MyContext'
import BrandLink from './BrandLink'
import NewBrandButton from './NewBrandButton'

const Brands = () => {

    return  (
        <MyConsumer>
            {context => {
                    
                    
                    const list = context.brands.map((brand) => {
                           return (
                            <div className="brand-link">
                            <BrandLink key={brand.id} brand={brand}/>
                            </div>
                           ) 
                        })

                return (
                    <div className="brands" >
                        <h2>Brands</h2>
                            {list}
                            <br/>
                            <br/>
                            <NewBrandButton/>
                    </div>
                )


            }}

        </MyConsumer>
    )  
}

export default Brands
