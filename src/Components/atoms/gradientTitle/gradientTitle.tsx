import { Typography, TypographyProps } from '@mui/material';
import React from 'react';
import styles from "./gradientTitle.module.css";

interface TitleProps extends TypographyProps {
    text: string;
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    light?: boolean;
}

function GradientTitle({text, align = 'inherit', light= false}: TitleProps) {
  // Condicionalmente defini as classes CSS
  const className = `${styles.Title} ${light ? styles.light : ''}`;
  return (
    <Typography variant='h2' align={align} sx={{ fontWeight: 600 }} gutterBottom className={className}>{text}</Typography>
  )
}

export default GradientTitle;