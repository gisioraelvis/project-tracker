import { useState } from "react";

export default function Complete({ cellData }) {
  const [checkedStatus, setCheckedStatus] = useState(cellData);

  console.log(`Updated complete status to: ${cellData}`);

  // Toggle checked status of checkbox
  const handleChange = () => {
    setCheckedStatus(!checkedStatus);
  };

  return (
    <>
      <td>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={checkedStatus}
          style={{ color: "blue" }}
        />
      </td>
    </>
  );
}
