import React from 'react';
import { Typography, Container, Box, Link } from '@mui/material';

const Footer = () => {
    return (
        <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>

            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://kaizu.ai">
                    KAIZU
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>

        </Box>
        </Container>
    );
}

export default Footer;