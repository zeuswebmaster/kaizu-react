import { useNavigate } from 'react-router-dom';
import { Box, Button, Menu, MenuItem, Stack, Typography, useTheme } from '@mui/material';

import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import RectangleIcon from '@mui/icons-material/Rectangle';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { PartComponent } from '..';
import useWidth from '../../hooks/useWidth';

interface MenuSelectItemProps {
  icon: React.ReactNode;
  isEdit?: boolean;
  title: string;
  info?: string;
  value?: number;
  subInfo?: React.ReactNode;
  otherInfo?: React.ReactNode;
  url?: string;
  menu?: HTMLElement;
  onOpen?: (e: React.MouseEvent<HTMLElement>) => void;
  onClose?: () => void;
  mask?: boolean;
  setMask?: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete?: (index?: string) => void;
  kind: string;
  color?: string;
}

export default function MenuSelectItem({
  icon,
  isEdit = true,
  title,
  info,
  subInfo,
  value,
  url,
  menu,
  onOpen,
  onClose,
  mask,
  setMask,
  onDelete,
  kind,
  otherInfo,
  color,
}: MenuSelectItemProps) {
  const router = useNavigate();
  const themeGlobal = useTheme();
  const windowWidth = useWidth();

  return (
    <PartComponent padding="11px" backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))">
      {mask && (
        <Stack
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ borderRadius: '7px', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: '1' }}
        >
          <Typography variant="subtitle2" color={themeGlobal.palette.common.white} textAlign="center">
            Are you sure you want
            <br />
            to delete this {kind}?
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#5a686f', '&:hover': { backgroundColor: '#2d4551' } }}
              onClick={() => {
                if (setMask) setMask(false);
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                if (onDelete) onDelete();
              }}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      )}

      <Stack>
        <Stack direction="row" alignItems="center" justifyContent="flex-end" height={24}>
          {isEdit && (
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Stack>
                <Button
                  variant="contained"
                  startIcon={<EditSharpIcon />}
                  sx={{
                    backgroundColor: '#0E1D24',
                    padding: '2px 6px',
                    minWidth: 'auto',
                    '& span': {
                      marginRight: '-3px',
                    },
                    '& svg': { color: themeGlobal.palette.common.white, width: '20px', height: '20px' },
                    '&:hover': {
                      backgroundColor: '#2d4551',
                    },
                  }}
                  onClick={onOpen}
                />
                <Menu
                  disableScrollLock
                  sx={{ marginTop: '26px' }}
                  anchorEl={menu as HTMLElement}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  open={Boolean(menu)}
                  onClose={onClose}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      '&::before': {
                        backgroundColor: '#223946',
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        width: 8,
                        height: 8,
                        top: '-12px',
                        transform: 'rotate(45deg)',
                        left: 'calc((100% / 2) - 5px)',
                      },
                    }}
                  />
                  <MenuItem onClick={onClose}>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ width: 22, height: 22, borderRadius: '4px', backgroundColor: '#4a5f6b' }}
                      >
                        <Stack sx={{ width: 14, height: 14 }}>
                          <img src="/images/share.png" alt="" />
                        </Stack>
                      </Stack>
                      <Typography variant="subtitle2" color={themeGlobal.palette.common.white}>
                        Share
                      </Typography>
                    </Stack>
                  </MenuItem>
                  <MenuItem onClick={onClose}>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ width: 22, height: 22, borderRadius: '4px', backgroundColor: '#4a5f6b' }}
                      >
                        <RectangleIcon sx={{ width: 18, height: 18, color: themeGlobal.palette.common.white }} />
                      </Stack>
                      <Typography variant="subtitle2" color={themeGlobal.palette.common.white}>
                        Rename
                      </Typography>
                    </Stack>
                  </MenuItem>
                  <MenuItem onClick={onClose}>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ width: 22, height: 22, borderRadius: '4px', backgroundColor: '#4a5f6b' }}
                      >
                        <DeleteOutlinedIcon sx={{ width: 18, height: 18, color: themeGlobal.palette.common.white }} />
                      </Stack>
                      <Typography variant="subtitle2" color={themeGlobal.palette.common.white}>
                        Delete
                      </Typography>
                    </Stack>
                  </MenuItem>
                </Menu>
              </Stack>
              <Button
                variant="contained"
                startIcon={<DeleteForeverSharpIcon />}
                sx={{
                  backgroundColor: '#0E1D24',
                  padding: '2px 6px',
                  minWidth: 'auto',
                  '& span': {
                    marginRight: '-3px',
                  },
                  '& svg': { color: themeGlobal.palette.common.white, width: '20px', height: '20px' },
                  '&:hover': {
                    backgroundColor: '#2d4551',
                  },
                }}
                onClick={() => {
                  if (setMask) setMask(true);
                }}
              />
            </Stack>
          )}
        </Stack>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ cursor: 'pointer' }}
          minWidth={{ md: 0, sm: windowWidth - 508, xxs: windowWidth - 91 }}
          onClick={() => {
            if (url) router(`${url}`);
          }}
        >
          <Stack mb={2} width={64} height={64}>
            {icon}
          </Stack>
          <Typography variant="subtitle1" color={themeGlobal.palette.common.white} mb={1}>
            {title}
          </Typography>

          {info && (
            <Stack direction="row" alignItems="center" spacing={1} {...(!otherInfo ? { mb: 1 } : {})}>
              <Typography variant="caption" color={themeGlobal.palette.common.white}>
                {info}
              </Typography>
              <>
                {value && (
                  <Typography
                    variant="caption"
                    color={value >= 0 ? themeGlobal.palette.info.main : themeGlobal.palette.error.main}
                  >
                    ({value >= 0 ? '+' : '-'}
                    {value}%)
                  </Typography>
                )}
              </>
            </Stack>
          )}

          {otherInfo && (
            <Typography variant="caption" color={color} textAlign="center">
              {otherInfo}
            </Typography>
          )}

          <Typography variant="caption" color={themeGlobal.palette.grey[400]} textAlign="center" mb={1}>
            {subInfo}
          </Typography>
        </Stack>
      </Stack>
    </PartComponent>
  );
}
