import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import Movie from "../Pages/Movie";
import Detail from "../Pages/Detail/Detail";

const Routing = () => {
  return (
    <Routes>
      <Route path="/:category/search/:keyword" element={<Movie />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category" element={<Movie />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
};

export default Routing;
