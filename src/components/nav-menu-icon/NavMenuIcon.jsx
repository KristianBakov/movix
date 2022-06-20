import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavMenuIcon = ({ handleMobileMenuOpen }) => {
  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="open drawer"
        aria-controls="primary-search-account-menu-mobile"
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default NavMenuIcon;
