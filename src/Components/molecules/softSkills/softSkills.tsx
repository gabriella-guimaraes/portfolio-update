import React from "react";
import styles from "./softSkills.module.css";
import Grid from "@mui/material/Grid2";
import AccordionCustom from "../../atoms/accordion/accordionCustom";

const skills = [
    {
        id: 1,
        title: "Comunicação assertiva",
        description: "Expresso minhas ideias e opiniões de forma clara, direta e respeitosa. Sou capaz de transmitir informações de maneira eficaz, garantindo entendimento mútuo e evitando ruídos na comunicação."
    },
    {
        id: 2,
        title: "Trabalho em equipe",
        description: "Demonstro habilidade em colaborar efetivamente com colegas para alcançar objetivos comuns. Contribuo ativamente em grupos, comunicando-me de forma clara e ouvindo as ideias dos outros, contribuindo para um ambiente de trabalho harmonioso e produtivo."
    },
    {
        id: 3,
        title: "Resiliência",
        description: "Enfrento desafios e adversidades com determinação e flexibilidade. Mantenho a calma e a perspectiva diante de obstáculos, aprendendo com as experiências e buscando soluções construtivas para superá-los."
    },
    {
        id: 4,
        title: "Inteligência emocional",
        description: "Gerencio minhas emoções de forma consciente e empática, tanto em situações de estresse quanto de sucesso. Consigo reconhecer e lidar com as emoções dos outros de maneira empática e construtiva, promovendo relacionamentos saudáveis e colaborativos."
    },
    {
        id: 5,
        title: "Proatividade",
        description: "Antecipo problemas e oportunidades, tomando iniciativa para resolvê-los e/ou aproveitá-los. Estou sempre em busca de maneiras de contribuir para o sucesso da equipe e da organização, agindo com autonomia e senso de responsabilidade."
    },
    {
        id: 6,
        title: "Atitude de dono",
        description: "Assumo responsabilidade pelos meus projetos e resultados, agindo com comprometimento e dedicação. Busco constantemente formas de melhorar processos e resultados, identificando oportunidades de crescimento e agindo de acordo com os objetivos da equipe e/ou organização."
    },
    {
        id: 7,
        title: "Adaptabilidade",
        description: "Demonstro flexibilidade e capacidade de me ajustar a mudanças e novas situações. Sou capaz de manter o desempenho em ambientes dinâmicos, ajustando-me rapidamente a novas demandas, tecnologias ou processos."
    }
]

function SoftSkills() {
  return (
    <section className={styles.SoftSkills}>
      <Grid container spacing={1} alignItems="center">
        {skills.map((skill) => (
            <Grid size={12} key={skill.id}>
                <AccordionCustom title={skill.title} description={skill.description} />
            </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default SoftSkills;