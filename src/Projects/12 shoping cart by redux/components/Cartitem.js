import React from "react";
import { useDispatch } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { remove } from "../redux/slices/cartSlice";


const Cartitem = ({ item }) => {
  const dispatch = useDispatch();

  const removeItem = (item) => {
    console.log('itemRemoved', item)
    dispatch(remove(item))

  }


  return (
    <div className="p-5 border-2 rounded-xl hover:shadow-gray-300 hover:shadow-xl flex flex-col gap-5  w-[70%]">
      <p className="font-bold">{item.title.substr(0, 10)}...</p>
      <p className="text-sm">{item.description.substr(0, 100)}...</p>
      <div>
        <img src={item.image} className="w-[100px] h-[100px]" />
      </div>
      <p>{item.price}</p>

      <MdDeleteOutline onClick={() => removeItem(item.id)} />
    </div>

  );
};

export default Cartitem;
