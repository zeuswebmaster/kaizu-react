import { useNavigate } from 'react-router-dom';
import { Stack, Typography, Button, styled } from '@mui/material';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function SignIn() {
  const router = useNavigate();

  const StyledButton = styled(Button)(() => ({
    border: '2px solid #2b4a58',
    color: '#294856',
    '&:hover': {
      opacity: '75%',
      border: '2px solid #2b4a58',
      color: '#294856',
    },
  }));

  return (
    <Stack>
      <Typography variant="h3" sx={{ textAlign: 'center', color: '#294856' }} mb={3}>
        Sign in
      </Typography>
      <Stack direction="row" alignItems="center" spacing={2} mb={2}>
        <StyledButton variant="outlined" startIcon={<GoogleIcon />} sx={{ width: '150px' }}>
          Google
        </StyledButton>
        <StyledButton variant="outlined" startIcon={<FacebookOutlinedIcon />} sx={{ width: '150px' }}>
          Facebook
        </StyledButton>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2} mb={2}>
        <StyledButton
          variant="outlined"
          startIcon={<LinkedInIcon />}
          sx={{
            width: '94px',
            '& span': {
              marginRight: '-3px',
            },
          }}
        ></StyledButton>
        <StyledButton
          variant="outlined"
          startIcon={<TwitterIcon />}
          sx={{
            width: '94px',
            '& span': {
              marginRight: '-3px',
            },
          }}
        ></StyledButton>
        <StyledButton
          variant="outlined"
          startIcon={<AppleIcon />}
          sx={{
            width: '94px',
            '& span': {
              marginRight: '-3px',
            },
          }}
        ></StyledButton>
      </Stack>
      <Typography variant="body1" mb={2} sx={{ textAlign: 'center' }}>
        OR USING
      </Typography>
      <StyledButton variant="outlined" startIcon={<MailOutlineIcon />} onClick={() => router('/login-email')}>
        Email
      </StyledButton>
    </Stack>
  );
}
