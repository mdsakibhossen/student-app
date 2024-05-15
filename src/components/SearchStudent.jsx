import React, { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const SearchStudent = () => {
  const { studentStates, dispatch } = useContext(StudentContext);
  return (
    <div className="w-full flex-1">
      <input
        onChange={(e) =>
          dispatch({ type: "SEARCH_STUDENT", payload: e.target.value })
        }
        value={studentStates.searchvalue}
        type="search"
        className="outline outline-2 focus:outline-blue-500 outline-slate-500 bg-transparent p-2 rounded w-full"
        placeholder="Search Student"
      />
    </div>
  );
};

export default SearchStudent;
