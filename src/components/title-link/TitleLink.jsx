import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const TitleLink = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          display: { xs: "none", sm: "block" },
          color: "white",
        }}
      >
        Movix
      </Typography>
    </Link>
  );
};

export default TitleLink;
