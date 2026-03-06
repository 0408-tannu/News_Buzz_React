import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Box, Typography, TextField, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import toast from 'react-hot-toast';

const ContactUs = () => {
  const { mode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }
    toast.success('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  const cardStyle = {
    backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.06)' : '#fff',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: mode === 'dark'
      ? '0 4px 20px rgba(0,0,0,0.3)'
      : '0 4px 20px rgba(0,0,0,0.08)',
  };

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      fontFamily: "'Quicksand', sans-serif",
      '& fieldset': {
        borderColor: mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)',
      },
      '&:hover fieldset': {
        borderColor: 'rgb(30, 144, 255)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgb(30, 144, 255)',
      },
    },
    '& .MuiInputLabel-root': {
      fontFamily: "'Quicksand', sans-serif",
    },
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
        Contact <span style={{ color: 'rgb(30, 144, 255)' }}>Us</span>
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
        Have questions, feedback, or suggestions? We'd love to hear from you!
      </Typography>

      <Box sx={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Contact Info */}
        <Box sx={{ ...cardStyle, flex: '1 1 300px', maxWidth: '400px' }}>
          <Typography variant="h5" sx={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, mb: 3, color: mode === 'dark' ? '#fff' : '#1a1a2e' }}>
            Get in Touch
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <EmailIcon sx={{ color: 'rgb(30, 144, 255)', fontSize: 28 }} />
            <Box>
              <Typography sx={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, color: mode === 'dark' ? '#fff' : '#1a1a2e' }}>Email</Typography>
              <Typography sx={{ fontFamily: "'Quicksand', sans-serif", color: mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)' }}>support@newsbuzz.com</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <PhoneIcon sx={{ color: 'rgb(30, 144, 255)', fontSize: 28 }} />
            <Box>
              <Typography sx={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, color: mode === 'dark' ? '#fff' : '#1a1a2e' }}>Phone</Typography>
              <Typography sx={{ fontFamily: "'Quicksand', sans-serif", color: mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)' }}>+91 98765 43210</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LocationOnIcon sx={{ color: 'rgb(30, 144, 255)', fontSize: 28 }} />
            <Box>
              <Typography sx={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600, color: mode === 'dark' ? '#fff' : '#1a1a2e' }}>Location</Typography>
              <Typography sx={{ fontFamily: "'Quicksand', sans-serif", color: mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)' }}>Gujarat, India</Typography>
            </Box>
          </Box>
        </Box>

        {/* Contact Form */}
        <Box sx={{ ...cardStyle, flex: '1 1 400px', maxWidth: '550px' }}>
          <Typography variant="h5" sx={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700, mb: 3, color: mode === 'dark' ? '#fff' : '#1a1a2e' }}>
            Send a Message
          </Typography>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <TextField
              label="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              fullWidth
              sx={inputSx}
            />
            <TextField
              label="Your Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              fullWidth
              sx={inputSx}
            />
            <TextField
              label="Your Message"
              multiline
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              fullWidth
              sx={inputSx}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 700,
                fontSize: '16px',
                borderRadius: '50px',
                padding: '12px 32px',
                background: 'linear-gradient(135deg, rgb(30, 144, 255), rgb(0, 100, 200))',
                textTransform: 'none',
                boxShadow: '0 4px 16px rgba(30, 144, 255, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgb(0, 100, 200), rgb(30, 144, 255))',
                  boxShadow: '0 6px 24px rgba(30, 144, 255, 0.4)',
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Send Message
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default ContactUs;
