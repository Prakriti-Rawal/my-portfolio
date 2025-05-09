import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { Iconify } from "../iconify";
import type { ReactNode } from "react";

interface PortfolioCardProps {
  title: string;
  description?: string;
  image?: string;
  technologies?: string[];
  githubUrl?: string;
  emoji?: string;
  children?: ReactNode;
  sx?: any;
}

export function PortfolioCard({
  title,
  description,
  image,
  technologies = [],
  githubUrl,
  emoji,
  children,
  sx = {},
}: PortfolioCardProps) {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
      <MuiCard
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: (theme) => theme.shadows[8],
          },
          ...sx,
        }}
      >
        {image && (
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt={title}
            sx={{ objectFit: "cover" }}
          />
        )}
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {emoji && (
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                bgcolor: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
                fontSize: "2rem",
                mb: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              {emoji}
            </Box>
          )}
          <Typography
            variant="h5"
            gutterBottom
            align="center"
            sx={{
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              width: "100%",
            }}
          >
            {title}
          </Typography>
          {description && (
            <Typography
              variant="body2"
              color="text.secondary"
              paragraph
              align="center"
              sx={{
                fontSize: { xs: "0.875rem", md: "1rem" },
                width: "100%",
              }}
            >
              {description}
            </Typography>
          )}
          {technologies.length > 0 && (
            <Stack
              direction="row"
              spacing={1}
              sx={{
                mb: 2,
                flexWrap: "wrap",
                gap: 1,
                justifyContent: "center",
                width: "100%",
              }}
            >
              {technologies.map((tech) => (
                <Typography
                  key={tech}
                  variant="caption"
                  sx={{
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    bgcolor: "primary.lighter",
                    color: "primary.dark",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "common.white",
                    },
                  }}
                >
                  {tech}
                </Typography>
              ))}
            </Stack>
          )}
          {githubUrl && (
            <Button
              variant="contained"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<Iconify icon="mdi:github" />}
              fullWidth
              sx={{
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: (theme) => theme.shadows[8],
                },
              }}
            >
              View on GitHub
            </Button>
          )}
          {children}
        </CardContent>
      </MuiCard>
    </motion.div>
  );
}
