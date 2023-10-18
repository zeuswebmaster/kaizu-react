import React from 'react';
import { Typography, Container, Box, Link } from '@mui/material';
import styles from '../../styles/member.module.scss';

const Footer = () => {
    return (
        <Container className={styles.footer}>
            <Box>

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