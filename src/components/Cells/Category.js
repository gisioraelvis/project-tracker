import Option from "../InputTypes/SelectDropDown";

export default function Category({ cellData }) {
  return (
    <>
      <td>
        <Option initialValues={cellData} />
      </td>
    </>
  );
}
