import { Box, styled } from "@mui/material";

export const CenteredBox = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const CarouselWrapper = styled(Box)(({ theme }) => ({
  height: `calc(100vh - ${theme.spacing(7)})`,
}));
