import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/material/styles";

import interestsTemplate from "../../assets/templates/interests_template.json";
import { SkillsAndInterestsDetail, SkillsAndInterestsDetailProps } from "./SkillsAndInterestsDetails";

const StyledFavoriteIcon = styled(FavoriteIcon)({
  padding: "10px",
  fontSize: "90px",
  backgroundColor: "skyblue",
  borderRadius: "100%",
});

const StyledBox = styled(Box)({
  maxwidth: "300px",
});

export const Interests: React.FC = () => {
  const [value, setValue] = useState<SkillsAndInterestsDetailProps[]>([]);

  useEffect(() => {
    setValue(interestsTemplate.Interests);
  }, [value]);

  return (
    <StyledBox p={2} id="Interests">
      <Box display="flex" justifyContent="center" p={1}>
        <Typography variant="h3">Interests</Typography>
      </Box>
      <StyledFavoriteIcon />
      {value.length !== 0 &&
        value.map((interest) => (
          <SkillsAndInterestsDetail title={interest.title} listData={interest.listData} key={interest.title} />
        ))}
    </StyledBox>
  );
};
