import React from "react";
import {
  Link
} from "react-router-dom";
import useProfessorships from "hooks/useProfessorships";

function ModuleDescription({
  data
}) {
  const { status, value } = useProfessorships().read();

  if ( data == null || status !== "resolved" ) {
    return null;
  }

  function findProfessorship( name ) {
    return value.find(( prof ) => (
      prof.name === name
    ));
  }

  return (
    <dl className="row">
      <dt className="col-12">Modulnummer</dt>
      <dd className="col-12">
        <ul className="pl-0 mb-0" style={{ "listStyle": "none" }}>
        {
          data["Modulnummer"].map((number, i) => {
            if ( i === 0 ) {
              return (
                <li>{number}</li>
              );
            }

            return (
              <li>{number}</li>
            );
          })
        }
        </ul>
      </dd>
      <dt className="col-12">Modulname</dt>
      <dd className="col-12">{data["Modulname"]}</dd>
      <dt className="col-12">Modulverantwortlicher</dt>
      <dd className="col-12">{data["Modulverantwortlicher"]}</dd>
      <dt className="col-12">Beteiligte Professuren</dt>
      <dd className="col-12">
        <ul className="mb-0">
        {
          data["Beteiligte Professuren"].map((item) => {
            const profs = findProfessorship( item );

            if ( profs ) {
              return (
                <li><a href={profs.url} target="_blank">{item}</a></li>
              );
            }

            return (
              <li>{item}</li>
            );
          })
        }
        </ul>
      </dd>
      <dt className="col-12">Inhalte und Qualifikationsziele</dt>
      <dd className="col-12">{data["Inhalte und Qualifikationsziele"]}</dd>
      <dt className="col-12">Lehr- und Lernformen</dt>
      <dd className="col-12">
        <ul className="mb-0">
        {
          data["Lehr- und Lernformen"].map((item) => {
            if ( item.extent ) {
              return (
                <li>
                  <span>{item.name}</span> (<span>{item.extent}</span>)
                </li>
              );
            }

            return (
              <li>
                <span>{item.name}</span>
              </li>
            );
          })
        }
        </ul>
      </dd>
      <dt className="col-12">Voraussetzungen für die Teilnahme</dt>
      <dd className="col-12">{data["Voraussetzungen für die Teilnahme"] || "–"}</dd>
      <dt className="col-12">Vorausgesetze Module</dt>
      <dd className="col-12">
      {
        (() => {
          if ( !data.required_modules.length ) {
            return "–";
          }

          return (
            <ul className="mb-0">
            {
              data.required_modules.map((mod) => (
                <li>{mod}</li>
              ))
            }
            </ul>
          );
        })()
      }
      </dd>
      <dt className="col-12">Verwendbarkeit</dt>
      <dd className="col-12">{data["Verwendbarkeit"]}</dd>
      <dt className="col-12">Voraussetzungen für die Vergabe von Leistungspunkten</dt>
      <dd className="col-12">{data["Voraussetzungen für die Vergabe von Leistungspunkten"]}</dd>
      <dt className="col-12">Leistungspunkte und Noten</dt>
      <dd className="col-12">{data["Leistungspunkte und Noten"]}</dd>
      <dt className="col-12">Häufigkeit des Moduls</dt>
      <dd className="col-12">{data["Häufigkeit des Moduls"]}</dd>
      <dt className="col-12">Arbeitsaufwand</dt>
      <dd className="col-12">{data["Arbeitsaufwand"]}</dd>
      <dt className="col-12">Dauer des Moduls</dt>
      <dd className="col-12">{data["Dauer des Moduls"]}</dd>
    </dl>
  );
}

export default ModuleDescription;
