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

export default function Invoices() {
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
              <StyledTableCell>INVOICE #</StyledTableCell>
              <StyledTableCell align="right">DATE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>Invoice #1</StyledTableCell>
              <StyledTableCell align="right">July 2023</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>Invoice #2</StyledTableCell>
              <StyledTableCell align="right">August 2023</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell sx={{ color: themeGlobal.palette.grey[400] }}>Invoice #3</StyledTableCell>
              <StyledTableCell align="right">September 2023</StyledTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
