import { useState, useEffect } from "react";

const useOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://thawing-savannah-63615.herokuapp.com/allorders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return [orders, setOrders];
};

export default useOrders;
