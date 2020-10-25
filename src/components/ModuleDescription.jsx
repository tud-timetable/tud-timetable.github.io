import React from "react";
import {
  Link
} from "react-router-dom";
import InvolvedProfessorships from "./ModuleDescription/InvolvedProfessorships";
import TeachingAndLearningMethods from "./ModuleDescription/TeachingAndLearningMethods";
import RequiredModules from "./ModuleDescription/RequiredModules";
import ModuleNumbers from "./ModuleDescription/ModuleNumbers";
import ModuleName from "./ModuleDescription/ModuleName";
import ModuleCoordinator from "./ModuleDescription/ModuleCoordinator";
import CreditPointsAndGrades from "./ModuleDescription/CreditPointsAndGrades";
import Duration from "./ModuleDescription/Duration";
import Workload from "./ModuleDescription/Workload";
import Frequency from "./ModuleDescription/Frequency";
import Applicability from "./ModuleDescription/Applicability";
import RequirementsForParticipation from "./ModuleDescription/RequirementsForParticipation";
import RequirementsForAssignmentOfCreditPoints from "./ModuleDescription/RequirementsForAssignmentOfCreditPoints";
import ContentsAndQualificationTargets from "./ModuleDescription/ContentsAndQualificationTargets";

function ModuleDescription({
  data
}) {
  if ( data == null ) {
    return null;
  }

  return (
    <dl className="row">
      <ModuleNumbers
        items={ data.module_numbers }
      />
      <ModuleName
        text={ data.module_name }
      />
      <ModuleCoordinator
        text={ data.module_coordinator }
      />
      <InvolvedProfessorships
        items={ data.involved_professorships }
      />
      <ContentsAndQualificationTargets
        text={ data.contents_and_qualification_targets }
      />
      <TeachingAndLearningMethods
        items={ data.teaching_and_learning_methods }
      />
      <RequirementsForParticipation
        text={ data.requirements_for_participation }
      />
      <RequiredModules
        items={ data.required_modules }
      />
      <Applicability
        text={ data.applicability }
      />
      <RequirementsForAssignmentOfCreditPoints
        text={ data.requirements_for_assignment_of_credit_points}
      />
      <CreditPointsAndGrades
        text={ data.credit_points_and_grades }
      />
      <Frequency
        text={ data.Frequency }
      />
      <Workload
        text={ data.workload }
      />
      <Duration
        text={ data.duration }
      />
    </dl>
  );
}

export default ModuleDescription;
