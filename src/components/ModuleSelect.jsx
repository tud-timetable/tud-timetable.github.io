import {
  useCallback
} from "react";

function noop() {}

function ModuleSelect({
  onChange = noop,
  currentItemId,
  disabled = false,
  items = []
}) {
  const handleChange = useCallback((event) => {
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
        disabled={ disabled }
        onChange={ handleChange }
        value={ currentItemId || "" }
      >
        <option disabled value="">Modul auswählen</option>
        <option value="all">(Alle)</option>
        {
          (items || []).map((m) => (
            <option
              value={m.module_numbers[0]}
              key={m.module_numbers[0]}
            >
              {m.module_name}
            </option>
          ))
        }
      </select>
    </div>
  );
}

export default ModuleSelect;
