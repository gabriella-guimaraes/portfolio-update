import React from "react";
import styles from "./projectCard.module.css";
import Grid from "@mui/material/Grid2";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import BadgeCustom from "../../atoms/badge/badgeCustom";

interface ProjectCardProps {
    title: string;
    description: string;
    badge: string[];
    image: string;
    link: string
}

function ProjectCard({ title, description, image, badge, link }: ProjectCardProps) {
  return (
    <section className={styles.ProjectCard}>
      <a href={link} target="blank" className={styles.redirect}>
        <Card className={styles.card}>
          <CardActionArea>
            <Grid container>
              {/* Imagem à esquerda */}
              <Grid size={{ xs: 12, md: 4 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={image}
                  alt="Imagem do projeto"
                />
              </Grid>
              {/* Título e texto à direita */}
              <Grid size={{ xs: 12, md: 8 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {description}
                  </Typography>
                  <Grid container alignItems="center" justifyContent="space-between" sx={{ marginTop: 2 }}>
                    {badge.map((items) => (
                      <Grid size={{ xs: 5, md: 3 }} key={items}>
                        <BadgeCustom label={items} />
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </a>
    </section>
  );
}

export default ProjectCard;
