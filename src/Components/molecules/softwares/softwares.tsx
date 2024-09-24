import React from 'react';
import styles from "./softwares.module.css";
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import AfterEffects from '../../atoms/icons/afterEffects';
import Figma from '../../atoms/icons/figma';
import Photoshop from '../../atoms/icons/photoshop';
import Illustrator from '../../atoms/icons/illustrator';

function Softwares() {
  return (
    <section className={styles.Softwares}>
        <Typography variant='h5' align='center' gutterBottom>Softwares</Typography>
        <Grid container spacing={2} alignItems="center" justifyContent="space-evenly">
            <Grid size={3}>
                <AfterEffects />
            </Grid>
            <Grid size={3}>
                <Figma />
            </Grid>
            <Grid size={3}>
                <Photoshop />
            </Grid>
            <Grid size={3}>
                <Illustrator />
            </Grid>
        </Grid>
    </section>
  )
}

export default Softwares;