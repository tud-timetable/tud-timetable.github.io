import TableRowLabel from "./TableRowLabel";
import TimeSlot from "./TimeSlot";

const WEEKDAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
];

function TableRow({
  children,
  block_period
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
          <TimeSlot
            key={`time-slot-${ block_period }-${ weekday }`}
            weekday={ weekday }
            block_period={ block_period }
            children={ children }
          />
        ))
      }
    </tr>
  );
}

export default TableRow;
