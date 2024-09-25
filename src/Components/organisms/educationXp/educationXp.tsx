import React from 'react';
import styles from "./educationXp.module.css";
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Timeline from '../../molecules/timeline/timeline';

function EducationXp() {

  return (
    <section className={styles.EducationXp}>
        <Grid container alignItems="center">
            <Grid size={10}>
                <Typography variant="h3" gutterBottom>Treinamentos e Educação</Typography>
            </Grid>
            <Grid size={12}>
                <Timeline title="Graduação - Análise e Desenvolvimento de Sistemas" date="Universidade Anhembi Morumbi (cursando) | conclusão 2024" description="Minha formação em Análise e Desenvolvimento de Sistemas é focada no desenvolvimento completo de soluções tecnológicas, desde o planejamento e criação até a manutenção de sistemas de informação. Durante o curso, desenvolvi habilidades essenciais como raciocínio lógico, resolução de problemas, trabalho em equipe e comunicação, permitindo-me atuar de forma colaborativa e eficaz em projetos de tecnologia." />
            </Grid>
            <Grid size={12}>
                <Timeline title="Desenvolvimento WEB - Avançado" date="Udemy (cursando) | Setembro 2024" description="Neste curso, aprofundei meus conhecimentos em desenvolvimento web, utilizando tecnologias como HTML, CSS, JavaScript, JQuery, React.js, Web APIs, Python, Django e Wagtail. Tive a oportunidade de explorar linguagens de programação avançadas para a web e adquirir experiência com o framework Django." />
            </Grid>
            <Grid size={12}>
                <Timeline title="Desenvolvimento BackEnd" date="Alura | conclusão Agosto 2022" description="Com foco em introdução ao desenvolvimento back-end, esta trilha de cursos incluiu programação orientada a objetos com C# e .Net, além de práticas com bancos de dados SQL Server, MySQL e Oracle. O curso me preparou para desenvolver e gerenciar servidores e banco de dados com eficiência." />
            </Grid>
            <Grid size={12}>
                <Timeline title="Bootcamp Desenvolvimento FrontEnd" date="Laboratória | conclusão Maio 2021" description="No bootcamp focado em desenvolvimento Front-End, participei de projetos utilizando JavaScript, HTML5, CSS3, React.js, Material UI, Jest e Node.js. Durante o curso, refinei minhas habilidades de autoaprendizagem e desenvolvi competências socio-emocionais como resiliência, trabalho em equipe, comunicação e metodologias ágeis, essenciais para o sucesso em ambientes de desenvolvimento dinâmicos." />
            </Grid>
        </Grid>
    </section>
  )
}

export default EducationXp;