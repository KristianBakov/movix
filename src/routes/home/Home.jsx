import { Paper } from "@mui/material";
import { Outlet } from "react-router-dom";

import CarouselComponent from "../../components/carousel/Carousel";
import HomeCategories from "../../components/home-categories/HomeCategories";

import { useGetDiscoverQuery } from "../../features/api/apiSlice";

const Home = () => {
  const {
    data: discoverMoviesList = [],
    isSuccess: getDiscoverSuccess,
    isError: isGetDiscoverError,
  } = useGetDiscoverQuery();

  return (
    <Paper>
      <Outlet />
      <CarouselComponent
        data={discoverMoviesList}
        isSuccess={getDiscoverSuccess}
        isError={isGetDiscoverError}
      />

      <HomeCategories
        discoverMoviesList={discoverMoviesList}
        getDiscoverSuccess={getDiscoverSuccess}
        isGetDiscoverError={isGetDiscoverError}
      />
    </Paper>
  );
};

export const MEDIA_TYPES = {
  MOVIE: "movie",
  TV: "tv",
};

export default Home;
