import { Box, Menu } from '@mui/material';
import {
  StaticDatePicker,
  pickersLayoutClasses,
  PickersLayoutProps,
  DateView,
  usePickerLayout,
  PickersLayoutRoot,
  PickersLayoutContentWrapper,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';

interface CalendarMenuProps {
  menuKind: HTMLElement;
  onClose: (index: string) => void;
}

const CustomLayout = (props: PickersLayoutProps<Dayjs | null, Dayjs, DateView>) => {
  const { toolbar, tabs, content, actionBar } = usePickerLayout(props);

  return (
    <PickersLayoutRoot
      ownerState={props}
      sx={{
        backgroundColor: 'transparent',
        color: '#fff',
        '& span, & button': {
          color: '#fff',
        },
      }}
    >
      {toolbar}
      {actionBar}
      <PickersLayoutContentWrapper className={pickersLayoutClasses.contentWrapper}>
        {tabs}
        {content}
      </PickersLayoutContentWrapper>
    </PickersLayoutRoot>
  );
};

export default function CalendarMenu({ menuKind, onClose }: CalendarMenuProps) {
  return (
    <Menu
      disableScrollLock
      sx={{ marginTop: '26px' }}
      anchorEl={menuKind}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={Boolean(menuKind)}
      onClose={() => onClose('calendar')}
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          slots={{
            layout: CustomLayout,
          }}
        />
      </LocalizationProvider>
    </Menu>
  );
}
