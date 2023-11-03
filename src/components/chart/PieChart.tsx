import { useTheme } from '@mui/material';
import { PieChart as PieChartComponent } from '@mui/x-charts';

interface PieChartProps {
  data: Array<{ label: string; value: number; color: string }>;
  size: { width: number; height: number };
}

export default function PieChart({ data, size }: PieChartProps) {
  const theme = useTheme();

  return (
    <PieChartComponent
      series={[{ data, innerRadius: 80 }]}
      {...size}
      slotProps={{
        legend: {
          labelStyle: {
            fontSize: 12,
            fontWeight: 600,
            fill: theme.palette.common.white,
          },
          markGap: 8,
          itemMarkWidth: 14,
          itemMarkHeight: 14,
          itemGap: 15,
        },
      }}
      sx={{
        '.MuiChartsLegend-mark': {
          rx: 10,
        },
      }}
    />
  );
}
