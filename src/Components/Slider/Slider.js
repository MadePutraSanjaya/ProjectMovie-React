import React, { useState, useEffect, useRef } from "react";
import Tmdb, { category, movieType } from "../../Api/Tmdb";
import Api from "../../Api/apiConfig";
import "./Slider.scss";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router";
import Button, { OutlineButton } from "../Button/Button";
import Modal, { ModalContent } from "../Modal/Modal";

const MainSlide = () => {
  SwiperCore.use([Autoplay]);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await Tmdb.getMoviesList(movieType.popular, {
          params,
        });
        setMovie(response.results.slice(1, 4));
        console.log(response);
      } catch (e) {
        console.log(e.message);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="main-slider">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {movie.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <Slider item={item} className={`${isActive ? "active" : ""}`} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {movie.map((item, i) => (
        <Trailer key={i} item={item} />
      ))}
    </div>
  );
};

const Slider = (props) => {
  const history = useNavigate();
  const item = props.item;
  const bg = Api.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  const setModalVideos = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);
    const video = await Tmdb.getVideos(category.movie, item.id);

    if (video.results.length > 0) {
      const videoSrc = "https://www.youtube.com/embed/" + video.results[0].key;
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videoSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML = "No Trailer Available";
    }

    modal.classList.toggle("active");
  };

  return (
    <div
      className={`slider__header ${props.className}`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="slider__header__content container">
        <div className="slider__header__content__top">
          <h2 className="title">{item.title}</h2>
          <div className="description">{item.overview}</div>
          <div className="button-slider">
            <Button onClick={() => history("/movie/" + item.id)}>
              Watch Now
            </Button>
            <OutlineButton onClick={setModalVideos}>
              Watch Trailer
            </OutlineButton>
          </div>
        </div>
        <div className="slider__header__content__poster">
          <img src={Api.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

const Trailer = (props) => {
  const item = props.item;

  const iframe = useRef(null);

  const removeClose = () => iframe.current.setAttribute("src", "");

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent removeClose={removeClose}>
        <iframe
          ref={iframe}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default MainSlide;
