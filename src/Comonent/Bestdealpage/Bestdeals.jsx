import React, { useContext } from 'react';

import Breadcrum from '../breadcrums/Breadcrum';
import Categoryitem from '../Category_Page2/Categoryitem';

const Bestdeals = () => {
   
    return (
        <>
            <Breadcrum current="Best Deals" />
            <Categoryitem category="onsale" />
        </>
    )
}

export default Bestdeals