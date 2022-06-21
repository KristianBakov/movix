import { Box, styled } from "@mui/material";

export const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
}));

export const GrowBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
}));

export const CenteredBox = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const CenteredRowBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const CenteredColumnBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const Showcase = styled(Box)(({ theme }) => ({
  height: `calc(100vh - ${theme.spacing(7)})`,
}));

export const ShowcaseBox = styled(Box)(({ theme, img, dark }) => ({
  maxWidth: "100%",
  position: "relative",
  textAlign: "center",
  margin: 0,
  padding: 0,
  overflow: "hidden",
  height: `calc(100vh - ${theme.spacing(7)})`,

  backgroundImage: getImage(img, dark),

  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.6)",

  "& *": {
    color: "white",
  },
}));

const getImage = (img, dark) => {
  return img
    ? dark
      ? `linear-gradient(rgba(0,0,150,0.4),rgba(0,0,150,0.4)),url("https://image.tmdb.org/t/p/original${img}")`
      : `url("https://image.tmdb.org/t/p/original${img}")`
    : "none";
};

export const GradientBox = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === "light" ? lightGradient : darkGradient,
}));
export const CenteredGradientBox = styled(GradientBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const lightGradient =
  "linear-gradient(180deg,hsl(0deg, 0%, 100%) 0%,hsl(176deg, 57%, 97%) 18%,hsl(176deg, 61%, 93%) 35%,hsl(176deg, 62%, 90%) 49%,hsl(177deg, 62%, 87%) 61%,hsl(177deg, 63%, 84%) 72%,hsl(177deg, 63%, 80%) 80%,hsl(177deg, 64%, 77%) 87%,hsl(178deg, 64%, 73%) 92%,hsl(178deg, 65%, 69%) 95%,hsl(178deg, 66%, 65%) 98%,hsl(178deg, 67%, 60%) 100%)";

const darkGradient =
  "linear-gradient(90deg,hsl(221deg, 55%, 10%) 0%,hsl(234deg, 38%, 15%) 18%,hsl(254deg, 34%, 18%) 35%,hsl(273deg, 35%, 20%) 49%,hsl(292deg, 36%, 22%) 61%,hsl(311deg, 40%, 25%) 72%,hsl(323deg, 46%, 28%) 80%,hsl(331deg, 51%, 32%) 87%,hsl(339deg, 53%, 36%) 92%,hsl(347deg, 53%, 40%) 95%,hsl(355deg, 51%, 44%) 98%,hsl(4deg, 52%, 46%) 100%)";
