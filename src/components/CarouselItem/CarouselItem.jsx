import { Paper } from "@mui/material";
import "./CarouselItem.scss";

const CarouselItem = ({ name, description, imageUrl }) => {
  return (
    <Paper>
      <h2>{name}</h2>
      <p>{description}</p>

      <img src="https://placebear.com/1600/900.jpg" alt="bear" />
    </Paper>
  );
};

export default CarouselItem;
