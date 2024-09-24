import styles from "./hero.module.css";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FadeInSection from "../../utils/animations/fadeIn";

function Hero() {
  
  return (
    <section className={styles.Hero} id="Hero">
      <FadeInSection animationType="down" className={styles.Hero}>
        <Typography variant="h1" align="center" className="Title" id={styles.Title} sx={{ fontWeight: 600 }}>Gabriella Guimarães</Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ fontStyle: "italic" }}
        >
          FullStack Developer
        </Typography>
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid size={4}>
            <a
              href="https://github.com/gabriella-guimaraes"
              target="blank"
              color="text.primary"
              className={styles.Icon}
            >
              <GitHubIcon fontSize="large" className={styles.Icon} />
            </a>
          </Grid>
          <Grid size={4}>
            <a
              href="https://www.linkedin.com/in/gabriella-guimaraes"
              target="blank"
              color="text.primary"
              className={styles.Icon}
            >
              <LinkedInIcon fontSize="large" className={styles.Icon} />
            </a>
          </Grid>
          <Grid size={4}>
            <a
              href="mailto:gabriellaguimaraes01@outlook.com"
              target="blank"
              color="text.primary"
              className={styles.Icon}
            >
              <EmailIcon fontSize="large" className={styles.Icon} />
            </a>
          </Grid>
        </Grid>
      </FadeInSection>
    </section>
  );
}

export default Hero;