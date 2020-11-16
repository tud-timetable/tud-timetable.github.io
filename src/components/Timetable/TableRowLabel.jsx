import {
  Fragment
} from "react";

const BLOCK_PERIOD_TIMES = [
  {
    "start": "7:30",
    "end": "9:00",
  },
  {
    "start": "9:20",
    "end": "10:50",
  },
  {
    "start": "11:10",
    "end": "12:40",
  },
  {
    "start": "13:00",
    "end": "14:30",
  },
  {
    "start": "14:50",
    "end": "16:20",
  },
  {
    "start": "16:40",
    "end": "17:10",
  },
];

function TableRowLabel({
  number
}) {
  const {
    "start": timeStart,
    "end": timeEnd,
  } = BLOCK_PERIOD_TIMES[ number - 1 ];

  return (
    <Fragment>
      { `${ number }. ` }<abbr title="Doppelstunde">DS</abbr>
      <br />
      <span className="font-weight-normal">
        <span title="Startzeit"><time>{ timeStart }</time>&nbsp;Uhr</span>
        <br />
        <span title="Endzeit"><time>{ timeEnd }</time>&nbsp;Uhr</span>
      </span>
    </Fragment>
  )
}

export default TableRowLabel;
