import React from 'react'
import styles from "./projectsGroup.module.css";
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import FadeInSection from '../../utils/animations/fadeIn';
import ProjectCard from '../../molecules/projectCard/projectCard';
import movie from "../../../assets/movie-browser-snippet.png"
import socialNetwork from "../../../assets/should_I_watch_snapshoot.png";
import assistant from "../../../assets/livreiro_snapshoot.png";
import api from "../../../assets/API_default_snippet.png";

const project = [
    {
        id: 1,
        title: "Movie Browser",
        description: "Movie Browser é uma aplicação que tem como objetivo auxiliar os usuários a escolher e descobrir filmes. O projeto foi desenvolvido durante o curso The Ultimate Fullstack Web Development Bootcamp utilizando React.js e Bootstrap para oferecer uma experiência de usuário fluida e envolvente. O Movie Browser possui integração com a API do The Movie Database (TMDB). Essa APi robusta serve como espinha dorsal, garantindo um amplo catálogo de filmes constantemente atualizado com informações detalhadas, classificações e avaliações.",
        badge: ["HTML", "CSS", "Javascript", "React", "Bootstrap"],
        img: movie,
        link: "https://github.com/gabriella-guimaraes/movie-browser"
    },
    {
        id: 2,
        title: "Rede Social - Should I Watch?",
        description: "Should I Watch? é uma rede social voltada principalmente ao público jovem e que tem como objetivo ajudá-los a escolher o que assistir entre as milhares de opções dos catálogos dos serviços de streaming. A ideia é que o usuário compartilhe, por meio de posts curtos e diretos, quais foram suas impressões sobre os últimos filmes e séries assistidos.",
        badge: ["HTML", "CSS", "Javascript", "Firebase"],
        img: socialNetwork,
        link: "https://github.com/anaclara-gf/SAP005-social-network"
    },
    {
        id: 3,
        title: "Assistente Virtual Livreiro",
        description: "Esse projeto foi proposto pela Laboratoria, com o objetivo de desenvolver um produto no ramo de entretenimento utilizando APIs. O Livreiro foi o produto desenvolvido durante os dois dias de Hackathon. Uma pesquisa sobre o mercado de livros revelou um problema recorrente na experiência dos frequentadores de livrarias, relacionado à falta de autonomia para encontrar informações sobre os produtos desejados e à demora no atendimento presencial. Em resposta, desenvolvemos o assistente virtual Livreiro, direcionado às livrarias, que permite aos clientes pesquisar informações diretamente e verificar a disponibilidade dos produtos na loja, proporcionando uma solução para esses desafios.",
        badge: ["HTML", "CSS", "Javascript"],
        img: assistant,
        link: "https://github.com/gabriella-guimaraes/Livreiro"
    },
    {
        id: 4,
        title: "Games API",
        description: "A Games Wiki API é uma aplicação desenvolvida com Node.js, Express, Typescript e MongoDB, criada durante o curso de Typescript Avançado na Udemy. Esta API oferece endpoints RESTful para acesso e gerenciamento de informações sobre uma variedade de jogos, com suporte para operações CRUD. Integrando Typescript para segurança e produtividade, juntamente com MongoDB para armazenamento eficiente. A Interface para a Games API está em desenvolvimento!",
        badge: ["API", "Node.js", "Express", "Typescript", "MongoDB"],
        img: api,
        link: "https://github.com/gabriella-guimaraes/games-api"
    }
]

function ProjectsGroup() {
  return (
    <section className={styles.ProjectsGroup}>
        <FadeInSection animationType='down'>
            <Typography variant="h2" align="center" gutterBottom>MEUS PROJETOS</Typography>
        </FadeInSection>
        <Grid container spacing={5} alignItems="flex-start" justifyContent="space-evenly" className={styles.cards}>
            {project.map((info) => (
                <Grid size={10} key={info.id}>
                        <FadeInSection animationType='up'>
                            <ProjectCard link={info.link} image={info.img} title={info.title} description={info.description} badge={info.badge} />
                        </FadeInSection>
                    </Grid>
            ))}
        </Grid>
    </section>
  )
}

export default ProjectsGroup;