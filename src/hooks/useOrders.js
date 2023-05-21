import { useState, useEffect } from "react";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [orderLoading,setOrderLoading]=useState(true);

  useEffect(() => {
    fetch("https://parts-station-server.onrender.com/allorders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {setOrders(data);
      setOrderLoading(false)});
  }, []);

  return [orders, setOrders,orderLoading];
};

export default useOrders;
