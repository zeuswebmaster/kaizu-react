import { LineChart as LineChartComponent } from '@mui/x-charts';

interface LineChartProps {
  xAxis: Array<any>;
  series: Array<any>;
  height?: number;
}

export default function LineChart({ xAxis, series, height = 350 }: LineChartProps) {
  return (
    <LineChartComponent
      xAxis={xAxis}
      series={series}
      height={height}
      sx={{
        '.MuiLineElement-root': {
          display: 'none',
          width: '100%',
        },
        '.MuiChartsAxis-tickLabel': {
          fill: '#fff !important',
        },
        '.MuiChartsAxis-line': {
          stroke: '#fff !important',
        },
        '.MuiChartsAxis-tick': {
          stroke: '#fff !important',
        },
      }}
    />
  );
}
