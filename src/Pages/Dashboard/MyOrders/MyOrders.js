import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import auth from "./../../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';

const MyOrders = () => {

  const navigate =useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const url = `https://thawing-savannah-63615.herokuapp.com/myorders/${user.email}`;

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

              <th>Product Name</th>
              <th>Quantity</th>
              <th>Shipping Address</th>
              <th>Total Price</th>
              
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((myOrder, index) => (
              <tr key={myOrder._id}>
                <th>{index + 1}</th>

                <td>{myOrder.productName}</td>
                <td>{myOrder.orderQty}</td>
                <td>{myOrder.address}</td>
                <td className="text-2xl text-red-600">${myOrder.orderPrice}</td>
                
                <td>
                  {myOrder.paid ? (
                    <button className="btn text-red-400 btn-disabled	">PAID</button>
                  ) : (
                    <Link to={`/dashboard/payment/${myOrder._id}`}>
                      <button className="btn btn-xs">Pay</button>
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
