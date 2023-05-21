import React from "react";
import useProducts from "./../../../hooks/useProducts";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ManageAllProducts = () => {
  const [products, setProducts] = useProducts([]);

  const handleDeleteItem = (id) => {
    const confirmDelete = window.confirm("Are you Sure?");
    if (confirmDelete) {
      const url = `https://parts-station-server.onrender.com/delete-product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.info("Item Deleted");
          const remaining = products.filter((item) => item._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <div>
      <p>Total Products {products.length}</p>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#SL</th>

              <th>Product Name</th>
              <th>Description</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Min Order</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <th>{index + 1}</th>

                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td>{product.stock}</td>
                <td className="text-2xl text-red-600">${product.price}</td>

                <td>{product.minOrder}</td>

                <td>
                  <button
                    onClick={() => handleDeleteItem(product._id)}
                    className="btn btn-square btn-outline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllProducts;
