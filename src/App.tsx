import Features from './sections/Features';
import Roadmap from './sections/Roadmap';
import About from './sections/About';
import Developer from './sections/Developer';
import {
  AppBar,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';
import Footer from './sections/Footer';

const App = () => {
  const jumpTo = (anchor: string) => {
    (
      window as any
    ).location = `${window.location.origin}${window.location.pathname}#${anchor}`;
  };

  return (
    <Grid>
      <Grid>
        <AppBar position="static">
          <Grid container>
            <Grid item sx={{ p: 1, display: 'flex', alignItems: 'center' }}>
              <img
                style={{ width: 32, height: 32 }}
                src="logo192.png"
                alt="logo"
              />
              <Typography sx={{ ml: 1, display: { xs: 'none', sm: 'block' } }}>
                Coineda
              </Typography>
            </Grid>

            <Grid
              item
              sx={{
                p: 1,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexGrow: 1,
              }}
            >
              <Button
                sx={{ color: 'white', textTransform: 'none' }}
                variant="text"
                onClick={() => jumpTo('features')}
              >
                Features
              </Button>
              <Button
                sx={{ color: 'white', textTransform: 'none' }}
                variant="text"
                onClick={() => jumpTo('roadmap')}
              >
                Roadmap
              </Button>
              <Button
                sx={{ color: 'white', textTransform: 'none' }}
                variant="text"
                onClick={() => jumpTo('developer')}
              >
                Developer
              </Button>
              <IconButton
                sx={{ color: 'white', textTransform: 'none' }}
                onClick={() =>
                  window.location.assign(
                    'https://github.com/fabianbormann/Coineda'
                  )
                }
              >
                <GitHubIcon sx={{ fontSize: '1.6rem' }} />
              </IconButton>
            </Grid>
          </Grid>
        </AppBar>
      </Grid>
      <Grid>
        <About />
        <Divider />
        <Features />
        <Divider />
        <Roadmap />
        <Divider />
        <Developer />
      </Grid>
      <Footer />
    </Grid>
  );
};

export default App;
