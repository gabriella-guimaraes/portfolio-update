import React from 'react';
import styles from "./hobbies.module.css";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BrushIcon from '@mui/icons-material/Brush';
import FlightIcon from '@mui/icons-material/Flight';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

function Hobbies() {
    
  return (
    <section className={styles.Hobbies}>
        <Grid container alignItems="center" justifyContent="center">
            <Grid size={12}>
                <Typography variant='h5' gutterBottom>Hobbies</Typography>
            </Grid>
            <Grid size={4}>
                <SportsEsportsIcon sx={{ fontSize: 60, marginLeft: 1 }} />
                <Typography variant='body2' gutterBottom sx={{ fontStyle: "italic" }}>Video Games</Typography>
            </Grid>
            <Grid size={4}>
                <BrushIcon sx={{ fontSize: 60, marginLeft: 1 }} />
                <Typography variant='body2' gutterBottom sx={{ fontStyle: "italic" }}>Arte Digital</Typography>
            </Grid>
            <Grid size={4}>
                <FlightIcon sx={{ fontSize: 60 }} />
                <Typography variant='body2' gutterBottom sx={{ fontStyle: "italic" }}>Viagens</Typography>
            </Grid>
        </Grid>
    </section>
  )
}

export default Hobbies;