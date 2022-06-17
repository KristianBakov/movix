import { Link } from "react-router-dom";
import {
  Box,
  Card,
  Typography,
  CircularProgress,
  Divider,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Slider from "react-slick";

import StarIcon from "@mui/icons-material/Star";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

import noImage from "../../assets/noImage.png";
import {
  CenteredBox,
  CenteredRowBox,
} from "../../commons/styles/general.styles";

const MovieSliderShowcase = ({ title, type, data, isSuccess, isError }) => {
  let content;
  if (isError) {
    content = <CenteredBox>{"Error: No content can be displayed"}</CenteredBox>;
  } else if (isSuccess) {
    content = data.results.map((item) => {
      return item.backdrop_path ? (
        <Card square key={item.id} className={"MuiMovieSliderCard"}>
          <Link to={`/details/${type}/${item.id}`}>
            <CardMedia
              className={"MuiCardMedia-root"}
              component="img"
              image={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                  : noImage
              }
              alt={`${item.original_title} poster`}
            />
          </Link>
          <CardContent className={"MuiCardContent-root"}>
            <Typography variant="h5">{item.title}</Typography>

            <Divider sx={{ width: 50, py: 1 }} />

            {item.vote_average > 0 ? (
              <Typography component={"span"} sx={{ pt: 2 }}>
                TMDB Rating <br />
                <CenteredRowBox>
                  <StarIcon /> {Math.round(item.vote_average * 10) / 10} / 10
                </CenteredRowBox>
              </Typography>
            ) : (
              <CenteredRowBox sx={{ pt: 1 }}>
                No ratings
                <SentimentDissatisfiedIcon />
              </CenteredRowBox>
            )}
          </CardContent>
        </Card>
      ) : null;
    });
  } else {
    //it is Loading
    content = (
      <CenteredBox>
        <CircularProgress />
      </CenteredBox>
    );
  }

  return (
    <Box
      style={{
        display: "inline-block",
        width: "100%",
        paddingLeft: 50,
        paddingRight: 50,
        minHeight: 800,
      }}
    >
      <CenteredBox>
        <Typography variant="h3">{title}</Typography>
      </CenteredBox>
      <Slider {...settings}>{content}</Slider>
    </Box>
  );
};

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  lazyLoad: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,

  variableHeight: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default MovieSliderShowcase;
