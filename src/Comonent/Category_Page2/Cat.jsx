import React, { useContext } from 'react'
import Breadcrum from '../breadcrums/Breadcrum'
import Categoryitem from './Categoryitem'
import { Context } from '../../context/Context';
import { useParams } from 'react-router-dom';

const Cat = () => {
    const { Products } = useContext(Context);
    const { ProductId } = useParams();
    const product = Products.find((e) => e.id === Number(ProductId));
    return (
        <>
            {product && (
                <Breadcrum path={["Home", product.category]} current={product.title} />
            )}

            <Categoryitem category="shop" />
        </>
    )
}

export default Cat