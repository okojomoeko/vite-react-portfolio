import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ComputerIcon from "@mui/icons-material/ComputerOutlined";
import { styled } from "@mui/material/styles";
// import { useInView } from "react-intersection-observer";

import skillsTemplate from "../../assets/templates/skills_template.json";
import { SkillsAndInterestsDetail, SkillsAndInterestsDetailProps } from "./SkillsAndInterestsDetails";

const StyledComputerIcon = styled(ComputerIcon)({
  padding: "10px",
  fontSize: "90px",
  backgroundColor: "skyblue",
  borderRadius: "100%",
});

const StyledBox = styled(Box)({
  maxwidth: "300px",
});

export const Skills: React.FC = () => {
  // const [ref, inView] = useInView({
  //   rootMargin: "0px 0px",
  //   triggerOnce: true,
  // });
  const [value, setValue] = useState<SkillsAndInterestsDetailProps[]>([]);

  useEffect(() => {
    setValue(skillsTemplate.Skills);
  }, [value]);

  return (
    <>
      <StyledBox p={2} id="Skills">
        <>
          <Box display="flex" justifyContent="center" p={1}>
            <Typography variant="h3">Skills</Typography>
          </Box>
          <StyledComputerIcon />
          {value.length !== 0 ? (
            value.map((interest) => (
              <SkillsAndInterestsDetail title={interest.title} listData={interest.listData} key={interest.title} />
            ))
          ) : (
            <></>
          )}
        </>
      </StyledBox>
    </>
  );
};
