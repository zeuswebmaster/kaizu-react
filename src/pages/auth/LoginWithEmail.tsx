import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, Typography, TextField, useTheme, Checkbox, FormControlLabel } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Toast } from '../../components';

import { supabase } from '../../features';

export default function LoginWithEmail() {
  const theme = useTheme();
  const router = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [severity, setSeverity] = useState<'success' | 'info' | 'warning' | 'error'>('success');
  const [color, setColor] = useState<'success' | 'info' | 'warning' | 'error'>('success');

  const schema = yup.object({
    email: yup
      .string()
      .required('This is a required field.')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address. Please try again.'),
    password: yup.string().required('This is a required field.'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (submit: { email: string; password: string }) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword(submit);
    setLoading(false);

    if (error) {
      setMessage(error?.message);
      setSeverity('error');
      setColor('error');
    } else if (!data?.user) {
      setMessage('An email has been sent to you for verification!');
      setSeverity('info');
      setColor('info');
    }

    if (data?.user) {
      router('/', { replace: true });
    }
  };

  return (
    <>
      <Toast toast={message !== ''} message={message} setToast={setMessage} severity={severity} color={color} />
      <Stack>
        <Typography variant="h3" sx={{ textAlign: 'center', color: '#294856' }} mb={3}>
          Sign in with email
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
          <Stack mb={1}>
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
          <Stack
            onClick={() => router('/login-email')}
            mb={1}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                opacity: '75%',
              },
            }}
          >
            <Typography fontSize={14} color="#248ac0">
              I forgot my password or can`t sign in
            </Typography>
          </Stack>
          <FormControlLabel
            control={<Checkbox sx={{ color: theme.palette.primary.main }} />}
            label="Remember me"
            sx={{ marginBottom: '16px' }}
          />
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
            Sign in
          </LoadingButton>
        </form>
      </Stack>
    </>
  );
}
