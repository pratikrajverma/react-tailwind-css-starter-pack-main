import React from "react";
import { Main } from "./Main";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
 
import { Toaster } from "react-hot-toast";

const Wrapper = () => {
  return (
    <div>
      <Provider store={store}>
 

          <Toaster/>
          <Main />
 
      </Provider>
    </div>
  );
};

export default Wrapper;
