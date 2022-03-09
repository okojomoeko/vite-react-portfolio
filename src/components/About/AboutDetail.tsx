import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useWindowWidth } from "@react-hook/window-size";
import { motion } from "framer-motion";

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
  // display: "flex",
  // justifyContent: "space-between",
  // width: "100%",
});

const StyledContentImg = styled(Grid)({
  // textAlign: "right",
  // alignItems: "center",
  // width:
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

const StyledOneLineGrid = styled(Grid)({
  // display: "flex",
  // justifyContent: "space-between",
  // width: "100%",
});

interface OneLineProps {
  yearHeader: string;
  mainHeader: string;
  description: string;
}

const OneLine = (props: OneLineProps) => {
  const { yearHeader, mainHeader, description } = props;
  const imgWidth = Math.round(useWindowWidth() * 0.2);

  return (
    <StyledBox p={2}>
      <StyledOneLineGrid container spacing={3}>
        <StyledContentImg item xs={4} maxWidth={imgWidth}>
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
      </StyledOneLineGrid>
    </StyledBox>
  );
};

export interface AboutDetailProps {
  YearHeader: string;
  MainHeader: string;
  Description: string;
}

export const AboutDetail = (props: AboutDetailProps) => {
  const { YearHeader, MainHeader, Description } = props;
  return (
    <Box>
      <motion.div
        animate={{ scale: [0, 1] }}
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <OneLine yearHeader={YearHeader} mainHeader={MainHeader} description={Description} />
      </motion.div>
    </Box>
  );
};
