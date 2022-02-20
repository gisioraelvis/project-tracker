import TextInput from "../InputTypes/TextInput";

export default function ProjectTeam({ cellData }) {
  return (
    <>
      <td>
        <TextInput initialValue={cellData} />
      </td>
    </>
  );
}
