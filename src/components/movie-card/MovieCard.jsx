import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import {
  CenteredRowBox,
  CenteredColumnBox,
} from "../../commons/styles/general.styles";
import noImage from "../../assets/noImage.png";

const MovieCard = ({ imgUrl, title, rating, type, id }) => {
  return (
    <Card
      sx={{
        width: 200,
        mx: 2,
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Link to={`/details/${type}/${id}`}>
        <CardMedia
          component="img"
          image={
            imgUrl ? `https://image.tmdb.org/t/p/original${imgUrl}` : noImage
          }
          alt={title}
          sx={{ borderRadius: 2 }}
        />
      </Link>
      <CardContent>
        <CenteredColumnBox sx={{ textAlign: "center" }}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="subtitle1">TMDB Rating</Typography>

          {rating > 0 ? (
            <CenteredRowBox>
              <StarIcon /> {Math.round(rating * 10) / 10} / 10{" "}
            </CenteredRowBox>
          ) : (
            <CenteredRowBox>
              No Ratings <SentimentVeryDissatisfiedIcon />
            </CenteredRowBox>
          )}
        </CenteredColumnBox>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
