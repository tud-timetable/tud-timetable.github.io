import React, {
  useRef,
  useMemo,
  useEffect
} from "react";
import { DataSet } from "vis-data/peer";
import VisNetwork from "components/VisNetwork";

function toNodes(modules) {
  return new DataSet(
    modules.map((m) => ({
      "id": m.module_numbers[0],
      "label": m.module_name,
      "level": m.study_semester,
      "title": m.module_numbers[0],
    }))
  );
}

function toEdges(modules) {
  return new DataSet(
    modules.reduce((accu, m_to) => {
      const newEdges = m_to.required_modules.map((m_number_from) => ({
        "from": m_number_from,
        "to": m_to.module_numbers[0],
      }));

      return [
        ...accu,
        ...newEdges,
      ];
    }, [])
  );
}

const options = {
  "layout": {
    "hierarchical": {
      "enabled": true,
      "sortMethod": "directed",
      "edgeMinimization": false,
      "levelSeparation": 100,
      "nodeSpacing": 150,
    },
  },
  "nodes": {
    "shape": "box",
    "widthConstraint": {
      "maximum": 150,
    },
    "margin": 10,
  },
  "edges": {
    "arrows": "to",
  },
  "interaction": {
    "dragView": false,
  },
  "physics": false,
};


function ModuleDependencyGraph({
  modules
}) {
  const data = useMemo(() => {
    const nodes = toNodes( modules );
    const edges = toEdges( modules );

    return {
      nodes,
      edges
    };
  }, [ modules ]);

  return (
    <VisNetwork
      data={ data }
      options={ options }
    />
  );
}

export default ModuleDependencyGraph;
