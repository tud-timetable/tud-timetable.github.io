import TimetableHead from "./TableHead";
import TimetableBody from "./TableBody";

function Timetable({
  children
}) {
  console.log(children);

  return (
    <div className="table-responsive-sm">
      <table className="w-100 table-bordered">
        <TimetableHead />
        <TimetableBody
          children={ children }
        />
      </table>
    </div>
  );
}

export default Timetable;
