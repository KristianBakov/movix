import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Chip,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import CastMemberCard from "../../components/cast-member-card/CastMemberCard.jsx";
import noImage from "../../assets/noImage.png";

import {
  ShowcaseBoxWrapper,
  CastCardWrapper,
  CenteredColumnWrapper,
  CenteredColumnGradientWrapper,
} from "./Details.styles.js";

import {
  useGetCastListQuery,
  useGetMovieDetailsQuery,
  useGetSimilarQuery,
} from "../../features/api/apiSlice";
import { PlayCircle } from "@mui/icons-material";
import MovieSliderShowcase from "../../components/movie-slider/MovieSliderShowcase.jsx";

const Details = () => {
  const { type, id } = useParams();

  const { data: movieDetails, isSuccess: movieDetailsSuccess } =
    useGetMovieDetailsQuery({
      type,
      id,
    });
  const { data: castDetails, isSuccess: castListSuccess } = useGetCastListQuery(
    {
      type,
      id,
    }
  );
  const {
    data: similarList,
    isSuccess: similarListSuccess,
    isError: similarListError,
  } = useGetSimilarQuery({
    type,
    id,
  });

  // console.log(movieDetails);

  const handleClick = () => {
    console.info("Trailer plays");
  };

  let content;
  if (movieDetailsSuccess && castListSuccess) {
    content = (
      <Paper>
        <ShowcaseBoxWrapper dark img={movieDetails.backdrop_path}>
          <CenteredColumnWrapper sx={{ mx: 5, mb: 5 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
              }}
            >
              <Card
                sx={{
                  maxWidth: 220,
                  mr: 6,
                  mb: { xs: 2, md: 0 },
                }}
              >
                <CardMedia
                  component="img"
                  image={
                    movieDetails.poster_path
                      ? `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`
                      : noImage
                  }
                  alt={movieDetails.title}
                />
              </Card>

              <Box style={{ maxWidth: 700, textAlign: "left" }}>
                <Typography variant="h3">
                  {movieDetails.title}{" "}
                  <span>
                    {"(" + movieDetails.release_date.substr(0, 4) + ")"}
                  </span>
                </Typography>

                <Box style={{ display: "flex", marginTop: 20 }}>
                  {movieDetails.genres.map((genre) => {
                    return <Chip key={genre.id} label={genre.name} />;
                  })}
                  <Chip
                    label="Trailer"
                    icon={<PlayCircle />}
                    variant="trailer"
                    onClick={handleClick}
                  />
                </Box>

                <Divider sx={{ width: 200, my: 2 }} />

                <Paper sx={{ p: 2, backgroundColor: "#F8F9FA" }}>
                  <Typography sx={{ color: "black !important" }}>
                    {movieDetails.overview}
                  </Typography>
                </Paper>
              </Box>
            </Box>
          </CenteredColumnWrapper>
        </ShowcaseBoxWrapper>

        <CenteredColumnGradientWrapper sx={{ pt: 2 }}>
          <Typography variant="h3">Top Cast Members</Typography>

          <CastCardWrapper sx={{ pt: 4 }}>
            {castDetails.cast.slice(0, 5).map((castMember, index) => {
              return (
                <CastMemberCard
                  key={castMember.id}
                  imgUrl={castMember.profile_path}
                  realName={castMember.name}
                  characterName={castMember.character}
                />
              );
            })}
          </CastCardWrapper>

          {similarList ? (
            <MovieSliderShowcase
              title={"Recommended for you"}
              type={type}
              data={similarList}
              isSuccess={similarListSuccess}
              isError={similarListError}
            />
          ) : null}
        </CenteredColumnGradientWrapper>
      </Paper>
    );
  }

  return <Paper>{content}</Paper>;
};

export default Details;
