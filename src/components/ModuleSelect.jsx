import {
  useCallback
} from "react";

function ModuleSelect({
  onChange,
  currentItemId,
  disabled,
  items
}) {
  const handleChange = useCallback((event) => {
    onChange( event.target.value );
  }, [ onChange ]);

  return (
    <div className="form-group">
      <select
        className="form-control"
        disabled={ disabled }
        onChange={ handleChange }
        value={ currentItemId }
      >
        <option disabled value="">Modul auswählen</option>
        {
          items.map((m) => (
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
