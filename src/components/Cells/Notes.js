import TextArea from "../InputTypes/TextArea";

export default function Notes({ cellData }) {
  return (
    <>
      <td>
        <TextArea initialValue={cellData} />
      </td>
    </>
  );
}
