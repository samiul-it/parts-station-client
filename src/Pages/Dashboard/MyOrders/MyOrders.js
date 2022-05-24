import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import auth from './../../../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const MyOrders = () => {
  const [user, loading, error] = useAuthState(auth);

  const url = `http://localhost:5000/myorders/${user.email}`;


  const [myOrders,setMyOrders]=useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  









  return (
    <div>
      <p>My Orders {myOrders.length}</p>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#SL</th>
              <th>OrderID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Shipping Address</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((myOrder,index) => (
                <tr key={myOrder._id}>
                  <th>{index+1}</th>
                  <td>{myOrder.id}</td>
                  <td>{myOrder.productName}</td>
                  <td>{myOrder.orderQty}</td>
                  <td>{myOrder.address}</td>
                  
                </tr>
             
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
