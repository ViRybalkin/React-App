import './Chart.css';
import { ChartBar } from './ChartBar';

export const Chart = props => {
  console.log(props);
  const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
  let totalMaximum = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => {
        return (
          <ChartBar
            label={dataPoint.label}
            maxValue={totalMaximum}
            value={dataPoint.value}
            key={dataPoint.label}
          />
        );
      })}
    </div>
  );
};
