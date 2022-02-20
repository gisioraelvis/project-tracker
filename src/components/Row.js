import React from "react";
import Name from "./Cells/Name";
import Category from "./Cells/Category";
import Complete from "./Cells/Complete";
import ProjectImage from "./Cells/ProjectImage";
import Client from "./Cells/Client";
import ProjectLead from "./Cells/ProjectLead";
import ProjectTeam from "./Cells/ProjectTeam";
import Notes from "./Cells/Notes";
import Tasks from "./Cells/Tasks";
import KickOffDate from "./Cells/KickOffDate";
import DueDate from "./Cells/DueDate";

const rowData = [
  {
    name: "Project 1",
    category: {
      selected: null,
      options: ["P1 Category 1", "P1 Category 2", "P1 Category 3"],
    },
    complete: true,
    projectImage: [
      { title: "1Project 1", src: "/project-images/favicon.ico" },
      { title: "2Project 1", src: "/project-images/favicon.ico" },
      { title: "3Project 1", src: "/project-images/favicon.ico" },
    ],
    client: {
      selected: "P1 Client 1",
      options: ["P1 Client 1", "P1 Client 2", "P1 Client 3"],
    },
    projectLead: {
      selected: null,
      options: ["P1 Project Lead 1", "P1 Project Lead 2", "P1 Project Lead 3"],
    },
    projectTeam: "Project team 1",
    kickOffDate: "2022-02-25T14:10:26.113Z",
    dueDate: "2022-02-25T14:10:26.113Z",
    notes: "Notes 1",
    tasks: "Tasks 1",
  },
  {
    name: "Project 2",
    category: {
      selected: "P2 Category 1",
      options: ["P2 Category 1", "P2 Category 2", "P2 Category 3"],
    },
    complete: true,
    projectImage: [
      { title: "1Project 2", src: "/project-images/favicon.ico" },
      { title: "2Project 2", src: "/project-images/favicon.ico" },
      { title: "3Project 2", src: "/project-images/favicon.ico" },
    ],
    client: {
      selected: "P2 Client 1",
      options: ["P2 Client 1", "P2 Client 2", "P2 Client 3"],
    },
    projectLead: {
      selected: "P2 Project Lead 1",
      options: ["P2 Project Lead 1", "P2 Project Lead 2", "P2 Project Lead 3"],
    },
    projectTeam: "Project team 2",
    kickOffDate: "2022-02-25T14:10:26.113Z",
    dueDate: "2022-02-25T14:10:26.113Z",
    notes: "Notes 2",
    tasks: "Tasks 2",
  },
  {
    name: "Project 3",
    category: {
      selected: null,
      options: ["P1 Category 1", "P1 Category 2", "P1 Category 3"],
    },
    complete: false,
    projectImage: [
      { title: "1Project 3", src: "/project-images/favicon.ico" },
      { title: "2Project 3", src: "/project-images/favicon.ico" },
      { title: "3Project 3", src: "/project-images/favicon.ico" },
    ],
    client: {
      selected: null,
      options: ["P1 Client 1", "P1 Client 2", "P1 Client 3"],
    },
    projectLead: {
      selected: null,
      options: ["P1 Project Lead 1", "P1 Project Lead 2", "P1 Project Lead 3"],
    },
    projectTeam: "Project team 3",
    kickOffDate: "2022-02-25T14:10:26.113Z",
    dueDate: "2022-02-25T14:10:26.113Z",
    notes: "Notes 3",
    tasks: "Tasks 3",
  },
];

export default function Row() {
  return (
    <tbody>
      {rowData.map((rowData) => (
        <tr key={rowData.name}>
          <Name cellData={rowData.name} />
          <Category cellData={rowData.category} />
          <Complete cellData={rowData.complete} />
          <ProjectImage cellData={rowData.projectImage} />
          <Client cellData={rowData.client} />
          <ProjectLead cellData={rowData.projectLead} />
          <ProjectTeam cellData={rowData.projectTeam} />
          <KickOffDate cellData={rowData.kickOffDate} />
          <DueDate cellData={rowData.dueDate} />
          <Notes cellData={rowData.notes} />
          <Tasks cellData={rowData.tasks} />
        </tr>
      ))}
    </tbody>
  );
}
