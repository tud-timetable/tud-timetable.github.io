function TimeSlot({
  weekday,
  block_period
}) {
  const filtered = children.filter(({ props }) => (
    props.weekday === weekday && props.block_period === block_period
  ));

  return (
    <td
      className="p-1 align-top"
    >
      { filtered }
    </td>
  );
}

export default TimeSlot;
