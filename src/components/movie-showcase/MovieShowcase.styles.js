import { Box, styled } from "@mui/material";
import { ShowcaseBox } from "../../commons/styles/general.styles";

export const ShowcaseBoxWrapper = styled(ShowcaseBox)(({ theme }) => ({
  paddingTop: 50,
  height: "min-content",
  minHeight: "700px",
}));

export const CenteredColumnWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: 50,
}));

export const CenteredContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: "center",
}));

export const TitleBox = styled(Box)(({ theme }) => ({
  maxWidth: 700,
  textAlign: "left",
}));

export const DateSpan = styled("span")(({ theme }) => ({
  color: "#CE92D8",
}));
