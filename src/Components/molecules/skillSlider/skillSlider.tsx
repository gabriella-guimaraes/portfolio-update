import React from 'react';
import styles from "./skillSlider.module.css";
import Grid from '@mui/material/Grid2';
import Skill from '../../atoms/skill/skill';

const hardSkills = [
    {
        id: 1,
        name: "HTML",
        level: 95
    },
    {
        id: 2,
        name: "CSS",
        level: 90
    },
    {
        id: 3,
        name: "JavaScript",
        level: 85
    },
    {
        id: 4,
        name: "Typescript",
        level: 80
    },
    {
        id: 5,
        name: "React",
        level: 80
    },
    {
        id: 6,
        name: "Next.js",
        level: 78
    },
    {
        id: 7,
        name: "Angular",
        level: 75
    },
    {
        id: 8,
        name: "Node.js",
        level: 70
    },
    {
        id: 9,
        name: "C#",
        level: 65
    },
    {
        id: 10,
        name: ".Net",
        level: 60
    },
    {
        id: 11,
        name: "Python",
        level: 45
    },
    {
        id: 12,
        name: "SQL",
        level: 75
    },
    {
        id: 13,
        name: "Oracle",
        level: 75
    },
    {
        id: 14,
        name: "MongoDB",
        level: 70
    },
    {
        id: 15,
        name: "Firebase",
        level: 60
    },
    {
        id:16,
        name: "Git & GitHub",
        level: 97
    }
]

function SkillSlider() {
  return (
    <section className={styles.SkillSlider}>
        <Grid container alignItems="center">
            {hardSkills.map((skill) => (
                <Grid key={skill.id} size={12}>
                    <Skill name={skill.name} level={skill.level} />
                </Grid>
            ))}
        </Grid>
    </section>
  )
}

export default SkillSlider;