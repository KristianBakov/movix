import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../contexts/ColorModeContext";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MaterialUISwitch } from "./ThemeToggler.styles";

export default function ThemeTogglerSwitch() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <FormGroup>
      <FormControlLabel
        labelPlacement="start"
        label={`${theme.palette.mode} mode`}
        control={
          <MaterialUISwitch
            onChange={colorMode.toggleColorMode}
            checked={theme.palette.mode === "dark" ? true : false}
            sx={{ m: 1 }}
            className="bar"
          />
        }
        sx={{
          ".MuiFormControlLabel-label": {
            fontSize: 12,
          },
        }}
      />
    </FormGroup>
  );
}
