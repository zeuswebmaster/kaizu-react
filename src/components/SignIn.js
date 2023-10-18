import { Button, TextField, Box, Typography, Container, Alert, Link } from '@mui/material';
import { useRef } from 'react';
import { useStore } from '../stores/store';
import { useAuthStore } from '../stores/auth-store';
import { supabase } from '../services/supabase';

const SignIn = () => {
    const { helperText, setHelperText } = useStore();
    const { setUser, setIsAuthenticated } = useAuthStore();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        const { data, error } =  await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            setHelperText({ error: true, text: error.message });
        } else if (!data?.user && !error) {
            setHelperText({ error: false, text: 'An email has been sent to you for verification!' });
        }
        
        if (data?.user) {
            setHelperText({ error: false, text: 'You have successfully logged in!' });
            setUser(data);
            setIsAuthenticated(true);
        }
    };

    const forgotPassword = async (e) => {
        e.preventDefault();
        const email = prompt('Please enter your email:');
        if (email === null || email === '') {
            setHelperText({ error: true, text: 'You must enter your email.' });
        } else {
            const { error } = await supabase.auth.api.resetPasswordForEmail(email);
            if (error) {
                console.error('Error:', error.message);
            } else {
                setHelperText({ error: false, text: 'Password recovery email has been sent.' });
            }
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                <Typography component="h1" variant="h5">Log In</Typography>

                <form noValidate onSubmit={handleLogin}>
                    <TextField
                        inputRef={emailRef}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        inputRef={passwordRef}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 3 }}
                    >
                        Submit
                    </Button>
                    {!!helperText.text && (
                        <Alert style={{ marginBottom: '10px' }} severity={helperText.error ? 'error' : 'success'}>{helperText.text}</Alert>
                    )}
                </form>

                <Box>
                    <Link href="#" variant="body2" onClick={forgotPassword}>
                        Forgot password?
                    </Link>
                </Box>
                
            </Box>
        </Container>
    );
};

export default SignIn;
