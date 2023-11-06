import { Backdrop, Box, Fade, Modal } from '@mui/material';

interface ModalComponentProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  width?: number;
}

export default function ModalComponent({ open, setOpen, children, width }: ModalComponentProps) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { width },
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    backgroundImage: 'linear-gradient(to top, rgba(15, 29, 37, 1), rgba(26, 51, 64, 1))',
    borderRadius: '6px',
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>{children}</Box>
      </Fade>
    </Modal>
  );
}
