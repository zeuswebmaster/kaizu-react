import { Stack, Typography, useTheme } from '@mui/material';

import PaletteIcon from '@mui/icons-material/Palette';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import WallpaperIcon from '@mui/icons-material/Wallpaper';

type ThemeProps = {
  selectTheme: string;
  setSelectTheme: React.Dispatch<React.SetStateAction<string>>;
  selectFontSize: string;
  setSelectFontSize: React.Dispatch<React.SetStateAction<string>>;
  setMenuTheme: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
};

export default function ThemeItem({
  selectTheme,
  setSelectTheme,
  selectFontSize,
  setSelectFontSize,
  setMenuTheme,
}: ThemeProps) {
  const theme = useTheme();

  const styleThemeSelect = {
    width: 20,
    height: 20,
    borderRadius: '100%',
    cursor: 'pointer',
  };

  const handleSelectTheme = (value: string) => {
    setSelectTheme(value);
    setMenuTheme(null);
  };

  const handleSelectFontSize = (value: string) => {
    setSelectFontSize(value);
    setMenuTheme(null);
  };

  return (
    <Stack sx={{ padding: '5px 17px' }}>
      <Stack direction="row" alignItems="center" spacing={2} marginBottom={2}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <PaletteIcon sx={{ color: '#3aad9b' }} />
          <Typography variant="body2" color={theme.palette.common.white}>
            Theme
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              ...styleThemeSelect,
              backgroundColor: '#101d24',
              ...(selectTheme === 'light' ? { border: '3px solid #30444f' } : { border: '3px solid #1f3845' }),
            }}
            onClick={() => handleSelectTheme('light')}
          ></Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              ...styleThemeSelect,
              backgroundColor: theme.palette.common.white,
              ...(selectTheme === 'dark' ? { border: '3px solid #30444f' } : { border: '3px solid #1f3845' }),
            }}
            onClick={() => handleSelectTheme('dark')}
          ></Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              cursor: 'pointer',
              borderRadius: '5px',
              padding: '3px 8px',
              ...(selectTheme === 'system' ? { backgroundColor: '#30444f' } : {}),
            }}
            onClick={() => handleSelectTheme('system')}
          >
            <Typography variant="caption" color={theme.palette.common.white}>
              System
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2} marginBottom={2}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <FormatColorTextIcon sx={{ color: '#3aad9b' }} />
          <Typography variant="body2" color={theme.palette.common.white}>
            Font Size
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              cursor: 'pointer',
              borderRadius: '5px',
              padding: '3px 8px',
              ...(selectFontSize === '12' ? { backgroundColor: '#30444f' } : {}),
            }}
            onClick={() => handleSelectFontSize('12')}
          >
            <Typography
              variant="caption"
              fontWeight={selectFontSize === '12' ? 600 : 500}
              color={`${selectFontSize === '12' ? theme.palette.common.white : '#43bba4'}`}
            >
              Aa
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              cursor: 'pointer',
              borderRadius: '5px',
              padding: '3px 8px',
              ...(selectFontSize === '14' ? { backgroundColor: '#30444f' } : {}),
            }}
            onClick={() => handleSelectFontSize('14')}
          >
            <Typography
              variant={selectFontSize === '14' ? 'subtitle2' : 'body2'}
              color={`${selectFontSize === '14' ? theme.palette.common.white : '#43bba4'}`}
            >
              Aa
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              cursor: 'pointer',
              borderRadius: '5px',
              padding: '3px 8px',
              ...(selectFontSize === '16' ? { backgroundColor: '#30444f' } : {}),
            }}
            onClick={() => handleSelectFontSize('16')}
          >
            <Typography
              variant={selectFontSize === '16' ? 'subtitle1' : 'body1'}
              color={`${selectFontSize === '16' ? theme.palette.common.white : '#43bba4'}`}
            >
              Aa
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <WallpaperIcon sx={{ color: '#3aad9b' }} />
          <Typography variant="subtitle2" color={theme.palette.common.white}>
            Wallpaper
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}></Stack>
      </Stack>
    </Stack>
  );
}
