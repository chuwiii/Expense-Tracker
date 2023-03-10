import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const amountValues = props.dataPoints.map((dataPoints) => dataPoints.value);

  const totalAmount = Math.max(...amountValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalAmount}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
