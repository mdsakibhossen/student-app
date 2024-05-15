import React, { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const StudentForm = () => {
  const { studentStates, submitHandler, dispatch } = useContext(StudentContext);
  return (
    <form
      className="flex flex-col sm:flex-row gap-4 w-full flex-1"
      onSubmit={submitHandler}
    >
      <input
        onChange={(e) =>
          dispatch({ type: "CHANGE_STUDENT_NAME", payload: e.target.value })
        }
        value={studentStates.studentName}
        type="text"
        className="outline outline-2 focus:outline-blue-500 outline-slate-500 bg-transparent rounded-sm flex-1 p-2"
        placeholder="Enter Student Name"
      />
      <button
        className={`${
          studentStates.editMode
            ? "bg-green-500 hover:bg-green-700"
            : "bg-blue-600 hover:bg-blue-700"
        }  py-2 px-3 rounded transition-all`}
      >
        {studentStates.editMode ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
};

export default StudentForm;
