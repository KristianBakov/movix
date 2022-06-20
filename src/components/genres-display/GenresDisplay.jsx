import { memo } from "react";
import { Chip } from "@mui/material";

const GenresDisplay = ({ genres }) => {
  return genres.map((genre) => {
    return <Chip key={genre.id} label={genre.name} />;
  });
};

export default memo(GenresDisplay);
