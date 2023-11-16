import {
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

export default function Notifications() {
  const themeGlobal = useTheme();

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
      <Stack
        sx={{
          borderBottom: `1px solid ${themeGlobal.palette.primary.main}`,
          paddingBottom: 2,
        }}
        mb={3}
      >
        <Typography variant="subtitle1" color={themeGlobal.palette.common.white} mb={2}>
          Saved notifications
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 400 }}>
            <TableBody>
              <TableRow>
                <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>Bitcoin price</StyledTableCell>
                <StyledTableCell>
                  <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={2}>
                    <Typography variant="body2">+/- 5%, Notify via Slack</Typography>
                    <Button sx={{ color: themeGlobal.palette.common.white, padding: 0, minWidth: 'auto' }}>Edit</Button>
                    <Button sx={{ color: themeGlobal.palette.common.white, padding: 0, minWidth: 'auto' }}>
                      Delete
                    </Button>
                  </Stack>
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>Inflation data</StyledTableCell>
                <StyledTableCell>
                  <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={2}>
                    <Typography variant="body2">+/- 5%, Notify via Slack</Typography>
                    <Button sx={{ color: themeGlobal.palette.common.white, padding: 0, minWidth: 'auto' }}>Edit</Button>
                    <Button sx={{ color: themeGlobal.palette.common.white, padding: 0, minWidth: 'auto' }}>
                      Delete
                    </Button>
                  </Stack>
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>NVIDIA earnings report</StyledTableCell>
                <StyledTableCell>
                  <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={2}>
                    <Typography variant="body2">Notify via Desktop</Typography>
                    <Button sx={{ color: themeGlobal.palette.common.white, padding: 0, minWidth: 'auto' }}>Edit</Button>
                    <Button sx={{ color: themeGlobal.palette.common.white, padding: 0, minWidth: 'auto' }}>
                      Delete
                    </Button>
                  </Stack>
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <Stack mb={3}>
        <Typography variant="subtitle1" color={themeGlobal.palette.common.white} mb={2}>
          Kaizu notifications
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 400 }}>
            <TableBody>
              <TableRow>
                <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>New features</StyledTableCell>
                <StyledTableCell>
                  <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={2}>
                    <Typography variant="body2">Subscribed</Typography>
                    <Button sx={{ color: themeGlobal.palette.common.white, padding: 0, minWidth: 'auto' }}>Edit</Button>
                    <Button sx={{ color: themeGlobal.palette.common.white, padding: 0, minWidth: 'auto' }}>
                      Delete
                    </Button>
                  </Stack>
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>Weekly newsletter</StyledTableCell>
                <StyledTableCell>
                  <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={2}>
                    <Typography variant="body2">Subscribed</Typography>
                    <Button sx={{ color: themeGlobal.palette.common.white, padding: 0, minWidth: 'auto' }}>Edit</Button>
                    <Button sx={{ color: themeGlobal.palette.common.white, padding: 0, minWidth: 'auto' }}>
                      Delete
                    </Button>
                  </Stack>
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>System updates</StyledTableCell>
                <StyledTableCell>
                  <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={2}>
                    <Typography variant="body2">Notify via Desktop</Typography>
                    <Button sx={{ color: themeGlobal.palette.common.white, padding: 0, minWidth: 'auto' }}>Edit</Button>
                    <Button sx={{ color: themeGlobal.palette.common.white, padding: 0, minWidth: 'auto' }}>
                      Delete
                    </Button>
                  </Stack>
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
}
