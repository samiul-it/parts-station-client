import React from 'react';
import useOrders from './../../../hooks/useOrders';
import useAdmin from './../../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../Firebase/firebase.init';
import Loading from './../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import { useState } from 'react';


const ManageAllOrders = () => {
    const [orders,setOrders,orderLoading]=useOrders();
    const [deleteLoading,setDeleteLoading]=useState(true);
    const [cancelLoading,setCancelLoading]=useState(true);
    if(orderLoading){
      return <Loading></Loading>;
    }
    // if(deleteLoading){
    //   return <Loading></Loading>;
    // }
    // if(cancelLoading){
    //   return <Loading></Loading>;
    // }

    const handleDeliverOrder = (id) => {
      fetch(`https://parts-station-server.onrender.com/deliver-order/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Order Delivered")
          setDeleteLoading(true);
        });
    };


    const handleCancelOrder=(id)=>{
      fetch(`https://parts-station-server.onrender.com/cancel-order/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Order Cancelled")
          setCancelLoading(false);
        });

    }

    

    return (
      <div>
        <p>Manage All Orders {orders.length}</p>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#SL</th>

                <th>Product Name</th>
                <th>Order By</th>
                <th>QTY</th>
                <th>Total Price</th>
                <th>Payment Status</th>
                <th>Action</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <th>{index + 1}</th>

                  <td>{order.productName}</td>
                  <td>{order.userEmail}</td>
                  <td>{order.orderQty}</td>
                  <td className="text-2xl text-red-600">${order.orderPrice}</td>
                  <td className="text-2xl text-red-800">
                    {order.paid ? "PAID" : "UNPAID"}
                  </td>

                  <td>
                    {order.paid && order.status == "" ? (
                      <button
                        onClick={() => handleDeliverOrder(order._id)}
                        className="btn btn-sm"
                      >
                        Deliver
                      </button>
                    ) : (
                      <button className="btn btn-disabled btn-sm">
                        Deliver
                      </button>
                    )}
                  </td>
                  <td>{order.paid || order.status=="canceled"? " ": <button onClick={()=>handleCancelOrder(order._id)} className='btn btn-sm bg-red-700'>Cancel</button>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageAllOrders;