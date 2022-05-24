import React from 'react';
import { useParams } from 'react-router-dom';

const PurchaseProduct = () => {
    const {id}=useParams();
    return (
        <div>
            <p>Purchase Product Page</p>
        </div>
    );
};

export default PurchaseProduct;