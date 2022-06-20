import { styled } from "@mui/material";
import { GradientBox } from "../../commons/styles/general.styles";

export const CenteredColumnGradientWrapper = styled(GradientBox)(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  })
);
