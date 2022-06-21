import { memo } from "react";
import { Chip } from "@mui/material";

const GenresDisplay = ({ genres }) => {
  return genres
    ? genres.map((genre) => {
        return <Chip key={genre.id} label={genre.name} />;
      })
    : null;
};

export default memo(GenresDisplay);
