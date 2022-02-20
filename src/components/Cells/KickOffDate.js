import DatePicker from "../InputTypes/DatePicker";

export default function KickOffDate({ cellData }) {
  return (
    <>
      <td>
        <DatePicker initialValue={cellData} />
      </td>
    </>
  );
}
