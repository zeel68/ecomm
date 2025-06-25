import React, { useContext } from 'react';
import Productdisplay from './Productdisplay';
import Breadcrum from '../breadcrums/Breadcrum';
import { Context } from '../../context/Context';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { Products } = useContext(Context);
  const { ProductId } = useParams();

  const product = Products.find((p) => p.id === Number(ProductId)); 

  return (
    <>
      <Breadcrum product={product} />
      <Productdisplay product={product} />
    </>
  );
};

export default Product;
