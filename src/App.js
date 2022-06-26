import { useState } from "react";
import Expence from "./components/Expence/Expence";
import NewExpence from "./components/NewExpence/NewExpence";

const DUMMY_EXPENCE = [
  {
    id: 1,
    desc: "Google",
    price: "1000",
    date: new Date(2022, 6, 21),
  },

  {
    id: 2,
    desc: "Micro-Soft",
    price: "950",
    date: new Date(2022, 2, 29),
  },

  {
    id: 3,
    desc: "Amazon",
    price: "1100",
    date: new Date(2022, 3, 5),
  },

  {
    id: 4,
    desc: "Flipkart",
    price: "850",
    date: new Date(2022, 7, 5),
  },
];
function App() {
  const [expence, setExpence] = useState(DUMMY_EXPENCE);

  // return React.createElement('div',{},React.createElement('h2',{},'This Was used in Past'),React.createElement(Expence,{items:expence}));
  const addExpenceHandler = (addExpenceData) => {
    // setExpence([addExpenceData, ...expence]);
    setExpence((prevExpence) => {
      return [addExpenceData, ...prevExpence];
    });
    // console.log(expence);
    // console.log(addExpenceData);
  };
  return (
    <div>
      <NewExpence onAddExpence={addExpenceHandler} />
      <Expence items={expence} />
    </div>
  );
}

export default App;
