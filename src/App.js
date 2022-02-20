import "./App.css";
import TableHead from "./components/ColumnTitle";
import Row from "./components/Row";

export default function App() {
  return (
    <div className="App">
      <h1>Project Tracker</h1>
      <div>
        <table>
          <TableHead />
          <Row />
        </table>
      </div>
      <footer>&copy; Workpay Technologies {new Date().getFullYear()}</footer>
    </div>
  );
}
