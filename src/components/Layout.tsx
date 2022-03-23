import styled from "@emotion/styled";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import SkillsAndInterests from "./SkillsAndInterests/SkillsAndInterests";
import About from "./About/About";
import { Works } from "./Work/Work";
// import Work from "./Work/Work";

const StyledLayout = styled("div")(() => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
}));

export const Layout = () => (
  <StyledLayout>
    <Navbar />
    <Hero />
    <About />
    <SkillsAndInterests />
    <Works />
  </StyledLayout>
);
