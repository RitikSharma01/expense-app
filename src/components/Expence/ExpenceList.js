import ExpenceItem from "./ExpenceItem";
import "./ExpenceList.css";
const ExpenceList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expence-list__fallback"> Found no Expence</h2>;
  }
  return (
    <ul className="expence-list">
      {props.items.map((expence) => (
        <ExpenceItem
          key={expence.id}
          desc={expence.desc}
          date={expence.date}
          price={expence.price}
        />
      ))}
    </ul>
  );
};

export default ExpenceList;
