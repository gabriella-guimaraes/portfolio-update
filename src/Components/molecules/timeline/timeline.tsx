import React from 'react'
import styles from "./timeline.module.css";
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

interface TimelineProps {
    title: string;
    date: string;
    description: string;
    technologies?: string;
}

function Timeline({ title, date, description, technologies }: TimelineProps) {
  return (
    <section className={styles.Timeline}>
        <div className={styles.dot}></div>
        <Grid container alignItems="center" className={styles.container}>
            <Grid size={12}>
                <Typography variant="h5">{title}</Typography>
            </Grid>
            <Grid size={12}>
                <Typography variant="body1" gutterBottom sx={{ fontStyle: "italic" }}>{date}</Typography>
            </Grid>
            <Grid size={12}>
                <Typography variant="body1" gutterBottom>{description}</Typography>
            </Grid>

            {technologies && (
                <Grid size={12}>
                    <Typography variant="body2">Tecnologias: {technologies}</Typography>
                </Grid>
            )}
        
        </Grid>
    </section>
  )
}

export default Timeline;