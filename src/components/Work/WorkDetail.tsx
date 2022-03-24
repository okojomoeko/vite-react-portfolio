import { Box, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, styled } from "@mui/material";
import React, { Fragment } from "react";
import CloseIcon from "@mui/icons-material/Close";

import { Work } from "../../types/portfoliotypes";
import { getImageUrl } from "../../utils/getimage";

export interface DialogTitleProps {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  // position: "absolute",
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: theme.palette.grey[500],
}));

const StyledDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;
  return (
    /* eslint-disable react/jsx-props-no-spreading */
    <DialogTitle {...other}>
      <div style={{ whiteSpace: "pre-line" }}>{children}</div>
    </DialogTitle>
  );
};
const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  margin: 0,
  padding: theme.spacing(1),
}));

interface WorksTechnologyProps {
  data: string[];
}

const WorksTechnology = (props: WorksTechnologyProps) => {
  const worksTechnologies = [];
  const { data } = props;
  const numData = data.length;
  for (let i = 0; i < numData; i += 1) {
    worksTechnologies.push(<li key={i}>{data[i]}</li>);
  }

  return (
    <>
      使用技術
      <ul>{worksTechnologies}</ul>
    </>
  );
};

interface WorkDetailProps {
  handleClose: () => void;
  open: boolean;
  index: number;
  data: Work[];
}

export const WorkDetail = (props: WorkDetailProps) => {
  const { handleClose, open, index, data } = props;

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <StyledDialogTitle id="customized-dialog-title" onClose={handleClose}>
        {index !== -1 ? data[index].Name : "Error"}
      </StyledDialogTitle>
      <StyledDialogContent dividers>
        <Box p={2} display="flex" justifyContent="center">
          {index !== -1 && (
            <img src={`${getImageUrl(data[index].ImgPath)}`} alt={data[index].Name} width="70%" height="auto" />
          )}
        </Box>
        <Box p={2}>{index !== -1 ? data[index].Description : ""}</Box>
        <Box p={2}>{index !== -1 ? <WorksTechnology data={data[index].Technology} /> : ""}</Box>
      </StyledDialogContent>
      <StyledDialogActions>
        <StyledIconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </StyledIconButton>
      </StyledDialogActions>
    </Dialog>
  );
};
