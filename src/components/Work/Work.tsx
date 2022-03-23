import React from "react";

import { Box, List, styled, Typography } from "@mui/material";
import workTemplate from "../../assets/templates/works_template.json";
import { WorkDetail } from "./WorkDetail";
import { Work } from "../../types/portfoliotypes";
import { WorksListDetail } from "./WorksListDetail";

const StyledList = styled(List)(({ theme }) => ({
  root: {
    width: 770,
    maxWidth: "100%",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const Works: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const [value, setValue] = React.useState<Work[]>([]);

  React.useEffect(() => {
    setValue(workTemplate.Works);
  }, [value]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  return (
    <Box p={2} id="Works">
      <Box display="flex" justifyContent="center" p={1}>
        <Typography variant="h3">Works</Typography>
      </Box>

      <Box display="flex" justifyContent="center" p={1}>
        <StyledList>
          {value.length !== 0 &&
            value.map((work, index) => (
              <WorksListDetail index={index} data={work} handleOpen={handleOpen} key={work.Name} />
            ))}
        </StyledList>
      </Box>

      <WorkDetail handleClose={handleClose} open={open} index={selectedIndex} data={value} />
    </Box>
  );
};
