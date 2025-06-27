import React from 'react'
import Breadcrum from '../breadcrums/Breadcrum'
import Addcartitem from './Addcartitem'

const Addcart = () => {
    return (
        <>
            <Breadcrum current="Cart" />
            <Addcartitem />

        </>
    )
}

export default Addcart