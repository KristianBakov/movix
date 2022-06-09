import React, { Component } from "react";

import { Box, Card, Typography, CircularProgress } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Slider from "react-slick";

import { useGetDiscoverQuery } from "../../features/api/apiSlice";

import noImage from "../../assets/noImage.png";
import { CenteredBox } from "../carousel/Carousel.styles";

const MovieSlider = ({ item }) => {
  return (
    <Box>
      <Typography variant="h3">Title</Typography>
      <Slider {...settings}>
        <p>Test</p>
      </Slider>
    </Box>
  );
};

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default MovieSlider;
