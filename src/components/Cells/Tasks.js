import TextArea from "../InputTypes/TextArea";

export default function Tasks({ cellData }) {
  return (
    <>
      <td>
        <TextArea initialValue={cellData} />
      </td>
    </>
  );
}
