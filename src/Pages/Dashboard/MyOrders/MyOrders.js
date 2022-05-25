import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import auth from "./../../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {

  const navigate =useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const url = `http://localhost:5000/myorders/${user.email}`;

  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        // console.log(res)
        if(res.status==403){
          toast.error("Unauthorized Access,Pleas Login Again");
          localStorage.removeItem('accessToken');
          
          signOut(auth);
          navigate('/login');
        }
        return res.json()})
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
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((myOrder, index) => (
              <tr key={myOrder._id}>
                <th>{index + 1}</th>
                <td>{myOrder.id}</td>
                <td>{myOrder.productName}</td>
                <td>{myOrder.orderQty}</td>
                <td>{myOrder.address}</td>
                <td>{myOrder.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
