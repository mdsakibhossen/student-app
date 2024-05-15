import React, { useContext } from "react";
import StudentList from "./StudentList";
import { StudentContext } from "../contexts/Student";

const StudentListSection = () => {
  const {
    studentStates: { students, searchValue },
  } = useContext(StudentContext);

  // Derived States
  const searchStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  const presentStudents = students.filter(
    (student) => student.isPresent === true
  );
  const absentStudents = students.filter(
    (student) => student.isPresent === false
  );
  return (
    <div className="flex flex-col xl:flex-row justify-between gap-5 w-full p-3">
      {students.length ? (
        <>
          <StudentList
            title="All Students"
            students={searchStudents}
            className="text w-full xl:w-2/3"
          />
          <div className="w-full flex gap-5 flex-col lg:flex-row">
            <StudentList title="Present Students" students={presentStudents} />
            <StudentList title="Absent Students" students={absentStudents} />
          </div>
        </>
      ) : (
        <>
          <h2 className="w-full text-center text-2xl">
            No Students are Available
          </h2>
        </>
      )}
    </div>
  );
};

export default StudentListSection;
