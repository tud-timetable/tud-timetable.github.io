import { memo } from "react";
import Applicability from "./ModuleDescription/Applicability";
import ContentsAndQualificationTargets from "./ModuleDescription/ContentsAndQualificationTargets";
import Contents from "./ModuleDescription/Contents";
import QualificationTargets from "./ModuleDescription/QualificationTargets";
import CreditPointsAndGrades from "./ModuleDescription/CreditPointsAndGrades";
import Duration from "./ModuleDescription/Duration";
import Frequency from "./ModuleDescription/Frequency";
import InvolvedProfessorships from "./ModuleDescription/InvolvedProfessorships";
import ModuleCoordinator from "./ModuleDescription/ModuleCoordinator";
import ModuleName from "./ModuleDescription/ModuleName";
import ModuleNumbers from "./ModuleDescription/ModuleNumbers";
import RequirementsForAssignmentOfCreditPoints from "./ModuleDescription/RequirementsForAssignmentOfCreditPoints";
import RequirementsForParticipation from "./ModuleDescription/RequirementsForParticipation";
import TeachingAndLearningMethods from "./ModuleDescription/TeachingAndLearningMethods";
import Workload from "./ModuleDescription/Workload";

import useModules from "hooks/useModules";

function getModulesByDegreeProgramId(modules, degreeProgramId) {
  return (
    Object.entries(modules).reduce((accu, [key, value]) => {
      if ( value.degree_program_id === degreeProgramId ) {
        accu[key] = value;
      }

      return accu;
    }, {})
  );
}

function ModuleDescription({
  data,
  degreeProgramId
}) {
  if ( data == null ) {
    return null;
  }

  const modules = getModulesByDegreeProgramId(
    useModules().readAll(),
    degreeProgramId
  );

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
      <QualificationTargets
        text={ data.qualification_targets }
      />
      <Contents
        text={ data.contents }
      />
      <TeachingAndLearningMethods
        items={ data.teaching_and_learning_methods }
      />
      <RequirementsForParticipation
        text={ data.requirements_for_participation }
        modules={ modules }
      />
      <Applicability
        text={ data.applicability }
        modules={ modules }
      />
      <RequirementsForAssignmentOfCreditPoints
        text={ data.requirements_for_assignment_of_credit_points }
      />
      <CreditPointsAndGrades
        text={ data.credit_points_and_grades }
      />
      <Frequency
        text={ data.frequency }
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

function compare(prevProps, nextProps) {
  const prevDegreeProgramId = prevProps.degreeProgramId;
  const nextDegreeProgramId = nextProps.degreeProgramId;

  const prevModuleNumbers = prevProps.data.module_numbers.join(",");
  const nextModuleNumbers = nextProps.data.module_numbers.join(",");

  return (
    prevDegreeProgramId === nextDegreeProgramId
      && prevModuleNumbers === nextModuleNumbers
  );
}

export { ModuleDescription };
export default memo(ModuleDescription, compare);
