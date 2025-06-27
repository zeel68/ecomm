import React, { useContext } from 'react'
import Breadcrum from '../breadcrums/Breadcrum'
import Categoryitem from '../Category_Page2/Categoryitem'


const Onsale = () => {
    const path = [
        { name: "Home", link: "/" },
    ];
    return (
        <>
            <Breadcrum path={path} current="OnSale" />
            <Categoryitem category="onsale" />
        </>
    )
}

export default Onsale