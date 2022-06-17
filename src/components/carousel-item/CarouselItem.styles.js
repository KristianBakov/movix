import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const MediaButton = styled(Button)(({ theme }) => ({
  marginTop: 20,

  color: "white",
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
