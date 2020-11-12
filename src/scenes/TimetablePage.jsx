import {
  Fragment,
  useState
} from "react";
import Timetable from "./Timetable";
import Modal from "components/Modal";

import data from "../../courses/2020-10-22-ws20-gsw-courses.json";

function TimetablePage() {
  const [ selectedDate, setSelectedDate ] = useState( null );

  console.log({ selectedDate });

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
          <Timetable
            dates={ dates }
            onClickDate={(date) => {
              setSelectedDate( date );
              console.log({ date });
            }}
          />
        </div>
      </div>
      {
        selectedDate && (
          <Modal size="lg">
            <Modal.Header title="Veranstaltung" />
            <Modal.Body>{ JSON.stringify( selectedDate ) }</Modal.Body>
            <Modal.Footer>
              <button type="button" className="btn btn-primary" onClick={
                setSelectedDate( null )
              }>Close</button>
            </Modal.Footer>
          </Modal>
        )
      }
    </Fragment>
  );
}

export default TimetablePage;
