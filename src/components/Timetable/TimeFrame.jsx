import Event from "./Event";

function TimeFrame({
  dates,
  weekday,
  block_period,
  onClick
}) {
  const filtered = dates.filter(( date ) => (
    date.weekday === weekday && date.block_period === block_period
  ));

  return (
    <Fragment>
      {
        filtered.map(( date, index ) => (
          <Event
            key={ index }
            value={ date.title }
            onClick={ () => onClick( date ) }
          />
        ))
      }
    </Fragment>
  );
}

export default TimeFrame;
