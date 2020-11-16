import styled from "styled-components";

const EventStyle = styled.button`
  border-radius: 4px;
  border: 1px solid rgb(106, 176, 35);

  width: 100%;
  text-align: left;

  padding: .5rem;
  margin-bottom: .25rem;
  margin-top: .25rem;
  background: rgb(106, 176, 35);
  line-height: normal;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 .2rem rgba(106, 176, 35, .5);
  }

  opacity: ${({ $inactive }) => (
    $inactive
      ? "0.25"
      : "1"
  )};

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

function noop() {}

function Event({
  value,
  active = true,
  onClick = noop,
  onMouseOver = noop,
  onMouseOut = noop
}) {
  const [ title, ...subtitles ] = value.split("\n");

  return (
    <EventStyle
      onClick={ onClick }
      onMouseOver={ onMouseOver }
      onMouseOut={ onMouseOut }
      className="btn"
      $inactive={ !active }
    >
      <p className="mb-0">{ title }</p>
      <div className="sr-only">
      {
        !!subtitles.length
          && (
            subtitles.reduce((accu, val, index) => {
              if ( index === 0 ) {
                return [ val ];
              }

              return [
                ...accu,
                <br />,
                val,
              ];
            }, [])
          )
      }
      </div>
    </EventStyle>
  );
}

export default Event;
