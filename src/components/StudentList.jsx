import React from "react";
import StudentItem from "./StudentItem";

const StudentList = (props) => {
  const { title, students, className } = props;
  return (
    <div className={`w-full ${className}`}>
      <h2 className="text-2xl  underline-offset-4 uppercase text-blue-400 text-center">
        {title}
      </h2>

      <div className="student-info mt-3">
        {students.length ? (
          <div className="overflow-x-auto p-2">
            <table className="border border-collapse border-blue-500 w-full text-center">
              <thead>
                <tr>
                  <th className="border border-blue-500 text-slate-200 font-medium">
                    Name
                  </th>
                  <th
                    className="border border-blue-500 text-slate-200 font-medium"
                    colSpan={4}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <StudentItem
                    key={student.id}
                    student={student}
                    title={title}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <>
            <h2 className="text-center text-xl">No Students Are Added!</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default StudentList;
