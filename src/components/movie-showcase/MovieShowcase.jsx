import { useState, memo } from "react";
import { Typography, Divider } from "@mui/material";

import {
  ShowcaseBoxWrapper,
  CenteredColumnWrapper,
  CenteredContainer,
  TitleBox,
  DateSpan,
} from "./MovieShowcase.styles";

import TrailerChip from "../trailer-chip/TrailerChip";
import GenresDisplay from "../genres-display/GenresDisplay";
import VideoModal from "../video-modal/VideoModal";
import ShowcasePosterCard from "../showcase-poster-card/ShowcasePosterCard";
import { FlexBox } from "../../commons/styles/general.styles";
import OverviewTextBox from "../overview-text-box/OverviewTextBox";

const MovieShowcase = ({
  backdrop,
  poster,
  title,
  genres,
  releaseDate,
  overview,
  trailer,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let hasTrailer = false;
  if (typeof trailer.results[0] !== "undefined") {
    hasTrailer = true;
  }

  return (
    <ShowcaseBoxWrapper dark img={backdrop}>
      <CenteredColumnWrapper>
        <CenteredContainer sx={{ flexDirection: { xs: "column", md: "row" } }}>
          <ShowcasePosterCard poster={poster} title={title} />

          <TitleBox>
            <Typography variant="h3">
              {title}
              <DateSpan>{" (" + releaseDate?.substr(0, 4) + ")"}</DateSpan>
            </Typography>

            <FlexBox sx={{ mt: 2 }}>
              <GenresDisplay genres={genres} />
              <TrailerChip trailer={hasTrailer} handleOpen={handleOpen} />
            </FlexBox>

            <VideoModal
              open={open}
              handleClose={handleClose}
              videoId={hasTrailer ? trailer.results[0].key : ""}
            />

            <Divider sx={{ width: 200, my: 2 }} />

            <OverviewTextBox overview={overview} />
          </TitleBox>
        </CenteredContainer>
      </CenteredColumnWrapper>
    </ShowcaseBoxWrapper>
  );
};

export default memo(MovieShowcase);
