import React from 'react'

import Itemprop from './itemprop';
import { useProduct } from './Productcontext';

const Items = () => {
    const { products } = useProduct();
    return (
        <>
            <div className="main">
                <div className="p-[15px] sm:p-6 max-w-screen-xl mx-auto">
                    <div className="inner-main">
                        <div className="flex flex-wrap grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                            {products.map(product => (
                                <Itemprop
                                    key={product.id}
                                    img={product.img}
                                    info={product.info}
                                    name={product.name}
                                    price={product.price}
                                    details={product.details}
                                    sales={product.sales}
                                    remaining={product.remaining}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Items