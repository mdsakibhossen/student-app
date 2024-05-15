import SearchStudent from "./SearchStudent";
import StudentForm from "./StudentForm";

const Header = () => {
  return (
    <header className="bg-slate-800 w-full p-3">
      <div className="flex flex-col md:flex-row justify-between w-full gap-5">
        <SearchStudent />
        <StudentForm />
      </div>
    </header>
  );
};

export default Header;
