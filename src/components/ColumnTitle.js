import React from "react";

const columnTitles = [
  "Name",
  "Category",
  "Complete",
  "Project Image",
  "Client",
  "Project lead",
  "Project team",
  "Kick-off Date",
  "Due Date",
  "Notes",
  "Tasks",
];

export default function TableHead() {
  return (
    <thead>
      <tr>
        {columnTitles.map((title) => (
          <th key={title}>{title}</th>
        ))}
      </tr>
    </thead>
  );
}
