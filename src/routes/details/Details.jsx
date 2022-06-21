import React from "react";
import { Paper } from "@mui/material";
import { useParams } from "react-router-dom";

import { CenteredColumnGradientWrapper } from "./Details.styles.js";

import {
  useGetCastListQuery,
  useGetMovieDetailsQuery,
  useGetSimilarQuery,
  useGetTrailerQuery,
} from "../../features/api/apiSlice";

import MovieSliderShowcase from "../../components/movie-slider/MovieSliderShowcase.jsx";
import MovieShowcase from "../../components/movie-showcase/MovieShowcase.jsx";
import CastDisplay from "../../components/cast-display/CastDisplay.jsx";

const Details = () => {
  const { type, id } = useParams();

  const { data: movieDetails, isSuccess: movieDetailsSuccess } =
    useGetMovieDetailsQuery({ type, id });
  const { data: castDetails, isSuccess: castListSuccess } = useGetCastListQuery(
    { type, id }
  );

  const {
    data: similarList,
    isSuccess: similarListSuccess,
    isError: similarListError,
  } = useGetSimilarQuery({ type, id });

  const { data: trailer, isSuccess: trailerSuccess } = useGetTrailerQuery({
    type,
    id,
  });

  let content;
  if (movieDetailsSuccess && castListSuccess && trailerSuccess) {
    content = (
      <Paper>
        <MovieShowcase
          backdrop={movieDetails.backdrop_path}
          poster={movieDetails.poster_path}
          title={movieDetails.title ? movieDetails.title : movieDetails.name}
          genres={movieDetails.genres}
          releaseDate={
            movieDetails.release_date
              ? movieDetails.release_date
              : movieDetails.first_air_date
          }
          overview={movieDetails.overview}
          trailer={trailer}
        />

        <CenteredColumnGradientWrapper sx={{ pt: 2 }}>
          <CastDisplay cast={castDetails.cast} />

          <MovieSliderShowcase
            title={"Recommended for you"}
            type={type}
            data={similarList}
            isSuccess={similarListSuccess}
            isError={similarListError}
          />
        </CenteredColumnGradientWrapper>
      </Paper>
    );
  }

  return <Paper>{content}</Paper>;
};

export default Details;
