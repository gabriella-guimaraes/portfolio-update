import React from 'react';
import styles from "./socialMedia.module.css";
import Grid from '@mui/material/Grid2';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ContactMedia from '../../atoms/contactMedia/contactMedia';

interface SocialMediaProps {
    light?: boolean;
}

function SocialMedia({ light= false }: SocialMediaProps) {
    
  return (
    <section className={styles.SocialMedia}>
        <Grid container alignItems="center" justifyContent="center">
            <Grid size={12}>
                <ContactMedia IconComponent={GitHubIcon} label='gabriella-guimaraes' link='https://github.com/gabriella-guimaraes' light={light} />
            </Grid>
            <Grid size={12}>
                <ContactMedia IconComponent={LinkedInIcon} label='gabriella-guimaraes' link='https://www.linkedin.com/in/gabriella-guimaraes' light={light} />
            </Grid>
            <Grid size={12}>
                <ContactMedia IconComponent={EmailIcon} label='gabriellaguimaraes01@outlook.com' link='mailto:gabriellaguimaraes01@outlook.com' light={light} />
            </Grid>
        </Grid>
    </section>
  )
}

export default SocialMedia;