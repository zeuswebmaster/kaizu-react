import { PieChart as PieChartComponent } from '@mui/x-charts';
import useResponsive from '../../hooks/useResponsive';

interface PieChartProps {
  data: Array<{ label: string; value: number; color: string }>;
  size: { width: number; height: number };
}

export default function PieChart({ data, size }: PieChartProps) {
  const isSmDown = useResponsive('down', 'sm');

  return (
    <PieChartComponent
      series={[{ data, innerRadius: 100, outerRadius: 85 }]}
      {...size}
      slotProps={{
        legend: {
          hidden: true,
        },
      }}
      sx={{
        '.MuiChartsLegend-mark': {
          rx: 10,
        },
      }}
      margin={{
        left: isSmDown ? 100 : -50,
      }}
    />
  );
}
