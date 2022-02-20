import { useState } from "react";

export default function Option({ initialValues }) {
  const [selectValues, setSelectValues] = useState(initialValues);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectValues(initialValues);
  };

  return (
    <>
      <select id="select-dropDown" onChange={handleChange}>
        <option value={selectValues.selected}>
          {selectValues.selected || "Select"}
        </option>
        {selectValues.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
