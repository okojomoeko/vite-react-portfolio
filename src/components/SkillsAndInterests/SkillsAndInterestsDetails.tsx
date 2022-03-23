import { Box, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FadeIn from "react-fade-in";
import { motion } from "framer-motion";

const StyledCard = styled(Card)({
  // width: "100%",
});
const StyledCardContent = styled(CardContent)({
  width: "100%",
  maxWidth: "400px",
});

const StyledBox = styled(Box)({
  // width: "400px",
});

export interface SkillsAndInterestsDetailProps {
  title: string;
  listData: string[];
}

export const SkillsAndInterestsDetail = (props: SkillsAndInterestsDetailProps) => {
  const { title, listData } = props;

  let descList = "/";
  // eslint-disable-next-line no-restricted-syntax
  for (const description of listData) {
    descList += ` ${description} / `;
  }

  const retComponent = (
    <StyledBox p={1}>
      <motion.div
        animate={{ scale: [0, 1] }}
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <StyledCard>
          <StyledCardContent>
            <Typography variant="h6">{title}</Typography>
            <Typography color="textSecondary">{descList}</Typography>
          </StyledCardContent>
        </StyledCard>
      </motion.div>
    </StyledBox>
  );

  return <FadeIn>{retComponent}</FadeIn>;
};
