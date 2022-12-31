import Client from "./Client";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const Tmdb = {
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    return Client.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return Client.get(url, params);
  },
  getVideos: (cate, id) => {
    const url = category[cate] + "/" + id + "/videos";
    return Client.get(url, { params: {} });
  },
  search: (cate, params) => {
    const url = "search/" + category[cate];
    return Client.get(url, params);
  },
  detail: (cate, id, params) => {
    const url = category[cate] + "/" + id;
    return Client.get(url, params);
  },
  credits: (cate, id) => {
    const url = category[cate] + "/" + id + "/credits";
    return Client.get(url, { params: {} });
  },
  similar: (cate, id) => {
    const url = category[cate] + "/" + id + "/similar";
    return Client.get(url, { params: {} });
  },
};

export default Tmdb;