import { useState, useEffect } from "react";
import {
  Box,
  Fab,
  Tooltip,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import { Iconify } from "../components/iconify";
import { portfolioData } from "../data/portfolio-data";

const sections = [
  { id: "header", label: "Home", icon: "mdi:home" },
  { id: "about", label: "About", icon: "mdi:account" },
  { id: "projects", label: "Projects", icon: "mdi:code-braces" },
  { id: "education", label: "Education", icon: "mdi:school" },
  { id: "experience", label: "Experience", icon: "mdi:briefcase" },
  { id: "technologies", label: "Technologies", icon: "mdi:cog" },
  { id: "contact", label: "Contact", icon: "mdi:email" },
];

export default function PortfolioNav() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeSection, setActiveSection] = useState("header");
  const [showNav, setShowNav] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Show/hide navigation based on scroll position
      setShowNav(scrollPosition > windowHeight / 2);

      // Update active section based on scroll position
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;

          // Check if the element is in the viewport
          return (
            elementTop <= windowHeight / 2 && elementBottom >= windowHeight / 2
          );
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close drawer after selection in mobile view
      if (isMobile) {
        setDrawerOpen(false);
      }
    }
  };

  if (!showNav) return null;

  // Mobile view with drawer
  if (isMobile) {
    return (
      <>
        <Fab
          color="primary"
          onClick={() => setDrawerOpen(true)}
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: theme.zIndex.appBar,
            width: 56,
            height: 56,
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Iconify icon="mdi:menu" sx={{ width: 24, height: 24 }} />
        </Fab>

        <Drawer
          anchor="bottom"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              maxHeight: "80vh",
              bgcolor: "background.paper",
              "& .MuiDrawer-paper": {
                width: "100%",
                maxWidth: "100%",
              },
            },
          }}
        >
          <Box
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: "1.1rem",
                color: "primary.main",
              }}
            >
              {portfolioData.name}
            </Typography>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={{
                color: "text.primary",
                "&:hover": {
                  bgcolor: "action.hover",
                },
              }}
            >
              <Iconify icon="mdi:close" sx={{ width: 24, height: 24 }} />
            </IconButton>
          </Box>
          <List sx={{ p: 1 }}>
            {sections.map((section) => (
              <ListItem key={section.id} disablePadding>
                <ListItemButton
                  onClick={() => handleClick(section.id)}
                  selected={activeSection === section.id}
                  sx={{
                    borderRadius: 2,
                    mx: 1,
                    my: 0.5,
                    py: 1.5,
                    "&.Mui-selected": {
                      bgcolor: "primary.main",
                      color: "common.white",
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
                    },
                    "&:hover": {
                      bgcolor: "action.hover",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color:
                        activeSection === section.id
                          ? "common.white"
                          : "inherit",
                      minWidth: 40,
                    }}
                  >
                    <Iconify
                      icon={section.icon}
                      sx={{ width: 24, height: 24 }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={section.label}
                    primaryTypographyProps={{
                      sx: {
                        fontWeight: activeSection === section.id ? 600 : 500,
                        fontSize: "1rem",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </>
    );
  }

  // Desktop view
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: theme.zIndex.appBar,
        display: "flex",
        gap: 1,
        bgcolor: "background.paper",
        borderRadius: 2,
        p: 1,
        boxShadow: theme.shadows[3],
      }}
    >
      {sections.map((section) => (
        <Tooltip key={section.id} title={section.label}>
          <Fab
            size="small"
            onClick={() => handleClick(section.id)}
            sx={{
              bgcolor:
                activeSection === section.id
                  ? "primary.main"
                  : "background.paper",
              color:
                activeSection === section.id ? "common.white" : "text.primary",
              "&:hover": {
                bgcolor:
                  activeSection === section.id ? "primary.dark" : "grey.100",
                transform: "scale(1.1)",
              },
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Iconify icon={section.icon} sx={{ width: 20, height: 20 }} />
          </Fab>
        </Tooltip>
      ))}
    </Box>
  );
}
