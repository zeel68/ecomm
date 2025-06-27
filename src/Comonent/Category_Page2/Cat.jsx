import React, { useContext } from 'react'
import Breadcrum from '../breadcrums/Breadcrum'
import Categoryitem from './Categoryitem'


const Cat = () => {

    return (
        <>
            <Breadcrum current="shop" />
            <Categoryitem category="shop" />
        </>
    )
}

export default Cat