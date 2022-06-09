import { Grid, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import CarouselComponent from "../../components/carousel/Carousel";
import MovieSlider from "../../components/movie-slider/MovieSlider";

import { useGetDiscoverQuery } from "../../features/api/apiSlice";

const Home = () => {
  const theme = useTheme();

  const {
    data: discoverMoviesList,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDiscoverQuery();

  return (
    <Paper>
      <Outlet />
      <CarouselComponent
        data={discoverMoviesList}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
      />
      <Grid
        container
        direction="column"
        style={{
          background:
            theme.palette.mode === "light" ? lightGradient : darkGradient,
        }}
      >
        <MovieSlider />
      </Grid>
    </Paper>
  );
};

const lightGradient =
  "linear-gradient(180deg,hsl(0deg, 0%, 100%) 0%,hsl(176deg, 57%, 97%) 18%,hsl(176deg, 61%, 93%) 35%,hsl(176deg, 62%, 90%) 49%,hsl(177deg, 62%, 87%) 61%,hsl(177deg, 63%, 84%) 72%,hsl(177deg, 63%, 80%) 80%,hsl(177deg, 64%, 77%) 87%,hsl(178deg, 64%, 73%) 92%,hsl(178deg, 65%, 69%) 95%,hsl(178deg, 66%, 65%) 98%,hsl(178deg, 67%, 60%) 100%)";

const darkGradient =
  "linear-gradient(90deg,hsl(221deg, 55%, 10%) 0%,hsl(234deg, 38%, 15%) 18%,hsl(254deg, 34%, 18%) 35%,hsl(273deg, 35%, 20%) 49%,hsl(292deg, 36%, 22%) 61%,hsl(311deg, 40%, 25%) 72%,hsl(323deg, 46%, 28%) 80%,hsl(331deg, 51%, 32%) 87%,hsl(339deg, 53%, 36%) 92%,hsl(347deg, 53%, 40%) 95%,hsl(355deg, 51%, 44%) 98%,hsl(4deg, 52%, 46%) 100%)";

export default Home;
