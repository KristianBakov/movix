import { Card, CardMedia } from "@mui/material";
import noImage from "../../assets/noImage.png";

const ShowcasePosterCard = ({ poster, title }) => {
  return (
    <Card sx={{ maxWidth: 220, mr: 6, mb: { xs: 2, md: 0 } }}>
      <CardMedia
        component="img"
        image={
          poster ? `https://image.tmdb.org/t/p/original${poster}` : noImage
        }
        alt={title ? title : null}
      />
    </Card>
  );
};

export default ShowcasePosterCard;
