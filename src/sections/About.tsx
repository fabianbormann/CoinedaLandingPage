import React, { useEffect, useState } from 'react';
import Slider, { Settings as SliderSettings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Alert,
  Button,
  Chip,
  Grid,
  Link,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios';

const settings: SliderSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1000,
  slidesToShow: 1,
  arrows: true,
  slidesToScroll: 1,
  className: 'feature-slider',
};

const About = () => {
  const [version, setVersion] = useState('');

  useEffect(() => {
    const fetchLatestVersion = async () => {
      try {
        const releaseInfo = (
          await axios.get(
            'https://api.github.com/repos/fabianbormann/Coineda/releases/latest'
          )
        ).data;

        setVersion(releaseInfo['tag_name']);
      } catch (error) {
        console.warn(error);
        setVersion('v0.2.6');
      }
    };

    fetchLatestVersion();
  }, []);

  const estimateOperatingSystem = () => {
    const userAgent = window.navigator.userAgent;

    let operatingSystem = 'macosx';

    if (userAgent.indexOf('Win') !== -1) operatingSystem = 'windows';
    else if (userAgent.indexOf('Linux') !== -1) operatingSystem = 'linux';
    else if (userAgent.indexOf('Android') !== -1) operatingSystem = 'android';
    else if (userAgent.indexOf('like Mac') !== -1) operatingSystem = 'ios';

    return operatingSystem;
  };

  const [selectedPlatform, setSelectedPlatform] = useState(
    estimateOperatingSystem()
  );

  const startDownload = () => {
    if (selectedPlatform === 'windows') {
      window.location.assign(
        `https://github.com/fabianbormann/Coineda/releases/download/${version}/coineda-Setup-${version.slice(
          1
        )}.exe`
      );
    } else if (selectedPlatform === 'linux') {
      window.location.assign(
        `https://github.com/fabianbormann/Coineda/releases/download/${version}/coineda-${version.slice(
          1
        )}.AppImage`
      );
    } else if (selectedPlatform === 'linux-deb') {
      window.location.assign(
        `https://github.com/fabianbormann/Coineda/releases/download/${version}/coineda_${version.slice(
          1
        )}_amd64.deb`
      );
    } else if (selectedPlatform === 'macosx') {
      window.location.assign(
        `https://github.com/fabianbormann/Coineda/releases/download/${version}/coineda-${version.slice(
          1
        )}.dmg`
      );
    }
  };

  return (
    <Grid container sx={{ p: 2, backgroundColor: '#f0f2f5' }} id="about">
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Slider {...settings}>
          <img src="screens/dashboard.png" alt="dashboard" />
          <img src="screens/tracking.png" alt="tracking" />
          <img src="screens/tax.png" alt="tax" />
          <img src="screens/settings.png" alt="settings" />
        </Slider>
      </Grid>
      <Grid item xs={12} md={6} sx={{ p: 2 }}>
        <Grid
          item
          container
          sx={{ justifyContent: { xs: 'center', sm: 'flex-start' } }}
        >
          <Typography sx={{ mb: 2 }}>
            Coineda amins to be a <b>free</b>, platform independent,{' '}
            <b>local</b> running and <b>open source</b> crypto <b>tracking</b>{' '}
            tool.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            It provides a simple <b>tax calculation</b> and shows you realized
            and unrealized gains per year. You do not need to provide your
            tracking exports or transaction history to a central company.
          </Typography>

          <Chip
            sx={{ mb: 3 }}
            size="small"
            label="GPLv3 License"
            color="secondary"
            clickable
            component="a"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/fabianbormann/Coineda/blob/main/LICENSE"
          />
        </Grid>

        <Grid
          container
          item
          sx={{
            mb: 2,
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <TextField
            sx={{ minWidth: 160, mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 } }}
            label="Download Coineda for"
            select
            value={selectedPlatform}
            onChange={(event) => setSelectedPlatform(event.target.value)}
          >
            <MenuItem value="windows">Windows</MenuItem>
            <MenuItem value="macosx">Mac OS X</MenuItem>
            <MenuItem value="linux-deb">Linux (.deb file)</MenuItem>
            <MenuItem value="linux">Linux (AppImage)</MenuItem>
          </TextField>

          <Button
            sx={{ textTransform: 'none' }}
            variant="contained"
            onClick={startDownload}
            startIcon={<DownloadIcon />}
          >
            {`Download Coineda ${version}`}
          </Button>
        </Grid>
        <Grid item>
          <Alert severity="success" sx={{ mb: 2 }}>
            <Typography>
              You can also run Coineda <b>without installation</b> locally in
              your browser at{' '}
              <Link href="https://app.coineda.io">app.coineda.io</Link>. Your
              data will be stored locally within the local storage of your
              browser, ensuring privacy and accessibility.
            </Typography>
          </Alert>

          <Alert severity="warning">
            Coineda does not provide tax, legal or accounting advices. The
            provided dashboard and rudimentary tax calculations may contain
            errors, are incorrect for your country or doesn't cover all tax
            relevant regulations. Those calculations are developed to the best
            of my knowledge but I'm not a tax expert and I do not take any
            responsibility for incorrect calculations.
          </Alert>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
