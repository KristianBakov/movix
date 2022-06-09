import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const ReadMoreWrapper = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  span: {
    color: "#047BFF",
    cursor: "pointer",
  },
}));
