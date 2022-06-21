import { Grid, Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { GradientBox } from "../../commons/styles/general.styles";
import MovieCard from "../../components/movie-card/MovieCard";

import { useGetSearchQuery } from "../../features/api/apiSlice";

const SearchResults = () => {
  const { query } = useParams();

  const { data: searchResult, isSuccess } = useGetSearchQuery({ query });
  console.log(searchResult);

  let content;
  if (isSuccess) {
    content = (
      <Box>
        <Typography variant="h3" sx={{ pt: 10, textAlign: "center" }}>
          Search Results for: " {query.toUpperCase()} "
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ p: 5, px: 30, justifyContent: "center" }}
        >
          {searchResult.results
            .filter((item) => {
              return item.media_type !== "person";
            })
            .map((item) => {
              return (
                <Grid item key={item.id}>
                  <MovieCard
                    imgUrl={item.poster_path}
                    title={item.name ? item.name : item.title}
                    rating={item.vote_average}
                    type={item.media_type}
                    id={item.id}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    );
  }

  return <GradientBox>{content}</GradientBox>;
};

export default SearchResults;
