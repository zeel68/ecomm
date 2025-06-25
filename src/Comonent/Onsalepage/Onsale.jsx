import React, { useContext } from 'react'
import Breadcrum from '../breadcrums/Breadcrum'
import Categoryitem from '../Category_Page2/Categoryitem'
import { useParams } from 'react-router-dom';
import { Context } from '../../context/Context';

const Onsale = () => {
    const { Products } = useContext(Context);
    const { ProductId } = useParams();
    const product = Products.find((e) => e.id === Number(ProductId));
    return (
        <>
            {product && (
                <Breadcrum path={["Home", product.category]} current={product.title} />
            )}
            <Categoryitem category="onsale" />
        </>
    )
}

export default Onsale