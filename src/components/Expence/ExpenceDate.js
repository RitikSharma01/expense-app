import Card from "../UI/Card";
import "./ExpenceDate.css";

function ExpenceDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <Card className="expence-date">
      <div className="expence-date__month">{month}</div>
      <div className="expence-date__year">{year}</div>
      <div className="expence-date__day">{day}</div>
    </Card>
  );
}

export default ExpenceDate;
