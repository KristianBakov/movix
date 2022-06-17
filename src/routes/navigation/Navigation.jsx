import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ThemeTogglerSwitch from "../../components/theme-toggler/ThemeToggler";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import { Outlet } from "react-router-dom";
import { Paper } from "@mui/material";

import {
  Search,
  StyledInputBase,
  SearchIconWrapper,
} from "./Navigation.styles.js";

const pages = [
  {
    href: "/",
    display: "Home",
  },
  {
    href: "/about",
    display: "About",
  },
];

const Navigation = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
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

  return (
    <Paper>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
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
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <ThemeTogglerSwitch />

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
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

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="open drawer"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </Box>

      <Outlet />
    </Paper>
  );
};

export default Navigation;
