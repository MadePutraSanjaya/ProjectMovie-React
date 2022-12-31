import React from "react";

import { useParams } from "react-router";

import BannerPages from "../Components/Banner-Pages/Banner-Pages";

import { category as cate } from "../Api/Tmdb";
import MovieGrid from "../Components/MovieGrid/MovieGrid";

const Catalog = () => {
  const { category } = useParams();

  return (
    <>
      <BannerPages>
        {category === cate.movie ? "Movies" : "Tv Series"}
      </BannerPages>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
