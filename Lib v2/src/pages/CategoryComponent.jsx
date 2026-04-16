import React from 'react';
import {Outlet} from 'react-router-dom';

const CategoryComponent = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default CategoryComponent;