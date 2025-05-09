import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  bgColor?: 'default' | 'paper';
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  sx?: any;
}

export function Section({ 
  id, 
  title, 
  children, 
  bgColor = 'default',
  maxWidth = 'md',
  sx = {}
}: SectionProps) {
  return (
    <Box 
      id={id} 
      sx={{ 
        py: { xs: 5, md: 10 }, 
        bgcolor: `background.${bgColor}`, 
        px: { xs: 2, md: 0 },
        ...sx
      }}
    >
      <Container maxWidth={maxWidth}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {title && (
            <Typography 
              variant="h2" 
              align="center" 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                mb: 6,
                fontSize: { xs: '2rem', md: '2.5rem' },
                color: 'primary.main',
              }}
            >
              {title}
            </Typography>
          )}
          {children}
        </motion.div>
      </Container>
    </Box>
  );
} 