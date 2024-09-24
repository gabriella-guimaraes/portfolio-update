import React from "react";
import styles from "./skills.module.css";
import Grid from "@mui/material/Grid2";
import FadeInSection from "../../utils/animations/fadeIn";
import GradientTitle from "../../atoms/gradientTitle/gradientTitle";
import SkillSlider from "../../molecules/skillSlider/skillSlider";
import Softwares from "../../molecules/softwares/softwares";
import LanguageSkill from "../../molecules/languageSkill/languageSkill";
import SoftSkills from "../../molecules/softSkills/softSkills";

function Skills() {
  return (
    <section className={styles.Skills} id="Skills">
      <FadeInSection animationType="down">
        <Grid container alignItems="center" justifyContent="space-around">
          <Grid size={{ xs: 12, md: 6 }} className={styles.title}>
            <GradientTitle text="Hard Skills" light={true} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} className={styles.top}>
            <SkillSlider />
          </Grid>
        </Grid>
      </FadeInSection>

      <FadeInSection animationType="up">
        <Grid
          container
          alignItems="flex-start"
          justifyContent="space-around"
          className={styles.bottom}
        >
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Softwares />
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <LanguageSkill />
          </Grid>
        </Grid>
      </FadeInSection>

      {/* SoftSkills */}
      <FadeInSection animationType="down">
        <Grid
          container
          alignItems="center"
          justifyContent="space-around"
          className={styles.SoftSkills}
        >
          <Grid size={{ xs: 12, md: 6 }} className={styles.SoftSkillsTitle}>
            <SoftSkills />
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            className={styles.title}
            id={styles.softSkills}
          >
            <GradientTitle text="Soft Skills" light={true} />
          </Grid>
        </Grid>
      </FadeInSection>
    </section>
  );
}

export default Skills;
