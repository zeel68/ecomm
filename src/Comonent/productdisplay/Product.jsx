import React, { useContext } from 'react';
import Productdisplay from './Productdisplay';
import Breadcrum from '../breadcrums/Breadcrum';
import { Context } from '../../context/Context';
import { useParams } from 'react-router-dom';
import Reviews from './Reviews';
import Related from './Related';

const Product = () => {
  const { Products } = useContext(Context);
  const { ProductId } = useParams();
  const product = Products.find((e) => e.id === Number(ProductId));

  const path = [
    { name: "Home", link: "/" },
    { name: product?.category || "Category", link: `/${product?.category}` },
  ];

  return (
    <>
      {product && (
        <Breadcrum path={path} current={product.title} />
      )}
      <Productdisplay product={product} />
      <Reviews />
      <Related category="related" />
    </>
  );
};

export default Product;
