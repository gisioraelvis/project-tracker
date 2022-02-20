import * as React from "react";

export default function TextInput({ initialValue }) {
  const [value, setValue] = React.useState(initialValue);

  // set cell value to typed value
  const handleInputChange = (e) => {
    console.log(`TextInput: ${e.target.value}`);
    setValue(e.target.value);
  };

  return (
    <>
      <input
        
        type="text"
        placeholder={value}
        value={value}
        name={value}
        onChange={(e) => handleInputChange(e)}
      />
    </>
  );
}
