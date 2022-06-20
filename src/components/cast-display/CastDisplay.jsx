import { Box, Typography } from "@mui/material";
import { CastCardWrapper } from "./CastDisplay.styles";
import CastMemberCard from "../cast-member-card/CastMemberCard";

const CastDisplay = ({ cast }) => {
  return (
    <Box
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h3">Top Cast Members</Typography>

      <CastCardWrapper sx={{ pt: 4 }}>
        {cast.slice(0, 5).map((castMember) => {
          return (
            <CastMemberCard
              key={castMember.id}
              imgUrl={castMember.profile_path}
              realName={castMember.name}
              characterName={castMember.character}
            />
          );
        })}
      </CastCardWrapper>
    </Box>
  );
};

export default CastDisplay;
