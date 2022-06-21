import { Chip } from "@mui/material";
import { PlayCircle } from "@mui/icons-material";

const TrailerChip = ({ trailer, handleOpen }) => {
  return (
    <Chip
      disabled={!trailer}
      label="Trailer"
      icon={<PlayCircle />}
      variant="trailer"
      onClick={handleOpen}
    />
  );
};

export default TrailerChip;
