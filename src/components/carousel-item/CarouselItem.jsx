import { Divider, Typography } from "@mui/material";
import { memo } from "react";
import {
  CarouselItemComponent,
  CarouselItemBox,
  MediaButton,
} from "./CarouselItem.styles.js";

import { ReadMore } from "../read-more/ReadMore.jsx";

const CarouselItem = ({ item }) => {
  console.log(item);
  return (
    <CarouselItemComponent
      key={item.id}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${item.poster_path}")`,
      }}
      square={true}
    >
      <CarouselItemBox>
        <Typography variant="h4">{`TMDB Rating: ${item.vote_average} / 10`}</Typography>
        <Typography variant="h3">{item.original_title}</Typography>
        <br />
        <Divider sx={{ width: 400 }} />
        <br />
        <ReadMore>{item.overview}</ReadMore>

        <MediaButton
          variant="media"
          href={item.href}
          target="_blank"
          rel="noreferrer"
        >
          View details
        </MediaButton>
      </CarouselItemBox>
    </CarouselItemComponent>
  );
};

export default memo(CarouselItem);
