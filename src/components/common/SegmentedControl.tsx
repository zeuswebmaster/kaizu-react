import { useState, createRef, useEffect } from 'react';
import { Button, Stack, useTheme } from '@mui/material';
import useWidth from '../../hooks/useWidth';

interface SegmentedControlProps {
  options: { label: string; value: number }[];
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  color: string;
  styles: any;
  btnStyles: any;
  borderRadius: number;
  top: number;
  height: number;
}

export default function SegmentedControl({
  options,
  value,
  color,
  styles,
  btnStyles,
  borderRadius,
  top,
  height,
  setValue,
}: SegmentedControlProps) {
  const theme = useTheme();
  const windowWidth = useWidth();
  const buttonRefs: any = [];

  const [selectorStyle, setSelectorStyle] = useState<{ width: number; left: number }>({ width: 0, left: 0 });

  options.map(() => buttonRefs.push(createRef()));

  useEffect(() => {
    const index = options?.findIndex((option) => option.value === value);

    if (index !== -1) {
      const button = buttonRefs[index].current;
      const width = Math.round(button?.getBoundingClientRect()?.width as number) + 1;
      const left =
        Math.round(
          (button?.getBoundingClientRect()?.x as number) - (button?.parentNode?.getBoundingClientRect()?.x as number)
        ) - 1;
      setSelectorStyle({
        width,
        left,
      });
    }
  }, [value, windowWidth]);

  return (
    <Stack position="relative" direction="row" sx={styles}>
      {options?.map((item: { label: string; value: number }, key: number) => (
        <Button
          ref={buttonRefs[key]}
          key={item.value}
          sx={{
            color: item.value === value ? theme.palette.common.white : theme.palette.common.black,
            ...btnStyles,
          }}
          onClick={() => setValue(item.value)}
        >
          {item.label}
        </Button>
      ))}

      {value && (
        <Stack
          sx={{
            position: 'absolute',
            top: `${top}px`,
            left: selectorStyle.left,
            width: selectorStyle.width,
            height,
            borderRadius: `${borderRadius}px`,
            transition: 'all ease-in .2s',
            zIndex: 1,
            backgroundColor: color,
          }}
        />
      )}
    </Stack>
  );
}
