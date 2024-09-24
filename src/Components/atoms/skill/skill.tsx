import React from 'react';
import styles from "./skill.module.css";
import Grid from '@mui/material/Grid2';
import { Slider, Typography } from '@mui/material';

interface SkillProps {
    name: string,
    level: number
}

function Skill({ name, level }: SkillProps) {
  return (
    <section className={styles.Skill}>
        <Grid container alignItems="center" justifyContent="space-evenly">
            <Grid size={4}>
                <Typography variant="body1" gutterBottom>{name}</Typography>
            </Grid>
            <Grid size={8}>
                <Slider disabled defaultValue={level} color="primary" />
            </Grid>
        </Grid>
    </section>
  )
}

export default Skill;