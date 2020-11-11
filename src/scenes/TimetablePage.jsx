import {
  Fragment
} from "react";
import Timetable from "./Timetable";

import data from "../../courses/2020-10-22-ws20-gsw-courses.json";

function TimetablePage() {
  const dates = data.map((date) => {
      return date.dates.items.map((item) => ({
        ...item,
        ...date,
      }));
    })
    .flat();

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
          <Timetable dates={ dates } />
        </div>
      </div>
    </Fragment>
  );
}

export default TimetablePage;
