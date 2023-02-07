import React from 'react';
import { Grid, Typography } from '@mui/material';

const Developer = () => {
  return (
    <Grid container id="developer" sx={{ p: 1, backgroundColor: '#f0f2f5' }}>
      <Grid
        item
        xs={12}
        sm={6}
        container
        sx={{ p: 2, alignItems: 'center', justifyContent: 'center' }}
      >
        <img
          width={200}
          style={{ borderRadius: '50%' }}
          src="fabian.jpg"
          alt="frontal shot of fabian"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        container
        sx={{
          p: 2,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          It's me, Fabian!
        </Typography>
        <Typography
          sx={{ textAlign: 'center', maxWidth: { xs: '80vw', sm: '40vw' } }}
        >
          Computer science is my passion! This is why I am developing software
          every day, both on the job and during my free time. Only the love for
          my kids and family can bring me away from the keyboard
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Developer;
