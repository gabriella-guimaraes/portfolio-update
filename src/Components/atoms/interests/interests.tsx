import React from 'react';
import styles from "./interests.module.css";
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

function Interests() {
  return (
    <section className={styles.Interests}>
        <Grid container alignItems="center">
            <Grid size={12}>
                <Typography variant='h5' gutterBottom>Áreas de Interesse</Typography>
            </Grid>
            <Grid size={12}>
                <Typography variant='body1' gutterBottom>Desenvolvimento Web</Typography>
            </Grid>
            <Grid size={12}>
                <Typography variant='body1' gutterBottom>Desenvolvimento FullStack</Typography>
            </Grid>
            <Grid size={12}>
                <Typography variant='body1' gutterBottom>Engenharia de SoftWare</Typography>
            </Grid>
            <Grid size={12}>
                <Typography variant='body1' gutterBottom>TI</Typography>
            </Grid>
        </Grid>
    </section>
  )
}

export default Interests;