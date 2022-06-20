import { Typography } from "@mui/material";
import { CastCardWrapper } from "./CastDisplay.styles";
import CastMemberCard from "../cast-member-card/CastMemberCard";
import { CenteredColumnBox } from "../../commons/styles/general.styles";

const CastDisplay = ({ cast }) => {
  return (
    <CenteredColumnBox>
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
    </CenteredColumnBox>
  );
};

export default CastDisplay;
