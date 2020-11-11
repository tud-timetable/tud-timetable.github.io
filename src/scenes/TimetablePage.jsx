import {
  Fragment
} from "react";
import Timetable from "./Timetable";

function TimetablePage() {
  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <h1>Stundenplan</h1>
        </div>
      </div>
      <div className="row">
        <select>
          <option>Studiengang ...</option>
        </select>
      </div>
      <div className="row">
        <div className="col">
          <Timetable dates={[]} />
        </div>
      </div>
    </Fragment>
  );
}

export default TimetablePage;
