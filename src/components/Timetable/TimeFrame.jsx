import {
  Fragment,
  cloneElement
} from "react";

function TimeFrame({
  children,
  weekday,
  block_period
}) {
  const filtered = children.filter(({ props }) => (
    props.weekday === weekday && props.block_period === block_period
  ));

  return (
    <Fragment>
      { filtered }
    </Fragment>
  );
}

export default TimeFrame;
