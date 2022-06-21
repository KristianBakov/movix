import { Paper, Typography } from "@mui/material";
const OverviewTextBox = ({ overview }) => {
  return overview ? (
    <Paper sx={{ p: 2, backgroundColor: "#F8F9FA" }}>
      <Typography sx={{ color: "black !important" }}>{overview}</Typography>
    </Paper>
  ) : null;
};

export default OverviewTextBox;
