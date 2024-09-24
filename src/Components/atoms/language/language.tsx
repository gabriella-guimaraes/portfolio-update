import React from 'react';
import styles from "./language.module.css";
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

interface LanguageProps {
    language: string,
    level: string
}

function Language({ language, level }: LanguageProps) {
  return (
    <section className={styles.Language}>
        <Grid container alignItems="center">
            <Grid size={12}>
                <Typography variant="body1" align='center'>{language}</Typography>
            </Grid>
            <Grid size={12}>
                <Typography variant='body2' align='center' sx={{ fontStyle: "italic" }}>{level}</Typography>
            </Grid>
        </Grid>
    </section>
  )
}

export default Language;