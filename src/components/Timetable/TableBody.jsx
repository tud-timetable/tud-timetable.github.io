import TableRow from "./TableRow";

const BLOCK_PERIODS = [
  1, 2, 3, 4, 5, 6
];

function TableBody({
  children
}) {
  return (
    <tbody>
      {
        BLOCK_PERIODS.map(( block_period ) => (
          <TableRow
            key={ `block-${ block_period }` }
            children={ children }
            block_period={ block_period }
          />
        ))
      }
    </tbody>
  );
}

export default TableBody;
