import React from 'react';
import styles from "./contact.module.css";
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SocialMedia from '../../molecules/socialMedia/socialMedia';

function Contact() {
  return (
    <section className={styles.Contact} id="Contact">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid size={{ xs:12, md: 6 }} className={styles.left}>
          <Typography variant='h1' id="title">Contato</Typography>
          <Typography variant='body1' gutterBottom sx={{ paddingRight: 4 }}>Estou sempre em busca de novos desafios e oportunidades para criar algo incrível. Se você tem uma ideia, um projeto ou apenas quer trocar uma ideia sobre tecnologia, design ou desenvolvimento, estou aqui para ouvir. Vamos transformar suas ideias em realidade!</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }} className={styles.socialMedia}>
          <SocialMedia light={true} />
        </Grid>
      </Grid>
    </section>
  )
}

export default Contact;