import { Card, CardContent, Typography } from '@mui/material';
import { Timeline as MuiTimeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface TimelineItemProps {
  id: string;
  role: string;
  company: string;
  period: string;
  emoji: string;
  children?: ReactNode;
}

interface TimelineProps {
  items: TimelineItemProps[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <MuiTimeline position="alternate">
      {items.map((item, index) => (
        <TimelineItem key={item.id}>
          <TimelineOppositeContent
            color="text.secondary"
            sx={{ 
              display: { xs: 'none', sm: 'block' },
              pt: { xs: 0, sm: 2 }
            }}
          >
            {item.period}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot 
              color="primary"
              sx={{ 
                width: 40, 
                height: 40, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '1.5rem',
                bgcolor: 'primary.main',
                color: 'common.white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              {item.emoji}
            </TimelineDot>
            {index !== items.length - 1 && (
              <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
            )}
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Card 
                elevation={3}
                sx={{
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: (theme) => theme.shadows[8],
                  },
                }}
              >
                <CardContent>
                  <Typography 
                    variant="h6" 
                    component="div"
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1rem', md: '1.25rem' }
                    }}
                  >
                    {item.role}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}
                  >
                    {item.company}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      display: { xs: 'block', sm: 'none' },
                      mt: 1
                    }}
                  >
                    {item.period}
                  </Typography>
                  {item.children}
                </CardContent>
              </Card>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </MuiTimeline>
  );
} 