import React from 'react';
import { Grid, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PieChartIcon from '@mui/icons-material/PieChart';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import MonitorIcon from '@mui/icons-material/Monitor';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EuroIcon from '@mui/icons-material/Euro';

const Features = () => {
  return (
    <Grid container sx={{ p: 2, backgroundColor: '#f0f2f5' }} id="features">
      <Grid
        item
        sx={{
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        xs={12}
        sm={6}
        md={4}
      >
        <PieChartIcon sx={{ fontSize: '5rem' }} />
        <Typography variant="h6" sx={{ mb: 1 }}>
          Dashboard
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          Track your overall balance private and local
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        xs={12}
        sm={6}
        md={4}
      >
        <GitHubIcon sx={{ fontSize: '5rem' }} />
        <Typography variant="h6" sx={{ mb: 1 }}>
          Open Source
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          No secrets. Coineda is open source and available at GitHub
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        xs={12}
        sm={6}
        md={4}
      >
        <UploadFileIcon sx={{ fontSize: '5rem' }} />
        <Typography variant="h6" sx={{ mb: 1 }}>
          Imports
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          Coineda files, Binance Spot Orders, Kraken and Uphold export files.
          More comming soon!
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        xs={12}
        sm={6}
        md={4}
      >
        <MonitorIcon sx={{ fontSize: '5rem' }} />
        <Typography variant="h6" sx={{ mb: 1 }}>
          Tracking
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          Clean user interface to add or import transactions
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        xs={12}
        sm={6}
        md={4}
      >
        <DirectionsCarIcon sx={{ fontSize: '5rem' }} />
        <Typography variant="h6" sx={{ mb: 1 }}>
          When Lambo
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          You don't need to ask anymore. Coineda provides a progress bar
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        xs={12}
        sm={6}
        md={4}
      >
        <EuroIcon sx={{ fontSize: '5rem' }} />
        <Typography variant="h6" sx={{ mb: 1 }}>
          Free to use
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center' }}>
          Add as many transactions as you want for free
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Features;
