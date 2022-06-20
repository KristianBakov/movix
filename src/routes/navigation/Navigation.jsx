import React from "react";
import { Outlet } from "react-router-dom";
import { Paper, Toolbar, AppBar } from "@mui/material";

import ThemeTogglerSwitch from "../../components/theme-toggler/ThemeToggler";
import MobileMenu from "../../mobile-menu/MobileMenu";
import TitleLink from "../../components/title-link/TitleLink";
import NavLinks from "../../components/nav-links/NavLinks";
import NavMenuIcon from "../../components/nav-menu-icon/NavMenuIcon";
import SearchBox from "../../components/search-box/SearchBox";
import { GrowBox } from "../../commons/styles/general.styles";

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

  return (
    <Paper>
      <GrowBox>
        <AppBar position="fixed">
          <Toolbar>
            <TitleLink />

            <SearchBox />

            <GrowBox />
            <ThemeTogglerSwitch />

            <NavLinks
              pages={pages}
              handleMobileMenuClose={handleMobileMenuClose}
            />

            <NavMenuIcon handleMobileMenuOpen={handleMobileMenuOpen} />
          </Toolbar>
        </AppBar>

        <MobileMenu
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileMenuClose={handleMobileMenuClose}
          pages={pages}
        />
      </GrowBox>

      <Outlet />
    </Paper>
  );
};

export default Navigation;
