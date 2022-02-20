import { useState } from "react";
import { formatDate } from "../../utils/dateFormater";

export default function DatePicker({ initialValue }) {
  const [date, setDate] = useState(formatDate(initialValue));
  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <input
        type="date"
        value={date}
        onChange={(e) => handleChange(e)}
        autoFocus
      />
    </>
  );
}
