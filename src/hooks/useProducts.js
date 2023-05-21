import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);

  useEffect(() => {
    fetch("https://parts-station-server.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setProductsLoading(false);
       
      });
  }, []);

  return [products, setProducts,productsLoading];
};

export default useProducts;
