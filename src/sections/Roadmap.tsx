import React from 'react';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import { Grid, Link, Typography, useTheme } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const Roadmap = () => {
  const theme = useTheme();

  return (
    <Grid container id="roadmap">
      <Grid item xs={12} sm={6}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Import from non-custodial wallets (Cardano, Ethereum, Polygon,
              BSC)
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              (P2P) Meerkat sync between different clients
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Customizable dashboard</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineDot />
            <TimelineContent>NFT support</TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        container
        sx={{
          p: 5,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <WhatshotIcon
          sx={{ fontSize: '5rem', color: theme.palette.warning.main }}
        />
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          More wishes?
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center', p: 1 }}>
          Feel free to submit a feature request as a new{' '}
          <Link href="'https://github.com/fabianbormann/Coineda/issues/new'">
            issue on GitHub
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Roadmap;
