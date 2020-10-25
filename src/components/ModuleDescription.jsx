import React from "react";
import {
  Link
} from "react-router-dom";
import InvolvedProfessorships from "./ModuleDescription/InvolvedProfessorships";
import TeachingAndLearningMethods from "./ModuleDescription/TeachingAndLearningMethods";
import RequiredModules from "./ModuleDescription/RequiredModules";
import ModuleNumbers from "./ModuleDescription/ModuleNumbers";
import ModuleCoordinator from "./ModuleDescription/ModuleCoordinator";

function ModuleDescription({
  data
}) {
  if ( data == null ) {
    return null;
  }

  return (
    <dl className="row">
      <ModuleNumbers
        items={ data["Modulnummer"] }
      />
      <dt className="col-12">Modulname</dt>
      <dd className="col-12">{data["Modulname"]}</dd>
      <ModuleCoordinator
        data={ data["Modulverantwortlicher"] }
      />
      <InvolvedProfessorships
        items={ data["Beteiligte Professuren"] }
      />
      <dt className="col-12">Inhalte und Qualifikationsziele</dt>
      <dd className="col-12">{data["Inhalte und Qualifikationsziele"]}</dd>
      <TeachingAndLearningMethods
        items={ data["Lehr- und Lernformen"] }
      />
      <dt className="col-12">Voraussetzungen für die Teilnahme</dt>
      <dd className="col-12">{data["Voraussetzungen für die Teilnahme"] || "–"}</dd>
      <RequiredModules
        items={ data.required_modules }
      />
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
