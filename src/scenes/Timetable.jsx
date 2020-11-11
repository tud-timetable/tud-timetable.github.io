import {
  Fragment
} from "react";
import styled from "styled-components";

const TimetableDateStyle = styled.div`
  border-radius: 4px;
  border: 1px solid rgb(0, 125, 64);

  padding: .5rem;
  margin-bottom: .25rem;
  margin-top: .25rem;
  background: rgb(106,176,35);

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimetableHeader = styled.th`
  padding: .5rem;
  width: ${(props) => props.size}%;
`;

function BlockPeriodLabel({ number }) {
  return (
    <Fragment>
      { number }. <abbr title="Doppelstunde">DS</abbr>
    </Fragment>
  )
}

function TimetableDate({ value }) {
  const [ title, ...subtitles ] = value.split("\n");

  return (
    <TimetableDateStyle>
      <p>{ title }</p>
      {
        subtitles.length
          && (
            subtitles.reduce((accu, val, index) => {
              if ( index === 0 ) {
                return [ val ];
              }

              return [
                ...accu,
                <br />,
                val,
              ];
            }, [])
          )
      }
    </TimetableDateStyle>
  );
}

function TimeFrame({
  dates,
  weekday,
  block_period
}) {
  const filtered = dates.filter((date) => {
    date.weekday === weekday && date.block_period === block_period
  });

  return (
    <Fragment>
      {
        filtered.map((date) => (
          <TimetableDate value={ date } />
        ))
      }
    </Fragment>
  );
}

const BLOCK_PERIODS = [
  1, 2, 3, 4, 5, 6
];

const WEEKDAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
];

function Timetable({ dates }) {
  return (
    <table className="w-100 table-bordered">
      <thead>
        <tr>
          <TimetableHeader size={10} className="text-right" scope="col">
          Zeit
          </TimetableHeader>
          <TimetableHeader size={18} className="text-center" scope="col">
          Montag
          </TimetableHeader>
          <TimetableHeader size={18} className="text-center" scope="col">
          Dienstag
          </TimetableHeader>
          <TimetableHeader size={18} className="text-center" scope="col">
          Mittwoch
          </TimetableHeader>
          <TimetableHeader size={18} className="text-center" scope="col">
          Donnerstag
          </TimetableHeader>
          <TimetableHeader size={18} className="text-center" scope="col">
          Freitag
          </TimetableHeader>
        </tr>
      </thead>
      <tbody>
        {
          BLOCK_PERIODS.map((block_period) => (
            <tr
              key={`block-${block_period}`}
            >
              <th scope="row" className="p-2 text-right align-top">
                <BlockPeriodLabel number={ block_period } />
              </th>
              {
                WEEKDAYS.map((weekday) => (
                  <td
                    className="p-1 align-top"
                    key={`block-${block_period}-${weekday}`}
                  >
                    <TimeFrame
                      dates={ dates }
                      weekday={ weekday }
                      block_period={ block_period }
                    />
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Timetable;
