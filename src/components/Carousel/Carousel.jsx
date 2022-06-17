import Carousel from "react-material-ui-carousel";

import CarouselItem from "../carousel-item/CarouselItem";
import { useTheme } from "@mui/material";

import { CircularProgress } from "@mui/material";

import { CenteredBox } from "../../commons/styles/general.styles";
import { Showcase } from "../../commons/styles/general.styles";

const CarouselComponent = ({ data, isLoading, isSuccess, isError, error }) => {
  const theme = useTheme();

  let content;

  if (isLoading) {
    content = (
      <CenteredBox>
        <CircularProgress />
      </CenteredBox>
    );
  } else if (isSuccess) {
    content = (
      <Carousel
        height={`calc(100vh - ${theme.spacing(7)})`}
        animation="slide"
        duration={600}
        indicators={false}
      >
        {data.results.map((item, index) => {
          return <CarouselItem item={item} key={index} />;
        })}
      </Carousel>
    );
  } else if (isError) {
    content = <CenteredBox>{error.toString()}</CenteredBox>;
  }

  return <Showcase>{content}</Showcase>;
};

export default CarouselComponent;
