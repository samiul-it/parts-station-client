import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../CheckOutForm/CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51L3PFqLnWlBIcUjg0M6Dln5CTgOSao87XdveG5za95ZimW10xjZt0GHDbKto3u9dgEZfZ1Rd0uPfr6yGWNGs6FgN005ZDQg8zF"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/order/${id}`;

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if(isLoading){
      return <Loading></Loading>
  }

//   console.log(url);

  return (
    <div>
      <p className="text-3xl text-red-400">Payment For Order No.: {id}</p>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title text-xl">{order.productName}</div>
          <div className="stat-value">${order.orderPrice / order.orderQty}</div>
        </div>

        <div className="stat">
          <div className="stat-title text-xl">Units</div>
          <div className="stat-value">x{order.orderQty}</div>
        </div>

        <div className="stat">
          <div className="stat-title text-xl">Total Amount</div>
          <div className="stat-value">${order.orderPrice}</div>
        </div>
      </div>

      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body  ">
          <h2 className="card-title">Pay here</h2>
          <Elements stripe={stripePromise}>
            <CheckOutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
