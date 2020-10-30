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
import RequiredModules from "./ModuleDescription/RequiredModules";
import RequirementsForAssignmentOfCreditPoints from "./ModuleDescription/RequirementsForAssignmentOfCreditPoints";
import RequirementsForParticipation from "./ModuleDescription/RequirementsForParticipation";
import TeachingAndLearningMethods from "./ModuleDescription/TeachingAndLearningMethods";
import Workload from "./ModuleDescription/Workload";

function ModuleDescription({
  data,
  degreeProgramId
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
      />
      <RequiredModules
        items={ data.required_modules }
        degreeProgramId={ degreeProgramId }
      />
      <Applicability
        text={ data.applicability }
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

export default ModuleDescription;
