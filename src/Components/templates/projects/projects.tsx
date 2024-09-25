import React from 'react';
import styles from "./projects.module.css";
import ProjectsGroup from '../../organisms/projectsGroup/projectsGroup';

function Projects() {
  return (
    <section className={styles.Projects} id="Projects">
        <ProjectsGroup />
    </section>
  )
}

export default Projects;