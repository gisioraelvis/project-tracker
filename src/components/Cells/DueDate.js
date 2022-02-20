import DatePicker from "../InputTypes/DatePicker";

export default function DueDate({ cellData }) {
  return (
    <>
      <td>
        <DatePicker initialValue={cellData} />
      </td>
    </>
  );
}
