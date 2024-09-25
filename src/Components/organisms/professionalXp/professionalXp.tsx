import React from 'react';
import styles from "./professionalXp.module.css";
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Timeline from '../../molecules/timeline/timeline';

function ProfessionalXp() {

  return (
    <section className={styles.ProfessionalXp}>
        <Grid container alignItems="center">
            <Grid size={12}>
                <Typography variant="h3" gutterBottom>Experiência Profissional</Typography>
            </Grid>
            <Grid size={12}>
                <Timeline title="Desenvolvedora Web Pleno" date="Freelancer (atual)" description="Como Desenvolvedora Web Pleno freelancer, me especializei na criação de soluções personalizadas para diversos tipos de projetos, como landing pages, páginas institucionais, e-commerce e portfólios. Meu trabalho incluiu tanto a atualização de conteúdos existentes quanto a criação de designs exclusivos, com foco em branding, garantindo que as marcas dos meus clientes fossem representadas de maneira única e impactante. Utilizo uma variedade de tecnologias e ferramentas modernas para oferecer soluções modernas e eficientes, atendendo às necessidades específicas de cada cliente." technologies="HTML, CSS, JavaScript, Typescript, React, NextJS, Angular, Material UI, Bootstrap, pacote Adobe e Figma." />
            </Grid>
            <Grid size={12}>
                <Timeline title="Analista de Desenvolvimento Jr no Safra" date="Maio 2021 - Dezembro 2022" description="O Safra é um dos maiores bancos privados da América Latina, com mais de 160 sedes espalhadas pelo mundo e impactando diariamente a vida de milhões de pessoas. Atuei no squad de Renda Variável que pertence a área de Corretora do Banco. Como Analista de Desenvolvimento minhas responsabilidades incluíram desenvolvimento de novas features para sistemas da corretora, manutenção e sustentação para a Corretora e Renda Variável. Neste período pude desenvolver noções de negócio e processos bancários, aprimorando o senso crítico e atitude de dono. Além disso, participei de treinamentos internos do Banco voltados para boas práticas de código e desenvolvimento seguro." technologies="HTML, CSS, Angular, Material UI, Bootstrap, Typescript, SQL, Oracle, .Net, ASP Net, Jenkins, Jest." />
            </Grid>
            <Grid size={12}>
                <Timeline title="Web Designer" date="Agosto 2018 - Setembro 2019" description="Como Web Designer freelancer, me dediquei à criação de projetos visuais, incluindo portfólios, artes conceituais, desenhos personalizados, logos e edições de imagens para redes sociais. Aprimorei minha capacidade analítica ao compreender as necessidades e desejos dos clientes, traduzindo conceitos abstratos em soluções visuais tangíveis. Essa jornada não só refinou minhas habilidades técnicas, mas também moldou minha abordagem em relação às demandas do universo criativo." technologies="Adobe Suite, PowerPoint, Clip Studio, Figma." />
            </Grid>
        </Grid>
    </section>
  )
}

export default ProfessionalXp;