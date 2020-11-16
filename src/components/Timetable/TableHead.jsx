import styled from "styled-components";

const TableHeader = styled.th`
  padding: .5rem;
  width: ${({ $size }) => $size }%;
`;

function TableHead() {
  return (
    <thead>
      <tr>
        <TableHeader
          className="text-right"
          scope="col"
          $size={10}>Zeit</TableHeader>
        <TableHeader
          className="text-center"
          scope="col"
          $size={18}>Montag</TableHeader>
        <TableHeader
          className="text-center"
          scope="col"
          $size={18}>Dienstag</TableHeader>
        <TableHeader
          className="text-center"
          scope="col"
          $size={18}>Mittwoch</TableHeader>
        <TableHeader
          className="text-center"
          scope="col"
          $size={18}>Donnerstag</TableHeader>
        <TableHeader
          className="text-center"
          scope="col"
          $size={18}>Freitag</TableHeader>
      </tr>
    </thead>
  );
}

export default TableHead;
