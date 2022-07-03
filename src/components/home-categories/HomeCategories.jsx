import {
  useGetTrendingTodayQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
  useGetStudioGhibliQuery,
  useGetAsianDramasQuery,
  useGetPopularTvSeriesQuery,
} from "../../features/api/apiSlice";
import { MEDIA_TYPES } from "../../routes/home/Home";
import { GradientBox } from "../../commons/styles/general.styles";
import MovieSliderShowcase from "../movie-slider/MovieSliderShowcase";

const HomeCategories = ({
  discoverMoviesList,
  getDiscoverSuccess,
  isGetDiscoverError,
}) => {
  const {
    data: trendingMoviesList = [],

    isSuccess: getTrendingTodaySuccess,
    isError: isGetTrendingTodayError,
  } = useGetTrendingTodayQuery();
  const {
    data: topRatedMoviesList = [],

    isSuccess: getTopRatedSuccess,
    isError: isGetTopRatedError,
  } = useGetTopRatedQuery();
  const {
    data: upcomingMoviesList = [],

    isSuccess: getUpcomingSuccess,
    isError: isGetUpcomingError,
  } = useGetUpcomingQuery();
  const {
    data: studioGhibliMoviesList = [],

    isSuccess: getStudioGhibliSuccess,
    isError: isGetStudioGhibliError,
  } = useGetStudioGhibliQuery();
  const {
    data: asianDramasMoviesList = [],

    isSuccess: getAsianDramasSuccess,
    isError: isGetAsianDramasError,
  } = useGetAsianDramasQuery();
  const {
    data: popularTvSeriesMoviesList = [],

    isSuccess: getPopularTvSeriesSuccess,
    isError: isGetPopularTvSeriesError,
  } = useGetPopularTvSeriesQuery();

  return (
    <GradientBox>
      <MovieSliderShowcase
        title={"Now In Theatres"}
        type={MEDIA_TYPES.MOVIE}
        data={discoverMoviesList}
        isSuccess={getDiscoverSuccess}
        isError={isGetDiscoverError}
      />

      <MovieSliderShowcase
        title={"Trending Today"}
        type={MEDIA_TYPES.MOVIE}
        data={trendingMoviesList}
        isSuccess={getTrendingTodaySuccess}
        isError={isGetTrendingTodayError}
      />

      <MovieSliderShowcase
        title={"Top Rated Movies"}
        type={MEDIA_TYPES.MOVIE}
        data={topRatedMoviesList}
        isSuccess={getTopRatedSuccess}
        isError={isGetTopRatedError}
      />

      <MovieSliderShowcase
        title={"Upcoming Movies"}
        type={MEDIA_TYPES.MOVIE}
        data={upcomingMoviesList}
        isSuccess={getUpcomingSuccess}
        isError={isGetUpcomingError}
      />

      <MovieSliderShowcase
        title={"Studio Ghibli Collection"}
        type={MEDIA_TYPES.MOVIE}
        data={studioGhibliMoviesList}
        isSuccess={getStudioGhibliSuccess}
        isError={isGetStudioGhibliError}
      />

      <MovieSliderShowcase
        title={"Asian Dramas"}
        type={MEDIA_TYPES.TV}
        data={asianDramasMoviesList}
        isSuccess={getAsianDramasSuccess}
        isError={isGetAsianDramasError}
      />

      <MovieSliderShowcase
        title={"Popular TV Series"}
        type={MEDIA_TYPES.TV}
        data={popularTvSeriesMoviesList}
        isSuccess={getPopularTvSeriesSuccess}
        isError={isGetPopularTvSeriesError}
      />
    </GradientBox>
  );
};

export default HomeCategories;
