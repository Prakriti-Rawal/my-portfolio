import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import PropTypes from "prop-types";
import type { Project } from "../data/portfolio-data";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <Card
    sx={{
      maxWidth: 345,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      borderRadius: 2,
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease-in-out",
      background: "linear-gradient(145deg, #ffffff, #f5f5f5)",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
      },
    }}
  >
    <CardContent
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        p: 3,
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 1,
        }}
      >
        <Box
          sx={{
            width: 4,
            height: 24,
            bgcolor: "primary.main",
            borderRadius: 1,
          }}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 700,
            color: "text.primary",
            fontSize: "1.25rem",
          }}
        >
          {project.title}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          textOverflow: "ellipsis",
          lineHeight: 1.6,
          fontSize: "0.95rem",
        }}
      >
        {project.description}
      </Typography>
      <Box
        sx={{
          mt: "auto",
          pt: 2,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          fullWidth
          sx={{
            textTransform: "none",
            fontWeight: 600,
            py: 1.2,
            borderRadius: 2,
            boxShadow: "none",
            "&:hover": {
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transform: "translateY(-2px)",
              transition: "all 0.2s ease-in-out",
            },
          }}
        >
          View Project
        </Button>
      </Box>
    </CardContent>
  </Card>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
