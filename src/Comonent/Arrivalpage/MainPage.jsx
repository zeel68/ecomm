import React, { useContext } from 'react';
import Categoryitem from '../Category_Page2/Categoryitem';
import { useParams } from 'react-router-dom';
import { Context } from '../../context/Context';
import Breadcrum from '../breadcrums/Breadcrum';

const MainPage = () => {
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
    );
};

export default MainPage;
