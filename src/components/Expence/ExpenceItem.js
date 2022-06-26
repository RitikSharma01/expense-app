import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate";
import Card from "../UI/Card";
function ExpenceItem(props) {
  return (
    <Card className="expence-item">
      <ExpenceDate date={props.date} />
      <div className="expence-item__description">
        <h2>{props.desc}</h2>
        <div className="expence-item__price">${props.price}</div>
      </div>
    </Card>
  );
}

export default ExpenceItem;
