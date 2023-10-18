import { useRef } from "react";
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import { useStore } from "../stores/store";
import { supabase } from "../services/supabase";

const SignUp = () => {
    const { helperText, setHelperText } = useStore();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSignup = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        console.log(email, password);

        const { user, error } = await supabase.auth.signUp({ email, password });

        if (error) {
            setHelperText({ error: true, text: error.message });
        } else if (!user && !error) {
            setHelperText({
                error: false,
                text: "An email has been sent to you for verification!",
            });
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
                <Typography component="h1" variant="h5">Sign Up</Typography>
                <form noValidate onSubmit={handleSignup}>
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
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Submit
                    </Button>
                    {!!helperText.text && (
                        <Alert severity={helperText.error ? 'error' : 'success'}>{helperText.text}</Alert>
                    )}
                </form>
            </Box>
        </Container>
    );
};

export default SignUp;
