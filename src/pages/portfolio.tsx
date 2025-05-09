import { useState } from "react";
import { motion } from "framer-motion";

import {
  Box,
  Grid,
  Stack,
  Button,
  useTheme,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { Iconify } from "../components/iconify";
import { Footer } from "../components/portfolio/footer";
import { Section } from "../components/portfolio/section";
import { Timeline } from "../components/portfolio/timeline";
import { PortfolioCard } from "../components/portfolio/card";

import ProjectCard from "../components/ProjectCard";
import { portfolioData } from "../data/portfolio-data";
import EducationCard from "../components/EducationCard";

export default function PortfolioPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        pb: { xs: 7, md: 0 },
        ml: { lg: "var(--layout-nav-vertical-width)" },
      }}
    >
      {/* Header Section */}
      <Box
        id="header"
        sx={{
          height: { xs: "100vh", md: "100vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          bgcolor: "background.paper",
          backgroundImage: "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)",
          color: "common.white",
          position: "relative",
          overflow: "hidden",
          px: { xs: 3, sm: 4, md: 0 },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("/assets/images/pattern.svg")',
            opacity: 0.1,
            animation: "pulse 4s ease-in-out infinite",
          },
          "@keyframes pulse": {
            "0%": { opacity: 0.1 },
            "50%": { opacity: 0.15 },
            "100%": { opacity: 0.1 },
          },
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                px: { xs: 2, sm: 0 },
              }}
            >
              {portfolioData.name}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                opacity: 0.9,
                fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.75rem" },
                textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                px: { xs: 2, sm: 0 },
              }}
            >
              {portfolioData.title}
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              sx={{ width: "100%", px: { xs: 2, sm: 0 } }}
            >
              <Button
                variant="contained"
                color="primary"
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<Iconify icon="mdi:github" />}
                fullWidth={isMobile}
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<Iconify icon="mdi:linkedin" />}
                fullWidth={isMobile}
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: theme.shadows[8],
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                LinkedIn
              </Button>
              <Button
                variant="contained"
                color="secondary"
                href="/assets/Data Enthusiast- Prakriti.pdf"
                download
                startIcon={<Iconify icon="mdi:file-pdf-box" />}
                fullWidth={isMobile}
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                Download Resume
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* About Section */}
      <Section id="about" title="About Me" bgColor="default">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={portfolioData.profileImage}
              alt="Profile"
              sx={{
                width: "100%",
                maxWidth: { xs: 240, md: 280 },
                borderRadius: 4,
                boxShadow: theme.shadows[10],
                transform: "rotate(-2deg)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "rotate(0deg) scale(1.02)",
                  boxShadow: theme.shadows[16],
                },
                mx: "auto",
                display: "block",
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 2,
                bgcolor: "background.paper",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 2,
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
                  zIndex: 1,
                },
              }}
            >
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  color: "text.primary",
                  position: "relative",
                  zIndex: 2,
                  "&::first-letter": {
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    fontWeight: "bold",
                    color: "primary.main",
                    float: "left",
                    lineHeight: 1,
                    mr: 1,
                    mt: 1,
                  },
                }}
              >
                {portfolioData.about}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects" bgColor="paper">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {portfolioData.projects.slice(0, visibleProjects).map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
        {visibleProjects < portfolioData.projects.length && (
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Button
              variant="outlined"
              onClick={loadMoreProjects}
              size="large"
              startIcon={<Iconify icon="mdi:plus" />}
              sx={{
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: theme.shadows[8],
                },
              }}
            >
              Load More Projects
            </Button>
          </Box>
        )}
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education" bgColor="default">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {portfolioData.education.map((edu) => (
            <Grid item xs={12} sm={6} md={4} key={edu.id}>
              <EducationCard education={edu} />
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience" bgColor="paper">
        <Timeline items={portfolioData.experience} />
      </Section>

      {/* Technologies Section */}
      <Section id="technologies" title="Technologies" bgColor="default">
        <Grid container spacing={{ xs: 1.5, md: 2 }}>
          {portfolioData.technologies.map((tech) => (
            <Grid item xs={6} sm={4} md={3} key={tech.id}>
              <PortfolioCard
                title={tech.name}
                image={tech.icon}
                sx={{
                  p: { xs: 1.5, md: 3 },
                  textAlign: "center",
                  "& .MuiCardMedia-root": {
                    width: { xs: "32px", md: "40px" },
                    height: { xs: "32px", md: "40px" },
                    margin: "0 auto",
                    objectFit: "contain",
                  },
                  "& .MuiTypography-h6": {
                    fontSize: { xs: "0.8rem", md: "0.9rem" },
                    mt: 1,
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Footer */}
      <Footer contact={portfolioData.contact} />
    </Box>
  );
}
