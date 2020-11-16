import {
  useCallback
} from "react";

function noop() {}

function sortDegreeProgrames( degreeProgrames ) {
  return (a, b) => {
    const nameA = degreeProgrames[ a ].name;
    const nameB = degreeProgrames[ b ].name;

    return nameA.localeCompare( nameB );
  };
}

function DegreeProgrameSelect({
  onChange = noop,
  currentItemId,
  disabled = false,
  items = {}
}) {
  const handleChange = useCallback(( event ) => {
    const value = event.target.value;

    if ( !value ) {
      onChange( null );
    } else {
      onChange( event.target.value );
    }
  }, [ onChange ]);

  return (
    <div className="form-group">
      <select
        className="form-control"
        onChange={ handleChange }
        disabled={ disabled }
        value={ currentItemId || "" }
      >
        <option disabled value="">Studiengang auswählen</option>
        {
          Object
            .keys( items || {} )
            .sort( sortDegreeProgrames( items ) )
            .map((id) => {
              const program = items[ id ];

              return (
                <option
                  value={ program.id }
                  key={ program.id }
                >{ program.name }</option>
              );
            })
        }
      </select>
    </div>
  );
}

export default DegreeProgrameSelect;
