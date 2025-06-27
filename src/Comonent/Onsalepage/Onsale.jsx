import React, { useContext } from 'react'
import Breadcrum from '../breadcrums/Breadcrum'
import Categoryitem from '../Category_Page2/Categoryitem'


const Onsale = () => {

    return (
        <>
            <Breadcrum current="OnSale" />
            <Categoryitem category="onsale" />
        </>
    )
}

export default Onsale