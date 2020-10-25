import React from "react";
import {
  Link
} from "react-router-dom";

function ModuleDescription({
  data
}) {
  if ( data == null ) {
    return null;
  }

  return (
    <dl className="row">
      <dt className="col-12">Modulnummer</dt>
      <dd className="col-12">
      {
        data["Modulnummer"].map((number, i) => {
          if ( i === 0 ) {
            return (
              <p>{number}</p>
            );
          }

          return (
            <p>{number}</p>
          );
        })
      }
      </dd>
      <dt className="col-12">Modulname</dt>
      <dd className="col-12">{data["Modulname"]}</dd>
      <dt className="col-12">Modulverantwortlicher</dt>
      <dd className="col-12">{data["Modulverantwortlicher"]}</dd>
      <dt className="col-12">Beteiligte Professuren</dt>
      <dd className="col-12">
      {
        data["Beteiligte Professuren"].map((item) => (
          <p>{item}</p>
        ))
      }
      </dd>
      <dt className="col-12">Inhalte und Qualifikationsziele</dt>
      <dd className="col-12">{data["Inhalte und Qualifikationsziele"]}</dd>
      <dt className="col-12">Lehr- und Lernformen</dt>
      <dd className="col-12">
        <ul>
        {
          data["Lehr- und Lernformen"].map((item) => {
            if ( item.extent ) {
              return (
                <li>
                  <span>{item.name}</span> <span>{item.extent}</span>
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
