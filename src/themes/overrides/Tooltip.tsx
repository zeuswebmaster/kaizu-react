export default function Tooltip() {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#cfdce3',
          color: 'rgba(0, 0, 0, 0.87)',
          fontSize: 11,
          borderRadius: '7px',
        },
        arrow: {
          color: '#cfdce3',
        },
      },
    },
  };
}
