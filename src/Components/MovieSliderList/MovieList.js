import {React, useEffect, useState} from 'react'
import PropTypes from "prop-types";
import './MovieList.scss'
import { SwiperSlide, Swiper } from "swiper/react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Tmdb, { category } from "../../Api/Tmdb";
import Api from "../../Api/apiConfig";
import MovieCard from "../MovieCard/MovieCard";


const MovieList = props => {
  const [itemMovie, setItemMovie] = useState([])

  useEffect(() => {
    const getListMovie = async() => {
      let response = null;
      const params = {}

      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await Tmdb.getMoviesList(props.type, { params });
            break;
          default:
            response = await Tmdb.getTvList(props.type, { params });
        }
      } else {
        response = await Tmdb.similar(props.category, props.id);
      }
      setItemMovie(response.results)
    }
    getListMovie();
  }, [])

  return (
    <div className="movie-list">
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={"auto"}
      >
        {itemMovie.map((item, i) => (
          <SwiperSlide key={i}>
           <MovieCard item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList