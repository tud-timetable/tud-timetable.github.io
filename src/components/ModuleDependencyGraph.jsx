import React, {
  useRef,
  useMemo
} from "react";
import { DataSet } from "vis-data/peer";
import { Network } from "vis-network/peer";

function toNodes(modules) {
  return new DataSet(
    modules.map((m) => ({
      "id": m.module_numbers[0],
      "label": m.module_name,
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

function ModuleDependencyGraph({
  modules
}) {
  const container = useRef();

  console.log({ container: container });

  const network = useMemo(() => {
    const nodes = toNodes( modules );
    const edges = toEdges( modules );

    const data = {
      nodes,
      edges
    };

    console.log( "memo" );

    if ( !container.current ) {
      return null;
    }

    return new Network(
      container.current,
      data,
      {}
    );
  }, [ modules, container.current ]);

  return (
    <canvas ref={ container }>Graph wird geladen</canvas>
  );
}

export default ModuleDependencyGraph;
