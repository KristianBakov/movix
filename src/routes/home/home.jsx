import "./Home.scss";

import { Button, Grid, Paper, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import CarouselComponent from "../../components/Carousel/Carousel";

const Home = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <Paper>
      <Outlet />
      <CarouselComponent />

      <Grid container direction="column">
        <Typography variant="h1"> This is my App!</Typography>
        <Button variant="contained" color="primary">
          This is a button
        </Button>
      </Grid>
    </Paper>
  );
};

export default Home;
