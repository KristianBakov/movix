import noImage from "../../assets/noImage.png";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const CastMemberCard = ({ imgUrl, realName, characterName }) => {
  return (
    <Card
      sx={{
        width: 140,
        mx: 3,
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        image={
          imgUrl ? `https://image.tmdb.org/t/p/original${imgUrl}` : noImage
        }
        alt={realName}
        sx={{ borderRadius: 2 }}
      />
      <CardContent>
        <Typography variant="h5">{realName}</Typography>
        <Typography variant="subtitle1">{characterName}</Typography>
      </CardContent>
    </Card>
  );
};

export default CastMemberCard;
