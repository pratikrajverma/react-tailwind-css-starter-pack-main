import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  // Initializing state variables.
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [brightBtn, setBrightBtn] = useState(true);

  const fetchBlogsdata = async (page = 1, tag = null, category) => {
    setLoading(true);

    let url = `${baseUrl}?page=${page}`;

    if (tag) {
      url += `&tag=${tag}`;
    }

    if (category) {
      url += `&category=${category}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("data", data);

      setPage(data.page);
      setTotalPages(data.totalPages);
      setPosts(data.posts);
    } catch (err) {
      console.error(err);
      setPosts([]);
      setPage(1);
      setTotalPages(null);
    }
    setLoading(false);
  };

  //...........................handle page change ( next and previious button ) ...............................

  const handlePageChange = (page) => {
    setPage(page);
    fetchBlogsdata(page);
  };

  //...........................maing central object for passing data to components...............................

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    handlePageChange,
    fetchBlogsdata,
    brightBtn,
    setBrightBtn,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
