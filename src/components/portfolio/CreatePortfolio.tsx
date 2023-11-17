import { Stack, Typography, useTheme } from '@mui/material';
import { PartComponent } from '..';

interface CreatePortfolioProps {
  setModalPortfolio: React.Dispatch<React.SetStateAction<boolean>>;
  setModalTransaction: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreatePortfolio({ setModalPortfolio, setModalTransaction }: CreatePortfolioProps) {
  const theme = useTheme();

  return (
    <>
      <Stack sx={{ cursor: 'pointer', '&:hover': { opacity: 0.75 } }}>
        <PartComponent
          padding="10px"
          backgroundImage="linear-gradient(to top, rgba(12, 23, 29, 1), rgba(14, 31, 40, 1))"
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Stack sx={{ width: '50px', height: '50px', borderRadius: '6px', backgroundColor: '#283942', padding: 1 }}>
              <img src="/images/ico_wallet.png" alt="" />
            </Stack>
            <Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="subtitle1" color={theme.palette.common.white}>
                  Connect your wallet
                </Typography>
                <Stack sx={{ padding: '1px 5px', backgroundColor: theme.palette.info.main, borderRadius: '7px' }}>
                  <Typography variant="caption" color={theme.palette.common.black}>
                    Beta
                  </Typography>
                </Stack>
              </Stack>
              <Typography variant="caption" color={theme.palette.grey[100]}>
                Enter your wallet address and we`ll sync it
              </Typography>
            </Stack>
          </Stack>
        </PartComponent>
      </Stack>
      <Stack sx={{ cursor: 'pointer', '&:hover': { opacity: 0.75 } }}>
        <PartComponent
          padding="10px"
          backgroundImage="linear-gradient(to top, rgba(12, 23, 29, 1), rgba(14, 31, 40, 1))"
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Stack sx={{ width: '50px', height: '50px', borderRadius: '6px', backgroundColor: '#283942', padding: 1 }}>
              <Stack
                sx={{
                  width: '28px',
                  height: '36px',
                  '& img': {
                    width: '100%',
                    height: '100%',
                  },
                  marginLeft: '3px',
                }}
              >
                <img src="/images/ico_loop.png" alt="" />
              </Stack>
            </Stack>
            <Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="subtitle1" color={theme.palette.common.white}>
                  Connect your exchange or brokerage
                </Typography>
                <Stack sx={{ padding: '1px 5px', backgroundColor: theme.palette.info.main, borderRadius: '7px' }}>
                  <Typography variant="caption" color={theme.palette.common.black}>
                    Beta
                  </Typography>
                </Stack>
              </Stack>
              <Typography variant="caption" color={theme.palette.grey[100]}>
                Connect to one of our supported exchanges or brokerages.
              </Typography>
            </Stack>
          </Stack>
        </PartComponent>
      </Stack>
      <Stack
        sx={{ cursor: 'pointer', '&:hover': { opacity: 0.75 } }}
        onClick={() => {
          setModalPortfolio(false);
          setModalTransaction(true);
        }}
      >
        <PartComponent
          padding="10px"
          backgroundImage="linear-gradient(to top, rgba(12, 23, 29, 1), rgba(14, 31, 40, 1))"
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Stack sx={{ width: '50px', height: '50px', borderRadius: '6px', backgroundColor: '#283942', padding: 1 }}>
              <Stack
                sx={{
                  width: '34px',
                  height: '36px',
                  '& img': {
                    width: '100%',
                    height: '100%',
                  },
                }}
              >
                <img src="/images/ico_edit.png" alt="" />
              </Stack>
            </Stack>
            <Stack>
              <Typography variant="subtitle1" color={theme.palette.common.white}>
                Add transaction manually
              </Typography>
              <Typography variant="caption" color={theme.palette.grey[100]}>
                Enter all transactions details at your own pace.
              </Typography>
            </Stack>
          </Stack>
        </PartComponent>
      </Stack>
      <Stack sx={{ cursor: 'pointer', '&:hover': { opacity: 0.75 } }}>
        <PartComponent
          padding="10px"
          backgroundImage="linear-gradient(to top, rgba(12, 23, 29, 1), rgba(14, 31, 40, 1))"
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Stack sx={{ width: '50px', height: '50px', borderRadius: '6px', backgroundColor: '#283942', padding: 1 }}>
              <Stack
                sx={{
                  width: '31px',
                  height: '36px',
                  '& img': {
                    width: '100%',
                    height: '100%',
                  },
                }}
              >
                <img src="/images/ico_csv.png" alt="" />
              </Stack>
            </Stack>
            <Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="subtitle1" color={theme.palette.common.white}>
                  Upload a CSV file
                </Typography>
                <Stack sx={{ padding: '1px 8px', backgroundColor: '#cfdce3', borderRadius: '7px' }}>
                  <Typography variant="caption" color={theme.palette.common.black}>
                    Download Template
                  </Typography>
                </Stack>
              </Stack>
              <Typography variant="caption" color={theme.palette.grey[100]}>
                Download the template to view the proper format
              </Typography>
            </Stack>
          </Stack>
        </PartComponent>
      </Stack>
    </>
  );
}
