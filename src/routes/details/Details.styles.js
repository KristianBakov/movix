import { Box, styled } from "@mui/material";
import { GradientBox, ShowcaseBox } from "../../commons/styles/general.styles";

export const ShowcaseBoxWrapper = styled(ShowcaseBox)(({ theme }) => ({
  paddingTop: 50,
  height: "min-content",
  minHeight: "700px",
}));

export const CastCardWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexWrap: "wrap",
  justifyContent: "center",
}));

export const CenteredColumnWrapper = styled(Box)(({ theme, gradient }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const CenteredColumnGradientWrapper = styled(GradientBox)(
  ({ theme, gradient }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  })
);
