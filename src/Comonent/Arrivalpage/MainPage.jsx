import React, { useContext } from 'react';
import Breadcrum from '../breadcrums/Breadcrum';
import Categoryitem from '../Category_Page2/Categoryitem';
import { useParams } from 'react-router-dom';
import { Context } from '../../context/Context';

const MainPage = () => {
    const { Products } = useContext(Context);
    const { ProductId } = useParams();

    const product = Products.find((e) => e.id === Number(ProductId));

    return (
        <>
            <Breadcrum product={product} />
            <Categoryitem />
        </>
    );
};

export default MainPage;
