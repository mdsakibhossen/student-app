import "./App.css";
import Header from "./components/Header";
import StudentListSection from "./components/StudentListSection";

function App() {
  return (
    <div className="App flex flex-col gap-5 items-center">
      <Header />
      <StudentListSection className="mt-15" />
    </div>
  );
}

export default App;
