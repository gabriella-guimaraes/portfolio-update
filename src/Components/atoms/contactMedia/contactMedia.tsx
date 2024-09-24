import React from "react";
import styles from "./contactMedia.module.css";
import { Box, SvgIconProps, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface ContactMediaProps extends SvgIconProps {
  IconComponent: React.ComponentType<SvgIconProps>;
  label: string;
  link: string;
  light?: boolean;
}

function ContactMedia({ IconComponent, label, link, light= false }: ContactMediaProps) {
  const className = `${styles.textDark} ${light ? styles.textLight : ''}`;
  return (
    <section className={styles.ContactMedia}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid size={12}>
          <a href={link} target="blank" className={className}>
          <Box display="flex" alignItems="center" gap={1}>
            <IconComponent className={styles.Icon} />
            <Typography variant="body1" gutterBottom>
              {label}
            </Typography>
          </Box>
          </a>
        </Grid>
      </Grid>
    </section>
  );
}

export default ContactMedia;