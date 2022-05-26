import React from 'react';
import { useRef } from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const productNameRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();
    const stockRef = useRef();
    const priceRef = useRef();
    const minOrderRef = useRef();

    const handleFormSubmit=(e)=>{

        e.preventDefault();

        const productName=productNameRef.current.value;
        const img=imageRef.current.value;
        const stock=stockRef.current.value;
        const description=descriptionRef.current.value;
        const price=priceRef.current.value;
        const minOrder=minOrderRef.current.value;

        const product={
            productName,
            img,
            stock,
            description,
            price,
            minOrder
        }

        console.log(product);


        const url = "https://thawing-savannah-63615.herokuapp.com/products";
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(product),
        })
          .then((res) => res.json())
          .then((result) => console.log(result))
          .then(toast.success("Product added Confirmed!"));
    }




    return (
      <div>
        <div className="hero  bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Name</span>
                    </label>
                    <input
                      ref={productNameRef}
                      type="text"
                      placeholder="Please Enter Product name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <input
                      ref={descriptionRef}
                      type="text"
                      placeholder="Please Enter Description"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Image Link</span>
                    </label>
                    <input
                      ref={imageRef}
                      type="text"
                      placeholder="Please Enter Image Link"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Stock
                      </span>
                    </label>
                    <input
                      ref={stockRef}
                      type="text"
                      placeholder="Please Enter Current Stock"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      ref={priceRef}
                      type="text"
                      required
                      placeholder="Please Enter Product Price"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Min Order QTY</span>
                    </label>
                    <input
                      ref={minOrderRef}
                      type="text"
                      required
                      placeholder="Please Enter Minimum Order Quantity"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddProduct;
