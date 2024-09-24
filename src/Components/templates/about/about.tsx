import React from 'react';
import styles from "./about.module.css";
import Grid from '@mui/material/Grid2';
import { Divider, Typography } from '@mui/material';
import profile from "../../../assets/profile-pic-portfolio-bg-dark.png";
import FadeInSection from '../../utils/animations/fadeIn';
import SocialMedia from '../../molecules/socialMedia/socialMedia';
import Hobbies from '../../atoms/hobbies/hobbies';
import GradientTitle from '../../atoms/gradientTitle/gradientTitle';
import Interests from '../../atoms/interests/interests';

function About() {

  return (
    <section className={styles.About} id="About">
        <FadeInSection animationType='up'>
            <Grid container justifyContent="space-around" alignItems="center">
                <Grid size={{ sm: 12, md:5 }} alignSelf="center">
                    <img src={profile} alt="profile pic" className={styles.Img} />
                </Grid>

                <Grid size={{ sm: 12, md:6 }} className={styles.text}>
                    <GradientTitle text="Hello There" id={styles.title} />
                    <Typography variant='body1' align='justify'>Apaixonada por desenvolvimento web e design desde os 17 anos, brasileira e nascida em 2001. Sou uma Desenvolvedora FullStack dedicada a criar soluções completas e eficientes para clientes e usuários. Tenho experiência em desenvolvimento de aplicações web, desde a criação de interfaces do usuário responsivas e dinâmicas até a configuração de APIs e conexão com banco de dados. Sou capaz de trabalhar em equipe, colaborar com outros desenvolvedores e solucionar problemas de forma eficaz. Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente e contribuir para projetos inovadores e de impacto. Determinação, resiliência, constante busca por conhecimento, empatia, atitude de dono, proatividade, adaptabilidade, comunicação, inteligência emocional e muito amor por tudo que faço complementam meu perfil pessoal e profissional.</Typography>
                </Grid>

            </Grid>
            <Grid container justifyContent="space-evenly" alignItems="flex-start" className={styles.Personal}>
                <Grid size={{ sm: 12, md: 4 }} className={styles.container}>
                    <SocialMedia />
                </Grid>
                <Grid size={{ sm: 12, md: 4 }} className={styles.container}>
                    <Interests />
                </Grid>
                <Grid size={{ sm: 12, md: 4 }} className={styles.container}>
                    <Hobbies />
                </Grid>
                <Grid size={12} className={styles.location}>
                    <Divider textAlign='left' sx={{ color: 'var(--text-dark)' }}>
                        <Typography variant='subtitle2' sx={{ fontStyle: "italic" }}>São Paulo, Brasil</Typography>
                    </Divider>
                </Grid>
            </Grid>
        </FadeInSection>
    </section>
  )
}

export default About;