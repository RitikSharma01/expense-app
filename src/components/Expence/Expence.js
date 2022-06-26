import "./Expence.css";
import Card from "../UI/Card";
import ExpenceFilter from "./ExpenceFilter";
import { useState } from "react";
import ExpenceList from "./ExpenceList";
import ExpenceChart from "./ExpenceChart";

function Expence(props) {
  const [filterYear, setFilterYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filterExpence = props.items.filter((expence) => {
    return expence.date.getFullYear().toString() === filterYear;
  });

  return (
    <li>
      <Card className="expences">
        <ExpenceFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenceChart expence={filterExpence} />
        <ExpenceList items={filterExpence} />
        {/* for dynamic perpose we are using that instead of thois */}
        {/* <ExpenceItem
        desc={props.items[0].desc}
        date={props.items[0].date}
        price={props.items[0].price}
      />
      <ExpenceItem
        desc={props.items[1].desc}
        date={props.items[1].date}
        price={props.items[1].price}
      />
      <ExpenceItem
        desc={props.items[2].desc}
        date={props.items[2].date}
        price={props.items[2].price}
      />
      <ExpenceItem
        desc={props.items[3].desc}
        date={props.items[3].date}
        price={props.items[3].price}
      /> */}
      </Card>
    </li>
  );
}
export default Expence;
