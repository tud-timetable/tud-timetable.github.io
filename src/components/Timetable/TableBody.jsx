import TableRow from "./TableRow";

const BLOCK_PERIODS = [
  1, 2, 3, 4, 5, 6
];

function TableBody({
  dates,
  onClickDate
}) {
  return (
    <tbody>
      {
        BLOCK_PERIODS.map(( block_period ) => (
          <TableRow
            key={ `block-${ block_period }` }
            dates={ dates }
            block_period={ block_period }
            onClickDate={ onClickDate }
          />
        ))
      }
    </tbody>
  );
}

export default TableBody;
