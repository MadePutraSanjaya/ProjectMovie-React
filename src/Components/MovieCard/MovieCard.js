import React from 'react'
import './MovieCard.scss'
import { Link } from "react-router-dom";
import 'boxicons'
import { BsFillPlayFill } from "react-icons/bs";

import Button from "../Button/Button";

import { category, tvType } from "../../Api/Tmdb";
import Api from "../../Api/apiConfig";


function MovieCard(props) {
    const item = props.item
    const linkMovie = '/' + category[props.category] + '/' + item.id
    const linkTv = "/" + tvType[props.tvType] + "/" + item.id;

    const bg = Api.w500Image(item.poster_path || item.backdrop_path)

  return (
    <Link to={linkMovie || linkTv}>
      <div
        className="movie-card"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <Button>
          <BsFillPlayFill />
        </Button>
      </div>
      <h3> {item.title || item.name} </h3>
    </Link>
  );
}

export default MovieCard