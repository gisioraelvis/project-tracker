import Option from "../InputTypes/SelectDropDown";

export default function Client({ cellData }) {
  return (
    <>
      <td>
        <Option initialValues={cellData} />
      </td>
    </>
  );
}
