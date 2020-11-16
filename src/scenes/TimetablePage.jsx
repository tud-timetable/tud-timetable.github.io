import {
  Fragment,
  useState
} from "react";
import Timetable from "components/Timetable";
import Modal from "components/Modal";
import md5 from "md5";

import data from "../../courses/2020-10-22-ws20-gsw-courses.json";

function FormattedText({ children }) {
  let lines = children
    .replace(/\n\n+/, "\n\n")
    .split("\n\n");

  return (
    <Fragment>
      {
        lines
          .map((p, index) => {
            lines = p.split("\n");

            return lines.reduce((lines, line, index) => {
              if ( index === 0 ) {
                return [
                  <Fragment key={ `line-${index}` }>{ line }</Fragment>
                ];
              }

              return [
                ...lines,
                <br key={ `break-${index - 1}` } />,
                <Fragment key={ `line-${index}` }>{ line }</Fragment>
              ];
            }, []);
          })
          .map((lines, index) => (
            <p key={ `paragraph-${index}` }>{ lines }</p>
          ))
      }
    </Fragment>
  );
}

function DateModal({
  data,
  onClose
}) {
  if ( !data ) {
    return null;
  }

  const [ title, ...subtitles ] = data.title.split("\n");

  return (
    <Modal size="lg" onClose={onClose}>
      <Modal.Header title={ title } />
      <Modal.Body>
        <dl>
          <dt>Lehrkraft</dt>
          <dd>{ data.lecturers.join(", ") }</dd>
          <dt>Tag / Zeit / Ort</dt>
          <dd>
            <FormattedText>{ data.dates.text }</FormattedText>
          </dd>
          <dt>Teilnahmevoraussetzung</dt>
          <dd>{ data.requirements_for_participation }</dd>
          <dt>Beschreibung</dt>
          <dd>
            <FormattedText>{ data.description }</FormattedText>
          </dd>
        </dl>
      </Modal.Body>
    </Modal>
  );
}

function TimetablePage() {
  const [ selectedDate, setSelectedDate ] = useState( null );
  const [ hoveredEvent, setHoveredEvent ] = useState( null );

  const dates = data.map((date) => {
      const id = md5( date.title + date.description );

      return date.dates.items.map((item) => ({
        ...item,
        ...date,
        id,
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
          <Timetable>
            {
              dates.map((date, index) => (
                <Timetable.Event
                  key={ index }
                  weekday={ date.weekday }
                  block_period={ date.block_period }
                  title={ date.title }
                  active={ hoveredEvent === null || date.id === hoveredEvent.id }
                  onClick={() => setSelectedDate( date )}
                  onMouseOver={ () => setHoveredEvent( date ) }
                  onMouseOut={ () => setHoveredEvent( null ) }
                />
              ))
            }
          </Timetable>
        </div>
      </div>
      <DateModal
        data={ selectedDate }
        onClose={ () => setSelectedDate( null ) }
      />
    </Fragment>
  );
}

export default TimetablePage;
