import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Box, Typography } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const AboutUs = () => {
  const { mode } = useContext(ThemeContext);

  const cardStyle = {
    backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.06)' : '#fff',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: mode === 'dark'
      ? '0 4px 20px rgba(0,0,0,0.3)'
      : '0 4px 20px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  return (
    <div style={{ marginTop: '130px', padding: '20px 40px', maxWidth: '1000px', margin: '130px auto 40px' }}>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Quicksand', sans-serif",
          fontWeight: 800,
          textAlign: 'center',
          mb: 2,
          color: mode === 'dark' ? '#fff' : '#1a1a2e',
        }}
      >
        About <span style={{ color: 'rgb(30, 144, 255)' }}>NewsBuzz</span>
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontFamily: "'Quicksand', sans-serif",
          fontWeight: 400,
          textAlign: 'center',
          mb: 5,
          color: mode === 'dark' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)',
          maxWidth: '600px',
          margin: '0 auto 40px',
        }}
      >
        Your one-stop destination for curated, real-time news from trusted sources around the world.
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Box sx={cardStyle}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <NewspaperIcon sx={{ fontSize: 36, color: 'rgb(30, 144, 255)' }} />
            <Typography variant="h5" sx={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, color: mode === 'dark' ? '#fff' : '#1a1a2e' }}>
              What We Do
            </Typography>
          </Box>
          <Typography sx={{ fontFamily: "'Quicksand', sans-serif", fontSize: '16px', lineHeight: 1.8, color: mode === 'dark' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)' }}>
            NewsBuzz aggregates news from hundreds of trusted providers, delivering top stories, trending topics,
            and personalized feeds right to your fingertips. We use smart algorithms to bring you the news that
            matters most, so you never miss an important story.
          </Typography>
        </Box>

        <Box sx={cardStyle}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <RocketLaunchIcon sx={{ fontSize: 36, color: 'rgb(30, 144, 255)' }} />
            <Typography variant="h5" sx={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, color: mode === 'dark' ? '#fff' : '#1a1a2e' }}>
              Our Mission
            </Typography>
          </Box>
          <Typography sx={{ fontFamily: "'Quicksand', sans-serif", fontSize: '16px', lineHeight: 1.8, color: mode === 'dark' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)' }}>
            We believe everyone deserves access to unbiased, high-quality news. Our mission is to cut through the
            noise and deliver clear, reliable information from diverse perspectives — all in one beautiful,
            easy-to-use platform.
          </Typography>
        </Box>

        <Box sx={cardStyle}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <GroupsIcon sx={{ fontSize: 36, color: 'rgb(30, 144, 255)' }} />
            <Typography variant="h5" sx={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, color: mode === 'dark' ? '#fff' : '#1a1a2e' }}>
              Our Team
            </Typography>
          </Box>
          <Typography sx={{ fontFamily: "'Quicksand', sans-serif", fontSize: '16px', lineHeight: 1.8, color: mode === 'dark' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)' }}>
            NewsBuzz is built by a passionate team of developers and news enthusiasts who care about keeping the
            world informed. We're constantly improving our platform to provide the best news reading experience possible.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default AboutUs;
