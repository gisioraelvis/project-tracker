import SelectDropDown from "../InputTypes/SelectDropDown";

export default function ProjectLead({ cellData }) {
  return (
    <>
      <td>
        <SelectDropDown initialValues={cellData} />
      </td>
    </>
  );
}
