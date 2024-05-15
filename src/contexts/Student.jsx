import { createContext, useReducer } from "react";
import { studentReducer } from "../reducers/student";

// Creating Student Context
export const StudentContext = createContext();

// Initial States of Student Reducer
const initialStates = {
  studentName: "",
  students: [],
  editMode: false,
  editableStudent: null,
  searchValue: "",
};

// Student Provider Wrapper Component
const StudentProvider = ({ children }) => {
  const [studentStates, dispatch] = useReducer(studentReducer, initialStates);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!studentStates.studentName) {
      return alert(`Please Enter Student Name`);
    }
    studentStates.editMode
      ? dispatch({ type: "UPDATE_STUDENT" })
      : dispatch({ type: "ADD_STUDENT" });
  };

  const ctxValue = {
    studentStates,
    dispatch,
    submitHandler,
  };
  return (
    <div className="w-full h-full min-h-screen bg-slate-700 text-slate-200">
      <StudentContext.Provider value={ctxValue}>
        {children}
      </StudentContext.Provider>
    </div>
  );
};
export default StudentProvider;
