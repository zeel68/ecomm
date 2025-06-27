import React, { useContext } from 'react';
import Categoryitem from '../Category_Page2/Categoryitem';
import Breadcrum from '../breadcrums/Breadcrum';

const MainPage = () => {
   

    return (
        <>
            <Breadcrum current="Arrival" />
            <Categoryitem category="shop" />
        </>
    );
};

export default MainPage;
