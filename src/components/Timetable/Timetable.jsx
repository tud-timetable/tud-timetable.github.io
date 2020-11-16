import TimetableHead from "./TableHead";
import TimetableBody from "./TableBody";

function noop() {}

function Timetable({
  dates,
  onClickDate = noop
}) {
  return (
    <div className="table-responsive-sm">
      <table className="w-100 table-bordered">
        <TimetableHead />
        <TimetableBody
          dates={ dates }
          onClickDate={ onClickDate }
        />
      </table>
    </div>
  );
}

export default Timetable;
