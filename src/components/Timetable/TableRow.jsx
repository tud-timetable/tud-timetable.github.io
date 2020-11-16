import TableRowLabel from "./TableRowLabel";
import TimeFrame from "./TimeFrame";

const WEEKDAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
];

function TableRow({
  dates,
  block_period,
  onClickDate
}) {
  return (
    <tr>
      <th scope="row" className="p-2 text-right align-top">
        <TableRowLabel
          number={ block_period }
        />
      </th>
      {
        WEEKDAYS.map(( weekday ) => (
          <td
            className="p-1 align-top"
            key={`block-${ block_period }-${ weekday }`}
          >
            <TimeFrame
              dates={ dates }
              weekday={ weekday }
              block_period={ block_period }
              onClick={ onClickDate }
            />
          </td>
        ))
      }
    </tr>
  );
}

export default TableRow;
