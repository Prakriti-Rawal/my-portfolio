import { Card, CardContent, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import type { Education } from "../data/portfolio-data";

interface EducationCardProps {
  education: Education;
}

const EducationCard = ({ education }: EducationCardProps) => (
  <Card
    sx={{
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
          gap: 2,
          mb: 1,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "2.5rem",
            lineHeight: 1,
          }}
        >
          {education.emoji}
        </Typography>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              color: "text.primary",
              fontSize: "1.25rem",
              mb: 0.5,
            }}
          >
            {education.degree}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "text.secondary",
              fontWeight: 500,
              fontSize: "1rem",
            }}
          >
            {education.institution}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          mt: "auto",
          pt: 2,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontWeight: 500,
            fontSize: "0.9rem",
          }}
        >
          {education.year}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

EducationCard.propTypes = {
  education: PropTypes.shape({
    id: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
  }).isRequired,
};

export default EducationCard;
