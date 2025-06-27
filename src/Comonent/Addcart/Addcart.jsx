import React from 'react'
import Breadcrum from '../breadcrums/Breadcrum'
import Addcartitem from './Addcartitem'

const Addcart = () => {
    const path = [
        { name: "Home", link: "/" },
    ];
    return (
        <>
            <Breadcrum path={path} current="Cart" />
            <Addcartitem />

        </>
    )
}

export default Addcart