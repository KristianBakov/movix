import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
const NavLinks = ({ pages, handleMobileMenuClose }) => {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Button
          variant="nav"
          component={Link}
          to={page.href}
          key={page.display}
          onClick={handleMobileMenuClose}
          sx={{
            my: 2,
            color: "white",
            display: "block",
            textAlign: "center",
          }}
        >
          {page.display}
        </Button>
      ))}
    </Box>
  );
};

export default NavLinks;
