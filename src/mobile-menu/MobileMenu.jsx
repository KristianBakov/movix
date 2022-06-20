import React from "react";
import { Link } from "react-router-dom";

import { Typography, Menu, MenuItem } from "@mui/material";

const MobileMenu = ({
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleMobileMenuClose,
  pages,
}) => {
  return (
    <Menu
      id="menu-appbar"
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{
        display: { xs: "block", md: "none" },
      }}
    >
      {pages.map((page) => (
        <MenuItem
          component={Link}
          to={page.href}
          key={page.display}
          onClick={handleMobileMenuClose}
        >
          <Typography textAlign="center">{page.display}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default MobileMenu;
