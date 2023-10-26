/* eslint-disable no-useless-escape */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, Typography, TextField, useTheme } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { supabase } from '../../features';
import { Toast } from '../../components';

export default function SignUp() {
  const router = useNavigate();
  const theme = useTheme();

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [severity, setSeverity] = useState<'success' | 'info' | 'warning' | 'error'>('success');
  const [color, setColor] = useState<'success' | 'info' | 'warning' | 'error'>('success');

  const schema = yup.object({
    email: yup
      .string()
      .required('This is a required field.')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address. Please try again.'),
    password: yup
      .string()
      .required('This is a required field.')
      .matches(
        /^(?:(?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))[A-Za-z0-9!~<>,;:_=?*+#.”&§$%°{}()\|\[\]\-\$\^\@\/]{8,}$/,
        'Password must be at least 8 characters in length and contain at least 3 of the lower case letters, upper case letters, numbers and special characters types of characters'
      ),
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

  const onSubmit = async (data: { email: string; password: string }) => {
    setLoading(true);
    const { error } = await supabase.auth.signUp(data);
    setLoading(false);

    if (error) {
      setMessage(error?.message);
      setSeverity('error');
      setColor('error');
    } else {
      setMessage('An email has been sent to you for verification!');

      setTimeout(() => {
        router('/', { replace: true });
      }, 3000);
    }
  };

  return (
    <>
      <Toast toast={message !== ''} message={message} setToast={setMessage} severity={severity} color={color} />
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
          <LoadingButton
            type="submit"
            loading={loading}
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
          </LoadingButton>
        </form>
      </Stack>
    </>
  );
}
