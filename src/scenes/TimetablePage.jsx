import {
  Fragment,
  useState,
  useMemo
} from "react";
import Timetable from "components/Timetable";
import DegreeProgrameSelect from "components/DegreeProgrameSelect";
import ModuleSelect from "components/ModuleSelect";
import Modal from "components/Modal";
import useDegreePrograms from "hooks/useDegreePrograms";
import md5 from "md5";

import courses1 from "../../courses/2020-10-22-ws20-gsw-courses.json";
import courses2 from "../../courses/2020-09-21-ws20-aedl-courses.json";

const courses = [
  ...courses1,
  ...courses2,
];

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

function toEvents( courses ) {
  return (
    courses.map((course) => {
      const courseId = md5( course.title + course.description );

      return course.dates.items.map((item) => ({
        ...item,
        ...course,
        courseId,
      }));
    })
    .flat()
  );
}

function TimetablePage() {
  const [ selectedEvent, setSelectedEvent ] = useState( null );
  const [ hoveredEvent, setHoveredEvent ] = useState( null );
  const [ degreeProgrameId, setDegreeProgrameId ] = useState( null );
  const [ moduleId, setModuleId ] = useState( null );
  const { status, value } = useDegreePrograms().readAll();

  const modules = useMemo(() => (
    (value[ degreeProgrameId ] && value[ degreeProgrameId ].modules) || []
  ), [ degreeProgrameId ]);

  const events = toEvents( courses );

  const isReady = (
    status === "resolved"
  );

  function onChangeDegreePrograme( nextDegreeProgrameId ) {
    setDegreeProgrameId( nextDegreeProgrameId );
    setModuleId( null );
  }

  function isActive( event ) {
    return (
      hoveredEvent === null
        || event.courseId === hoveredEvent.courseId
    );
  }

  const filteredEvents = events.filter((event) => {
    if ( !moduleId || moduleId === "all" ) {
      return true;
    }

    return event.applicability.some((appl) => (
      appl.module_number === moduleId
    ));
  });

  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <h1>Stundenplan</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <DegreeProgrameSelect
            disabled={ !isReady }
            onChange={ onChangeDegreePrograme }
            currentItemId={ degreeProgrameId }
            items={ value }
          />
          <ModuleSelect
            disabled={ !isReady || !degreeProgrameId }
            onChange={ setModuleId }
            currentItemId={ moduleId }
            items={ modules }
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Timetable>
            {
              filteredEvents.map((event, index) => (
                <Timetable.Event
                  key={ index }
                  weekday={ event.weekday }
                  block_period={ event.block_period }
                  title={ event.title }
                  active={ isActive( event )  }
                  onClick={() => setSelectedEvent( event )}
                  onMouseOver={() => setHoveredEvent( event )}
                  onMouseOut={() => setHoveredEvent( null )}
                />
              ))
            }
          </Timetable>
        </div>
      </div>
      <DateModal
        data={ selectedEvent }
        onClose={() => setSelectedEvent( null )}
      />
    </Fragment>
  );
}

export default TimetablePage;
