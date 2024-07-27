import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  const [cartlength, setCartlength] = useState(0);

  useEffect(() => {
    setCartlength(cart.length);
  }, [cart]);

  return (
    <div>
      <div className="flex fixed w-screen top-0 shadow-md justify-around items-center bg-green-200 py-2 overflow-y-hidden h-10">
        <NavLink to="/">
          {" "}
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            className="p-5"
            width={100}
          />
        </NavLink>

        <div className="flex justify-center gap-5 items-center">
          <NavLink to="/">
            <p className="font-bold hover:bg-green-400 p-1 px-3 rounded-md duration-300">
              Home
            </p>
          </NavLink>

          <div className="relative">
            <NavLink to="/cart">
              <FaCartShopping className="text-2xl" />
            {cartlength > 0 && (
              <p className="bg-green-400 rounded-full flex justify-center items-center
                     h-5 w-5 font-semibold right-2  text-white absolute  top-3 animate-bounce">
                {cartlength}
              </p>
            )}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
