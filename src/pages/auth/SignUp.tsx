import { useNavigate } from 'react-router-dom';
import { Stack, Typography, Button, TextField, useTheme } from '@mui/material';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function SignUp() {
  const router = useNavigate();
  const theme = useTheme();

  const schema = yup.object({
    email: yup
      .string()
      .required('This is a required field.')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address. Please try again.'),
    password: yup.string().required('This is a required field.').min(8, 'Password must be at least 8 characters'),
    confirmPassword: yup
      .string()
      .required('Please repeat the password.')
      .oneOf([yup.ref('password')], 'Passwords do not match. Please try again.'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string; confirmPassword: string }>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('sessionId', 'login');
    }

    router('/');
  };

  return (
    <Stack>
      <Typography variant="h3" sx={{ textAlign: 'center', color: '#294856' }} mb={3}>
        Sign up with email
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack mb={2}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                error={!!errors.email?.message}
                id="email"
                label="Email or Username"
                size="small"
                color="primary"
                type="text"
                sx={{ width: '330px', borderColor: theme.palette.primary.main }}
                helperText={errors.email?.message || ''}
                {...field}
              />
            )}
          />
        </Stack>
        <Stack mb={2}>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                error={!!errors.password?.message}
                id="password"
                label="Password"
                size="small"
                color="primary"
                type="password"
                sx={{
                  width: '330px',
                  '& input': {
                    '&::placeholder': {
                      color: theme.palette.primary.main,
                    },
                  },
                }}
                helperText={errors.password?.message || ''}
                {...field}
              />
            )}
          />
        </Stack>
        <Stack mb={3}>
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field }) => (
              <TextField
                error={!!errors.confirmPassword?.message}
                id="confirmPassword"
                label="Confirm Password"
                size="small"
                color="primary"
                type="password"
                sx={{
                  width: '330px',
                  '& input': {
                    '&::placeholder': {
                      color: theme.palette.primary.main,
                    },
                  },
                }}
                helperText={errors.confirmPassword?.message || ''}
                {...field}
              />
            )}
          />
        </Stack>
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: '100%',
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
              opacity: '0.75',
            },
          }}
        >
          Sign up
        </Button>
      </form>
    </Stack>
  );
}
