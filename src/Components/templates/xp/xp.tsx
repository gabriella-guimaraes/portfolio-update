import React from 'react';
import styles from "./xp.module.css";
import Grid from '@mui/material/Grid2';
import ProfessionalXp from '../../organisms/professionalXp/professionalXp';
import EducationXp from '../../organisms/educationXp/educationXp';

function Xp() {
  return (
    <section className={styles.XpEducation}>
        <Grid container alignItems="center">
            <Grid size={12} id="ProfessionalXp" >
                <ProfessionalXp />
            </Grid>
            <Grid size={12} id="EducationXp" sx={{ marginTop: 10 }}>
              <EducationXp />
            </Grid>
        </Grid>
    </section>
  )
}

export default Xp;