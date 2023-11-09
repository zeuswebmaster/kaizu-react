import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IconButton, Menu, Stack, Tooltip, useTheme } from '@mui/material';
import { MenuItem as Items } from '../../types/global';

export default function MenuSmall({ MENUS, onExpandMenu }: { MENUS: Items[]; onExpandMenu: (index: string) => void }) {
  const router = useNavigate();
  const theme = useTheme();

  const [menuStudio, setMenuStudio] = useState<HTMLElement | null>(null);
  const [menuCalendar, setMenuCalendar] = useState<HTMLElement | null>(null);

  const handleOpenStudioMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuStudio(event.currentTarget);
  };

  const handleOpenCalendarMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuCalendar(event.currentTarget);
  };

  const handleCloseStudioMenu = (index?: string) => {
    setMenuStudio(null);

    if (index) router(index);
  };

  const handleCloseCalendarMenu = (index?: string) => {
    setMenuCalendar(null);

    if (index) router(index);
  };

  return (
    <Stack
      sx={{
        width: '50px',
        borderRadius: '8px',
        backgroundColor: '#091319',
        boxShadow:
          '0px 1px 9px 6px rgba(0, 0, 0, 0.2), 0px 13px 24px 10px rgba(0, 0, 0, 0.14), 0px 6px 30px 10px rgba(0, 0, 0, 0.12)',
      }}
    >
      {MENUS.map((item: Items) => (
        <Fragment key={item.key}>
          <Tooltip title={item.value} arrow placement="right">
            <IconButton
              sx={{
                padding: '12px',
                '&:hover': {
                  '& svg': {
                    color: theme.palette.warning.main,
                  },
                },
              }}
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                if (item.key === 'studio') {
                  handleOpenStudioMenu(e);
                  return;
                }

                if (item.key === 'calendar') {
                  handleOpenCalendarMenu(e);
                  return;
                }

                onExpandMenu(item.key);
              }}
            >
              {item.icon}
            </IconButton>
          </Tooltip>

          {item.key === 'studio' && (
            <Menu
              sx={{ ml: 7 }}
              anchorEl={menuStudio}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(menuStudio)}
              onClose={() => handleCloseStudioMenu()}
            >
              {item?.children?.map((subItem: Items) => (
                <Stack
                  key={subItem.key}
                  sx={{
                    padding: '8px 16px',
                    cursor: 'pointer',
                    '&:hover': {
                      '& p': {
                        color: theme.palette.warning.main,
                      },
                    },
                  }}
                  onClick={() => handleCloseStudioMenu(subItem.key)}
                >
                  {subItem.label}
                </Stack>
              ))}
            </Menu>
          )}

          {item.key === 'calendar' && (
            <Menu
              sx={{ ml: 7 }}
              anchorEl={menuCalendar}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(menuCalendar)}
              onClose={() => handleCloseCalendarMenu()}
            >
              {item?.children?.map((subItem: Items) => (
                <Stack
                  key={subItem.key}
                  sx={{
                    padding: '8px 16px',
                    cursor: 'pointer',
                    '&:hover': {
                      '& p': {
                        color: theme.palette.warning.main,
                      },
                    },
                  }}
                  onClick={() => handleCloseCalendarMenu(subItem.key)}
                >
                  {subItem.label}
                </Stack>
              ))}
            </Menu>
          )}
        </Fragment>
      ))}
    </Stack>
  );
}
