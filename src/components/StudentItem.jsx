import React, { useContext } from "react";
import { StudentContext } from "../contexts/Student";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
const StudentItem = (props) => {
  const { student, title } = props;
  const { dispatch } = useContext(StudentContext);
  // console.log(student, student.isPresent);
  return (
    <tr>
      <td className="border border-blue-500 py-1 px-2">{student.name}</td>
      {title === "All Students" ? (
        <>
          <td className="border border-blue-500 py-1 px-2">
            <button
              onClick={() =>
                dispatch({ type: "EDIT_STUDENT", payload: student })
              }
              className="text-green-400"
            >
              <FaRegEdit />
            </button>
          </td>
          <td className="border border-blue-500 py-1 px-2">
            <button
              onClick={() =>
                dispatch({ type: "DELETE_STUDENT", payload: student.id })
              }
              className="text-red-400"
            >
              <FaRegTrashCan />
            </button>
          </td>
          <td className="border border-blue-500 py-1 px-2">
            <button
              onClick={() =>
                dispatch({
                  type: "CHANGE_PRESENT_STATUS",
                  payload: {
                    student: student,
                    isPresent: true,
                    isAllListBtnClicked: true,
                  },
                })
              }
              className="bg-blue-500 hover:bg-blue-700 transition-all px-3 py-0.5 rounded"
            >
              Present
            </button>
          </td>
          <td className="border border-blue-500 py-1 px-2">
            <button
              onClick={() =>
                dispatch({
                  type: "CHANGE_PRESENT_STATUS",
                  payload: {
                    student: student,
                    isPresent: false,
                    isAllListBtnClicked: true,
                  },
                })
              }
              className="bg-red-500 hover:bg-red-700 transition-all px-3 py-0.5 rounded"
            >
              Absent
            </button>
          </td>
        </>
      ) : (
        <>
          <td className="border border-blue-500 py-1 px-2">
            <button
              onClick={() =>
                dispatch({
                  type: "CHANGE_PRESENT_STATUS",
                  payload: {
                    student: student,
                    isPresent: !student.isPresent,
                    isAllListBtnClicked: false,
                  },
                })
              }
              className="bg-slate-500 hover:bg-slate-800 transition-all px-3 py-0.5 rounded"
            >
              {student.isPresent
                ? "Send To Absent List"
                : "Send To Present List "}
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default StudentItem;
