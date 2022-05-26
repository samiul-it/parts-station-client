import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProductsDetail from "../../hooks/useProductsDetail";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect } from "react";
import auth from "./../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const PurchaseProduct = () => {
  const { id } = useParams();

  const [user, loading, error] = useAuthState(auth);

  const [productDetail] = useProductsDetail(id);

  const { img, productName, price, description, stock, minOrder } =
    productDetail;
  const [currentStock, setCurrentStock] = useState(null);

  const [totalPrice,setTotalPrice]=useState(0);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data)
    const userEmail = user.email;

    const orderQty = parseInt(data.order);
    const orderPrice = parseInt(orderQty * price);
    console.log("OrderPRice",orderPrice);
    
    setTotalPrice(orderPrice);
    
    console.log("Total Price",totalPrice);
    const stockUpdate = currentStock - orderQty;
    const status="";

    const orderDetails = {
      id,
      productName,
      address: data.address,
      phone: data.phone,
      orderQty,
      userEmail,
      orderPrice,
      status,
    };

    setCurrentStock(stockUpdate);

    const url = "https://thawing-savannah-63615.herokuapp.com/orders";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .then(toast.success("Order Confirmed!"));
  };

  useEffect(() => {
    setCurrentStock(stock);
    
  }, [productDetail, stock]);

  return (
    <div>
      <div className="grid lg:grid-cols-2 my-10 justify-center mx-10 mb-10">
        <div className="card w-80 bg-base-100 shadow-xl m-8">
          <figure>
            <img className="w-64 h-48" src={img} alt="product-img" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{productName}</h2>
            <p>Technology:{description}</p>
            <p>Stock:{currentStock} Pcs</p>
            <p>Minimum Order:{minOrder} Pcs</p>
            <h1 className="text-xl text-red-400">
              $ {price} <small>/per unit</small>
            </h1>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <span className="text-4xl text-orange-800">
              {user?.displayName}
            </span>
            <input
              className="input input-bordered input-primary w-full max-w-xs"
              type="text"
              value={user?.email}
              readOnly
            />
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="label">
                <span className="label-text">Please Enter Your Address</span>
              </label>
              <input
                className="input input-bordered input-primary w-full max-w-xs"
                type="text"
                {...register("address", {})}
              />

              <label className="label">
                <span className="label-text">Please Enter Phone Number</span>
              </label>
              <input
                className="input input-bordered input-primary w-full max-w-xs"
                type="number"
                {...register("phone", {})}
              />

              <label className="label">
                <span className="label-text">Please Enter Order Quantity</span>
              </label>
              <input
                className="input input-bordered input-primary w-full max-w-xs"
                type="number"
                {...register("order", {
                  required: true,
                  min: minOrder,
                  max: currentStock,
                })}
              />
              <br />

              {errors.order && errors.order.type === "min" && (
                <span className="text-red-800">
                  Minumum Order {minOrder} Pcs
                </span>
              )}
              {errors.order && errors.order.type === "max" && (
                <span className="text-red-800">
                  Max Stock {currentStock} Pcs
                </span>
              )}
              <br />

              <span className="text-4xl text-green-500">
                Total Payment : $ {totalPrice}
              </span>
              <br />

              <button className="btn btn-error">Order</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseProduct;
