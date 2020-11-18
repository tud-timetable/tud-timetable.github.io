import styled from "styled-components";

const EventStyle = styled.button`
  border-radius: 4px;
  border: 1px solid rgb(0, 104, 180);

  width: 100%;
  text-align: left;

  padding: .5rem;
  margin-bottom: .25rem;
  margin-top: .25rem;
  background: rgb(0, 104, 180); /* HKS 44 */
  line-height: normal;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 .2rem rgba(0, 104, 180, .5);
  }

  opacity: ${({ $inactive }) => (
    $inactive
      ? "0.25"
      : "1"
  )};

  &.type-lecture {
    background: rgb(0, 129, 67); /* HKS 57 */
    border: 1px solid rgb(0, 129, 67);
  }

  &.type-lecture:focus {
    box-shadow: 0 0 0 .2rem rgba(0, 129, 67, .5);
  }

  &.type-tutorial {
    background: rgb(100, 179, 44); /* HKS 65 */
    border: 1px solid rgb(100, 179, 44);

  }

  &.type-tutorial:focus {
    box-shadow: 0 0 0 .2rem rgba(100, 179, 44, .5);
  }

  &.type-seminar {
    background: rgb(149, 25, 129); /* HKS 33 */
    border: 1px solid rgb(149, 25, 129);
  }

  &.type-seminar:focus {
    box-shadow: 0 0 0 .2rem rgba(149, 25, 129, .5);
  }

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

function noop() {}

function Event({
  title,
  type = null,
  active = true,
  onClick = noop,
  onMouseOver = noop,
  onMouseOut = noop
}) {
  const [ primaryTitle, ...subtitles ] = title.split("\n");
  const classNames = [
    "btn",
  ];

  if ( type === "lecture" ) {
    classNames.push(
      "type-lecture"
    );
  }

  if ( type === "tutorial" ) {
    classNames.push(
      "type-tutorial"
    );
  }

  if ( type && type.indexOf( "seminar" ) !== -1 ) {
    classNames.push(
      "type-seminar"
    );
  }

  return (
    <EventStyle
      onClick={ onClick }
      onMouseOver={ onMouseOver }
      onMouseOut={ onMouseOut }
      className={ classNames.join( " " ) }
      $inactive={ !active }
    >
      <p className="mb-0">{ primaryTitle }</p>
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
