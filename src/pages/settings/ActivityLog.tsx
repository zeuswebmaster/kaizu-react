import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
  useTheme,
} from '@mui/material';

export default function ActivityLog() {
  const themeGlobal = useTheme();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    borderBottom: 'none',
    padding: '6px 0',
    color: theme.palette.common.white,
    [`&.${tableCellClasses.head}`]: {
      fontSize: 10,
      opacity: 0.7,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 400 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>EVENT</StyledTableCell>
              <StyledTableCell align="right">DATE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>
                Bitcoin price "Bullish" event report generated
              </StyledTableCell>
              <StyledTableCell align="right">Aug.4, 2023 at 13:06</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>
                Inflation data chart saved to Dashboard
              </StyledTableCell>
              <StyledTableCell align="right">Aug.4, 2023 at 13:06</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>
                Upvoted "How Coinbase won crypto" on News
              </StyledTableCell>
              <StyledTableCell align="right">Aug.4, 2023 at 13:06</StyledTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
