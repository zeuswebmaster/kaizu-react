import { Fragment } from 'react';
import { Collapse, List, Stack, styled, useTheme } from '@mui/material';
import { MenuItem as Items } from '../../types/global';

export default function MenuNormal({
  MENUS,
  onExpandMenu,
  expandStudio,
  expandCalendar,
}: {
  MENUS: Items[];
  onExpandMenu: (index: string) => void;
  expandStudio: boolean;
  expandCalendar: boolean;
}) {
  const theme = useTheme();

  const StyleMenuWrapper = styled('div')(() => ({
    '&:hover': {
      '& svg': {
        color: theme.palette.warning.main,
      },
      '& p': {
        color: theme.palette.warning.main,
      },
    },
  }));

  return (
    <Stack
      sx={{
        width: '187px',
        borderRadius: '8px',
        backgroundColor: theme.palette.background.paper,
        boxShadow:
          '0px 1px 9px 6px rgba(0, 0, 0, 0.2), 0px 13px 24px 10px rgba(0, 0, 0, 0.14), 0px 6px 30px 10px rgba(0, 0, 0, 0.12)',
      }}
    >
      <List sx={{ padding: 0 }}>
        {MENUS.map((item: Items) => (
          <Fragment key={item.key}>
            <StyleMenuWrapper
              sx={{
                width: '100%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={() => onExpandMenu(item.key)}
            >
              <Stack
                sx={{
                  width: '40px',
                  backgroundColor: '#091319',
                  borderRight: '1px solid rgb(0 0 0 / 10%)',
                  borderTopLeftRadius: '8px',
                  borderBottomLeftRadius: '8px',
                  padding: '12px 8px',
                }}
              >
                {item.icon}
              </Stack>
              <Stack>{item.label}</Stack>
            </StyleMenuWrapper>

            <Collapse in={item.key === 'studio' ? expandStudio : expandCalendar} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item?.children?.map((subItem: Items) => (
                  <StyleMenuWrapper
                    key={subItem.key}
                    sx={{
                      width: '100%',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    onClick={() => onExpandMenu(subItem.key)}
                  >
                    <Stack
                      sx={{
                        width: '40px',
                        backgroundColor: '#091319',
                        borderRight: '1px solid rgb(0 0 0 / 10%)',
                        borderTopLeftRadius: '8px',
                        borderBottomLeftRadius: '8px',
                        padding: '17px 8px',
                      }}
                    ></Stack>
                    <Stack direction="row" alignItems="center" spacing={0.5} sx={{ paddingLeft: '5px' }}>
                      {subItem.icon}
                      {subItem.label}
                    </Stack>
                  </StyleMenuWrapper>
                ))}
              </List>
            </Collapse>
          </Fragment>
        ))}
      </List>
    </Stack>
  );
}
