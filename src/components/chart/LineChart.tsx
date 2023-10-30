import { LineChart as LineChartComponent } from '@mui/x-charts';

const years = [
  new Date(2012, 0, 1),
  new Date(2013, 0, 1),
  new Date(2014, 0, 1),
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1),
  new Date(2018, 0, 1),
  new Date(2019, 0, 1),
  new Date(2020, 0, 1),
  new Date(2021, 0, 1),
  new Date(2022, 0, 1),
  new Date(2023, 0, 1),
];

const FranceGDPperCapita = [
  28129, 28294.264, 28619.805, 28336.16, 28907.977, 29418.863, 29736.645, 30341.807, 31323.078, 32284.611, 33409.68,
  33920.098,
];

const UKGDPperCapita = [
  26189, 25792.014, 25790.186, 26349.342, 27277.543, 27861.215, 28472.248, 29259.764, 30077.385, 30932.537, 31946.037,
  32660.441,
];

export default function LineChart() {
  return (
    <LineChartComponent
      xAxis={[
        {
          id: 'Years',
          data: years,
          scaleType: 'time',
          valueFormatter: (date) => date.getFullYear().toString(),
        },
      ]}
      series={[
        {
          id: 'France',
          data: FranceGDPperCapita,
          stack: 'total',
          area: true,
          showMark: false,
          color: '#e29c50',
        },
        {
          id: 'United Kingdom',
          data: UKGDPperCapita,
          stack: 'total',
          area: true,
          showMark: false,
          color: '#c1bdc2',
        },
      ]}
      height={350}
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
