import { useState } from "react";
import ExpenceForm from "./ExpenceForm";
import "./NewExpence.css";

const NewExpence = (props) => {
  const [isEditing, setEditing] = useState(false);

  const saveExpenceHandler = (enteredExpenceData) => {
    const expenceData = {
      ...enteredExpenceData,
      id: Math.random().toString(),
    };
    props.onAddExpence(expenceData);
    setEditing(false);
  };
  const showExpenceTool = () => {
    setEditing(true);
  };
  const stopShowExpenceTool = () => {
    setEditing(false);
  };
  return (
    <div className="expence__container">
      {!isEditing && (
        <button onClick={showExpenceTool}>Add New Expence </button>
      )}

      {isEditing && (
        <ExpenceForm
          onSaveExpenceData={saveExpenceHandler}
          onCancel={stopShowExpenceTool}
        />
      )}
    </div>
  );
};
export default NewExpence;
