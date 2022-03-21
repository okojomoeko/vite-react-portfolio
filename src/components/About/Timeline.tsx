import { Box, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { styled } from "@mui/material/styles";

import { motion } from "framer-motion";
import aboutsTemplate from "../../assets/templates/abouts_template.json";
import ContentWrapper from "../../styles/ContentWrapper";

// useMediaQuery hookを用いてレスポンシブデザインに対応するのもありか

// function SimpleMediaQuery() {
//   const matches = useMediaQuery("screen and (min-width:600px)");
//   return (
//     <div>
//       {`(min-width:600px) matches: ${matches}`}
//     </div>
//   );
// }

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledContentImg = styled(Grid)({
  textAlign: "right",
  alignItems: "center",
});

const StyledContent = styled(Grid)({
  textAlign: "left",
});

const Circle = styled(ContentWrapper)(({ theme }) => ({
  borderRadius: "100%",
  background: "skyblue",
  margin: "10px auto",
  [theme.breakpoints.down("md")]: {
    width: "50px",
    height: "50px",
  },
  [theme.breakpoints.up("md")]: {
    width: "100px",
    height: "100px",
  },
}));

interface IOneLineProps {
  yearHeader: string;
  mainHeader: string;
  description: string;
}

const OneLine = (props: IOneLineProps) => {
  const { yearHeader, mainHeader, description } = props;
  return (
    <>
      <StyledBox p={2}>
        <Grid container spacing={3}>
          <StyledContentImg item xs={4}>
            <Circle />
          </StyledContentImg>
          <StyledContent item xs={8}>
            <Typography variant="h5">
              <b>{yearHeader}</b>
            </Typography>
            <Typography variant="h5">
              <b>{mainHeader}</b>
            </Typography>
            {description}
          </StyledContent>
        </Grid>
      </StyledBox>
    </>
  );
};

const AboutLines = () => {
  const aboutList = [];
  const numEntries = aboutsTemplate.Abouts.length;
  for (let i = 0; i < numEntries; i += 1) {
    aboutList.push(
      <Fragment key={aboutsTemplate.Abouts[i].YearHeader}>
        <motion.div
          animate={{ scale: [0, 1] }}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          <OneLine
            yearHeader={aboutsTemplate.Abouts[i].YearHeader}
            mainHeader={aboutsTemplate.Abouts[i].MainHeader}
            description={aboutsTemplate.Abouts[i].Description}
          />
        </motion.div>
      </Fragment>
    );
  }

  return <>{aboutList}</>;
};

const Timeline: React.FC = () => (
  <>
    <Box display="flex" justifyContent="center">
      <ul>
        <AboutLines />
      </ul>
    </Box>
  </>
);

export default Timeline;
