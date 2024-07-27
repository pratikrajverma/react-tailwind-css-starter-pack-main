import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cartitem from "../components/Cartitem";

const Cart = () => {
  const navigation = useNavigate();

  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
      setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  },[cart])

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex mt-20 gap-10 w-11/12 justify-between   mx-auto">
          <div className="flex flex-col ">
            {cart.map((item, index) => (
              <Cartitem key={index} item={item}  itemIndex={index} />
            ))}
          </div>

          <div className=" w-[40%]   flex  flex-col items-start gap-5 fixed right-0">
            <div>
              <h3>Your cart</h3>
              <h1>Summary</h1>

            </div>

            <p>
              <span>
                Total Items: {cart.length}
              </span>
            </p>

            <div>
              <p>Total Ammount : {totalAmount}</p>
              <button>checkout</button>
            </div>


          </div>
        </div>
      ) : (
        <div>
          <p>No Items in cart</p>

          <button onClick={() => navigation("/")}>Shop Now</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
