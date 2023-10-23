import { Stack, Typography } from '@mui/material';

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
          <Typography fontSize={14} fontWeight={500} color="#fff">
            Theme
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: 20,
              height: 20,
              backgroundColor: '#101d24',
              borderRadius: '100%',
              ...(selectTheme === 'light' ? { border: '3px solid #30444f' } : { border: '3px solid #1f3845' }),
              cursor: 'pointer',
            }}
            onClick={() => handleSelectTheme('light')}
          ></Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: 20,
              height: 20,
              backgroundColor: '#fff',
              borderRadius: '100%',
              ...(selectTheme === 'dark' ? { border: '3px solid #30444f' } : { border: '3px solid #1f3845' }),
              cursor: 'pointer',
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
            <Typography fontSize={12} fontWeight={500} color="#fff">
              System
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2} marginBottom={2}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <FormatColorTextIcon sx={{ color: '#3aad9b' }} />
          <Typography fontSize={14} fontWeight={500} color="#fff">
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
              fontSize={12}
              fontWeight={selectFontSize === '12' ? 700 : 500}
              color={`${selectFontSize === '12' ? '#fff' : '#43bba4'}`}
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
              fontSize={14}
              fontWeight={selectFontSize === '14' ? 700 : 500}
              color={`${selectFontSize === '14' ? '#fff' : '#43bba4'}`}
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
              fontSize={16}
              fontWeight={selectFontSize === '16' ? 700 : 500}
              color={`${selectFontSize === '16' ? '#fff' : '#43bba4'}`}
            >
              Aa
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <WallpaperIcon sx={{ color: '#3aad9b' }} />
          <Typography fontSize={14} fontWeight={500} color="#fff">
            Wallpaper
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}></Stack>
      </Stack>
    </Stack>
  );
}
