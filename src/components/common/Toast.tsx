import { Snackbar, Alert } from '@mui/material';

export interface ToastProps {
  toast: boolean;
  duration?: number;
  message: string;
  icon?: React.ReactNode;
  color?: 'success' | 'info' | 'warning' | 'error';
  severity?: 'success' | 'info' | 'warning' | 'error';
  variant?: 'filled' | 'outlined' | 'standard';
  horizontal?: 'center' | 'left' | 'right';
  vertical?: 'bottom' | 'top';
  setToast: React.Dispatch<React.SetStateAction<string>>;
  onClose?: () => void;
}

export default function Toast({
  toast,
  setToast,
  onClose,
  duration = 3000,
  message,
  icon,
  severity = 'success',
  variant = 'standard',
  color = 'success',
  vertical = 'top',
  horizontal = 'center',
}: ToastProps) {
  const handleClose = () => {
    if (onClose) setToast('');
  };

  return (
    <>
      <Snackbar
        open={toast}
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={duration}
        onClose={() => setToast('')}
      >
        <Alert
          severity={severity}
          sx={{ width: '100%' }}
          {...(icon ? { icon } : {})}
          variant={variant}
          color={color}
          {...(onClose ? { onClose: () => handleClose() } : {})}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
