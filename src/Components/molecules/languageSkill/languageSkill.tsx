import React from 'react';
import styles from "./languageSkill.module.css";
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import Language from '../../atoms/language/language';

function LanguageSkill() {
  return (
    <section className={styles.LanguageSkill}>
        <Typography variant='h5' align='center' gutterBottom>Idiomas</Typography>
        <Grid container spacing={3} alignItems="center" justifyContent="space-around">
            <Grid size={4}>
                <Language language="Português" level="Nativo" />
            </Grid>
            <Grid size={4}>
                <Language language="Inglês" level="Avançado" />
            </Grid>
            <Grid size={4}>
                <Language language="Espanhol" level="Intermediário" />
            </Grid>
        </Grid>
    </section>
  )
}

export default LanguageSkill;