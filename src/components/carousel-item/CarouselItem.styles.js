import { styled } from "@mui/material/styles";
import { Paper, Box, Button } from "@mui/material";

export const CarouselItemComponent = styled(Paper)(({ theme }) => ({
  maxWidth: "100%",
  position: "relative",
  textAlign: "center",
  margin: 0,
  padding: 0,
  overflow: "hidden",
  height: `calc(100vh - ${theme.spacing(7)})`,

  // backgroundImage: `url("https://placebear.com/1400/798.jpg")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.6)",

  "& *": {
    color: "white",
  },

  // "& .Button": {

  // },
}));

export const MediaButton = styled(Button)(({ theme }) => ({
  marginTop: 20,

  fontSize: 16,
  textTransform: "capitalize",
  transition: "200ms",
}));

export const CarouselItemBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  marginLeft: "auto",
  marginRight: "auto",
  left: 0,
  right: 0,
  textAlign: "left",
  bottom: 100,
  width: "80%",
}));
