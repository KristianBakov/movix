import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { CenteredGradientBox } from "../../commons/styles/general.styles";

const Fallback = () => {
  const navigate = useNavigate();

  const [seconds, setSeconds] = useState(5);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        navigate("/");
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <CenteredGradientBox style={{ height: "100vh" }}>
      <Container style={{ textAlign: "center" }}>
        <Typography variant="h1">404 </Typography>
        <Typography variant="h1">We're Sorry :&#40; </Typography>
        <Typography variant="h6" sx={{ py: 2 }}>
          The content you are looking for does not exist or has been removed.
          <br />
          You will be redirected to the homepage in
          <span style={{ fontWeight: "bold", color: "#ffc108" }}>
            {seconds} seconds
          </span>
          .
        </Typography>
      </Container>
    </CenteredGradientBox>
  );
};

export default Fallback;
