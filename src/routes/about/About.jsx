import { Container, Typography } from "@mui/material";
import { CenteredGradientBox } from "../../commons/styles/general.styles";

const About = () => {
  return (
    <CenteredGradientBox style={{ height: "100vh" }}>
      <Container style={{ textAlign: "center" }}>
        <Typography variant="h1">About Movix</Typography>
        <Typography variant="h6">
          Web application for browsing movies and TV shows; users can watch
          trailers, find cast members, similar media, and an overview describing
          the media selected.
        </Typography>
        <Typography variant="h2">Version 1.0.0</Typography>
      </Container>
    </CenteredGradientBox>
  );
};

export default About;
