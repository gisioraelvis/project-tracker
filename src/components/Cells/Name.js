import TextInput from "../InputTypes/TextInput";

export default function Name({ cellData }) {
  return (
    <>
      <td>
        <TextInput initialValue={cellData} />
      </td>
    </>
  );
}
