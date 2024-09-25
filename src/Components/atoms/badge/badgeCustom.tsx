import React from 'react';
import styles from "./badgeCustom.module.css";
import { Typography } from '@mui/material';

interface BadgeCustomProps {
    label: string
}

function BadgeCustom({ label }: BadgeCustomProps) {
  return (
    <section className={styles.Badge}>
      <Typography variant='body2' align='center'>
        {label}
      </Typography>
    </section>
  )
}

export default BadgeCustom;