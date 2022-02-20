import * as React from "react";

export default function TextArea({ initialValue }) {
  const [value, setValue] = React.useState(initialValue);

  // set cell value to typed value
  const handleInputChange = (e) => {
    console.log(`TextInput: ${e.target.value}`);
    setValue(e.target.value);
  };

  return (
    <>
      <textarea
        rows="2"
        placeholder={value}
        value={value}
        name={value}
        onChange={(e) => handleInputChange(e)}
        id="outlined-basic"
      />
    </>
  );
}
