import { styled } from "@mui/material/styles";
import React, { Fragment } from "react";
import ContentWrapper from "../../styles/ContentWrapper";
import { Interests } from "./Interests";
import { Skills } from "./Skills";

const StyledContentWrapper = styled(ContentWrapper)(() => ({
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",

  flexWrap: "wrap",
  width: "100%",
}));

const SkillsAndInterests: React.FC = () => (
  <>
    <StyledContentWrapper>
      <Interests />
      <Skills />
    </StyledContentWrapper>
  </>
);

export default SkillsAndInterests;
