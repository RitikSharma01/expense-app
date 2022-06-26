import Chart from "../Chart/Chart";
const ExpenceChart = (props) => {
  const chartDataPoint = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expences of props.expence) {
    const expenceMonth = expences.date.getMonth();
    // console.log(chartDataPoint[expenceMonth]);
    // console.log(expences.price);
    chartDataPoint[expenceMonth].value += expences.price;
    // console.log("this is Expence chart");
    // console.log(chartDataPoint[expenceMonth]);
  }

  return <Chart datapoints={chartDataPoint} />;
};

export default ExpenceChart;
