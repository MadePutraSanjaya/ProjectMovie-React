import React from 'react'
import Slider from "../Components/Slider/Slider";
import { Link } from "react-router-dom";
import { OutlineButton } from "../Components/Button/Button";
import MoveList from "../Components/MovieSliderList/MovieList";
import { category, movieType, tvType } from "../Api/Tmdb";

function Home() {
  return (
    <div>
      <Slider />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Now Showing</h2>
            <Link to="/movie">
              <OutlineButton className="small">See All</OutlineButton>
            </Link>
          </div>
          <MoveList category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>New Trailers</h2>
            <Link to="/movie">
              <OutlineButton className="small">See All</OutlineButton>
            </Link>
          </div>
          <MoveList category={category.tv} type={tvType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated</h2>
            <Link to="/movie">
              <OutlineButton className="small">See All</OutlineButton>
            </Link>
          </div>
          <MoveList category={category.movie} type={movieType.top_rated} />
        </div>
      </div>
    </div>
  );
}

export default Home