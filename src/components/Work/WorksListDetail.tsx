import React, { Fragment } from "react";

import { Avatar, ListItem, ListItemAvatar, ListItemProps, ListItemText } from "@mui/material";
import { motion } from "framer-motion";
import { Work } from "../../types/portfoliotypes";
import { getImageUrl } from "../../utils/getimage";

const ListItemLink = (props: ListItemProps<"a", { button?: true }>) => <ListItem button component="a" {...props} />;

export interface WorksListDetailProps {
  index: number;
  data: Work;
  handleOpen: (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => void;
}

export const WorksListDetail = (props: WorksListDetailProps) => {
  const { index, data, handleOpen } = props;
  return (
    <Fragment key={data.Name}>
      <motion.div
        animate={{ scale: [0, 1] }}
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <ListItem
          onClick={(event) => {
            handleOpen(event, index);
          }}
        >
          <ListItemLink>
            <ListItemAvatar>
              <Avatar>
                <img src={`${getImageUrl(data.ImgPath)}`} alt={data.Name} width="100%" height="auto" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={data.Name} secondary={data.OverView} />
          </ListItemLink>
        </ListItem>
      </motion.div>
    </Fragment>
  );
};
