import { Divider, Typography } from "@mui/material";
import { memo } from "react";
import { CarouselItemBox, MediaButton } from "./CarouselItem.styles.js";
import { ShowcaseBox } from "../../commons/styles/general.styles.js";

import { ReadMore } from "../read-more/ReadMore.jsx";
import { Link } from "react-router-dom";

const CarouselItem = ({ item }) => {
  return (
    <ShowcaseBox key={item.id} img={item.backdrop_path} square={true}>
      <CarouselItemBox>
        <Typography variant="h4">{`TMDB Rating: ${item.vote_average} / 10`}</Typography>
        <Typography variant="h3">{item.original_title}</Typography>
        <br />
        <Divider sx={{ width: 400 }} />
        <br />
        <ReadMore>{item.overview}</ReadMore>

        <Link
          to={`/details/movie/${item.id}`}
          style={{ textDecoration: "none" }}
        >
          <MediaButton variant="media">View details</MediaButton>
        </Link>
      </CarouselItemBox>
    </ShowcaseBox>
  );
};

export default memo(CarouselItem);
