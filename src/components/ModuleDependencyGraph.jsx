import React, {
  useRef,
  useMemo,
  useEffect
} from "react";
import { DataSet } from "vis-data/peer";
import { Network } from "vis-network/peer";

function toNodes(modules) {
  return new DataSet(
    modules.map((m) => ({
      "id": m.module_numbers[0],
      "label": m.module_name,
      "shape": "box",
      "level": m.study_semester,
    }))
  );
}

function toEdges(modules) {
  return new DataSet(
    modules.reduce((accu, m_to) => {
      const newEdges = m_to.required_modules.map((m_number_from) => ({
        "from": m_number_from,
        "to": m_to.module_numbers[0],
        "arrows": "to",
      }));

      return [
        ...accu,
        ...newEdges,
      ];
    }, [])
  );
}

function ModuleDependencyGraph({
  modules
}) {
  const container = useRef();
  const network = useRef(null);

  useEffect(() => {
    if ( !container.current ) {
      return;
    }

    const nodes = toNodes( modules );
    const edges = toEdges( modules );

    const data = {
      nodes,
      edges
    };

    const options = {
      "layout": {
        "hierarchical": {
          "enabled": true,
          "sortMethod": "directed",
        },
      },
    };

    network.current = new Network(
      container.current,
      data,
      options
    );

    return () => {
      if ( !network.current ) {
        return;
      }

      network.current.destroy();
      network.current = null;
    };
  }, [ modules, container.current ]);

  return (
    <div ref={ container }></div>
  );
}

export default ModuleDependencyGraph;
