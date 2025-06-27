import React, { useContext } from 'react';

import Breadcrum from '../breadcrums/Breadcrum';
import Categoryitem from '../Category_Page2/Categoryitem';

const Bestdeals = () => {
    const path = [
        { name: "Home", link: "/" },
    ];
    return (
        <>
            <Breadcrum path={path} current="Best Deals" />
            <Categoryitem category="onsale" />
        </>
    )
}

export default Bestdeals