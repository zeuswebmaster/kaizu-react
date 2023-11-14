import { useState } from 'react';
import {
  Avatar,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
  useTheme,
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import { ModalComponent } from '../../components';
import useResponsive from '../../hooks/useResponsive';

export default function Profile() {
  const themeGlobal = useTheme();
  const isSmDown = useResponsive('down', 'sm');

  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    borderBottom: 'none',
    padding: '6px 0',
    color: theme.palette.common.white,
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <>
      <ModalComponent
        open={deleteModal}
        setOpen={setDeleteModal}
        width={isSmDown ? '95%' : '320px'}
        bgColor={themeGlobal.palette.common.black}
      >
        <Stack
          padding={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap={2}
          sx={{ width: '100%' }}
          pt={8}
          pb={5}
        >
          <Typography variant="subtitle1" color={themeGlobal.palette.common.white} textAlign="center">
            Are you sure you want <br /> to delete your account?
          </Typography>
          <Stack direction="row" alignItems="center" gap={1}>
            <Button
              variant="contained"
              sx={{ backgroundColor: themeGlobal.palette.grey[500] }}
              onClick={() => setDeleteModal(false)}
            >
              Cancel
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </Stack>
          <Typography variant="caption" color={themeGlobal.palette.grey[400]}>
            (Congrats you found the end of the Matrix)
          </Typography>
        </Stack>
      </ModalComponent>
      <Stack
        sx={{
          borderBottom: `1px solid ${themeGlobal.palette.primary.main}`,
          paddingBottom: 2,
        }}
        mb={3}
      >
        <Typography variant="subtitle1" color={themeGlobal.palette.common.white} mb={2}>
          Personal Information
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 400 }}>
            <TableBody>
              <TableRow>
                <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>Profile Image</StyledTableCell>
                <StyledTableCell sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Avatar sx={{ width: 30, height: 30 }}>
                    <PersonIcon />
                  </Avatar>
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>First Name</StyledTableCell>
                <StyledTableCell sx={{ display: 'flex', justifyContent: 'flex-end' }}>Nate</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>Last Name</StyledTableCell>
                <StyledTableCell sx={{ display: 'flex', justifyContent: 'flex-end' }}>Whitehill</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>Company</StyledTableCell>
                <StyledTableCell sx={{ display: 'flex', justifyContent: 'flex-end' }}>CryptoSlate</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>Email</StyledTableCell>
                <StyledTableCell sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  nate@cryptoslate.com
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <Stack
        sx={{
          borderBottom: `1px solid ${themeGlobal.palette.primary.main}`,
          paddingBottom: 2,
        }}
        mb={3}
      >
        <Typography variant="subtitle1" color={themeGlobal.palette.common.white} mb={2}>
          Sign in methods
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 400 }}>
            <TableBody>
              <TableRow>
                <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>Google</StyledTableCell>
                <StyledTableCell sx={{ display: 'flex', justifyContent: 'flex-end' }}>Disconnect</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>Password</StyledTableCell>
                <StyledTableCell sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button sx={{ color: themeGlobal.palette.common.white, padding: 0, minWidth: 'auto' }}>Setup</Button>
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>
                  Two-Factor Authentication
                </StyledTableCell>
                <StyledTableCell sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button sx={{ color: themeGlobal.palette.common.white, padding: 0, minWidth: 'auto' }}>Setup</Button>
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <Stack
        sx={{
          borderBottom: `1px solid ${themeGlobal.palette.primary.main}`,
          paddingBottom: 2,
        }}
        mb={3}
      >
        <Typography variant="subtitle1" color={themeGlobal.palette.common.white} mb={2}>
          Billing details
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 400 }}>
            <TableBody>
              <TableRow>
                <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>Credit card</StyledTableCell>
                <StyledTableCell>
                  <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={2}>
                    <Typography variant="body2">American Epress ending in 6006</Typography>
                    <Button sx={{ color: themeGlobal.palette.common.white, padding: 0, minWidth: 'auto' }}>Edit</Button>
                  </Stack>
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>Billing Info</StyledTableCell>
                <StyledTableCell sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button sx={{ color: themeGlobal.palette.common.white, padding: 0, minWidth: 'auto' }}>Edit</Button>
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <Stack
        sx={{
          borderBottom: `1px solid ${themeGlobal.palette.primary.main}`,
          paddingBottom: 2,
        }}
        mb={3}
      >
        <Typography variant="subtitle1" color={themeGlobal.palette.common.white} mb={2}>
          Share data with Kaizu
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 400 }}>
            <TableBody>
              <TableRow>
                <StyledTableCell>
                  <Typography variant="subtitle2">Kaizu keeps your data private and confidential.</Typography>
                  <Typography variant="body2" color={themeGlobal.palette.grey[400]}>
                    Help us improve the quality of our service and the quality of other features.
                    <br />
                    Our team analyzes your usage for the sole purpose of improving Kaizu. <br /> For more informaiton,
                    please view our{' '}
                    <Button href="#" sx={{ minWidth: 0, padding: 0, color: themeGlobal.palette.info.main }}>
                      Private Notice
                    </Button>
                    .
                  </Typography>
                </StyledTableCell>
                <StyledTableCell sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  Allowed
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <Stack
        sx={{
          borderBottom: `1px solid ${themeGlobal.palette.primary.main}`,
          paddingBottom: 2,
        }}
        mb={3}
      >
        <Typography variant="subtitle1" color={themeGlobal.palette.common.white} mb={2}>
          Connected Apps
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 400 }}>
            <TableBody>
              <TableRow>
                <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>Slack</StyledTableCell>
                <StyledTableCell sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  Cancel access
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <Stack mb={3}>
        <Typography variant="subtitle1" color={themeGlobal.palette.common.white} mb={2}>
          Delete Account
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 400 }}>
            <TableBody>
              <TableRow>
                <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>
                  Delete your Kaizu account
                </StyledTableCell>
                <StyledTableCell sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <Button variant="outlined" color="error" onClick={() => setDeleteModal(true)}>
                    Delete account
                  </Button>
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>
                  Once you delete your account, your charts, activity, templates and reports will be gone forever.
                </StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
}
