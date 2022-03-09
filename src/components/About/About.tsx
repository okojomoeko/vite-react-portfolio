import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import { AboutDetail, AboutDetailProps } from "./AboutDetail";
import aboutsTemplate from "../../assets/templates/abouts_template.json";

const About: React.FC = () => {
  const [value, setValue] = useState<AboutDetailProps[]>([]);

  useEffect(() => {
    setValue(aboutsTemplate.Abouts);
  }, [value]);
  return (
    <>
      <Box p={2} id="About">
        <>
          <Box display="flex" justifyContent="center" p={1}>
            <Typography variant="h3">About</Typography>
          </Box>
          簡単な経歴
          <Box display="flex" justifyContent="center" p={1}>
            <Typography variant="body1" align="left" />
          </Box>
        </>

        {value.length !== 0 ? (
          value.map((about) => (
            <AboutDetail
              YearHeader={about.YearHeader}
              MainHeader={about.MainHeader}
              Description={about.Description}
              key={about.MainHeader}
            />
          ))
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default About;
