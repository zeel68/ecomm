import React from 'react'

import Section1 from '../Comonent/Hero/Section1'
import Navbar from '../Comonent/navbar/Navbar'
import Brand from '../Comonent/Brand/Brand'
import Top from '../Comonent/Topselling/Top'
import Style from '../Comonent/style/Style'
import Customer from '../Comonent/Customer/Customer'
import Footer from '../Comonent/Footer/Footer'
import Cart from '../Comonent/Cart/Cart'

const Landing = () => {
    return (
        <>
            <Section1 />
            <Brand />
            <Cart/>
            <Top />
            <Style />
            <Customer />
        </>
    )
}

export default Landing