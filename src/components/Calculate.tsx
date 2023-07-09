import { ChangeEventHandler } from "react";

interface CalculateProps {
  onOperationChange: ChangeEventHandler<HTMLSelectElement>;
  onValue1Change: ChangeEventHandler<HTMLInputElement>;
  onValue2Change: ChangeEventHandler<HTMLInputElement>;
}

const Calculate = ({
  onOperationChange,
  onValue1Change,
  onValue2Change,
}: CalculateProps) => {
  return (
    <div>
      <input type="number" onChange={onValue1Change} />{" "}
      <select onChange={onOperationChange}>
        <option value="add"> +</option>
        <option value="subtract"> -</option>
        <option value="multiply"> *</option>
        <option value="divide"> /</option>
      </select>{" "}
      <input type="number" onChange={onValue2Change} />
    </div>
  );
};

export default Calculate;
