import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";
import { Iconify } from "../iconify";
import type { Contact } from "../../data/portfolio-data";

interface FooterProps {
  contact: Contact;
}

export function Footer({ contact }: FooterProps) {
  const [showEmail, setShowEmail] = useState(false);

  const handleEmailClick = () => {
    setShowEmail(true);
    setTimeout(() => setShowEmail(false), 3000); // Hide after 3 seconds
  };

  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        py: { xs: 3, md: 5 },
        pb: { xs: 8, md: 10 },
        bgcolor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
        px: { xs: 2, md: 0 },
        backgroundImage: "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)",
        color: "common.white",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                }}
              >
                Let&apos;s Connect! 🤝
              </Typography>
              <Typography
                variant="body1"
                align="center"
                paragraph
                sx={{
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  opacity: 0.9,
                }}
              >
                Feel free to reach out for collaborations or just a friendly
                hello
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                sx={{ flexWrap: "wrap", gap: 2 }}
              >
                <IconButton
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  size="large"
                  sx={{
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      color: "primary.main",
                    },
                  }}
                >
                  <Iconify icon="mdi:github" />
                </IconButton>
                <IconButton
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  size="large"
                  sx={{
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      color: "primary.main",
                    },
                  }}
                >
                  <Iconify icon="mdi:linkedin" />
                </IconButton>
                <Tooltip
                  title={contact.email}
                  open={showEmail}
                  placement="top"
                  arrow
                >
                  <IconButton
                    onClick={handleEmailClick}
                    color="inherit"
                    size="large"
                    sx={{
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        color: "primary.main",
                      },
                    }}
                  >
                    <Iconify icon="mdi:email" />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
