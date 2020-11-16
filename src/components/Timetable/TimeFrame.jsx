import {
  Fragment,
  cloneElement
} from "react";

function TimeFrame({
  children,
  weekday,
  block_period
}) {
  const filtered = children.filter(( event ) => (
    event.weekday === weekday && event.block_period === block_period
  ));

  return (
    <Fragment>
      {
        filtered.map(( event, index ) => (
          cloneElement( event, { "key": index } )
        ))
      }
    </Fragment>
  );
}

export default TimeFrame;
