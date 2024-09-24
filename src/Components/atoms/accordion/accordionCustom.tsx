import React from "react";
import styles from "./accordionCustom.module.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";

interface AccordionCustomProps {
  title: string;
  description: string;
}

function AccordionCustom({ title, description }: AccordionCustomProps) {
  return (
    <section>
      <Accordion className={styles.Accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlined className={styles.expandIcon} />}
        >
          <Typography variant="h6">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="textSecondary">
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}

export default AccordionCustom;