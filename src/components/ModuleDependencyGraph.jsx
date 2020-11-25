import {
  useRef,
  useMemo,
  useEffect
} from "react";
import {
  useHistory
} from "react-router-dom";
import { DataSet } from "vis-data/peer"
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
  let edges = modules.reduce((accu, m_to) => {
    const newEdges = m_to.required_modules.map((m_number_from) => ({
      "from": m_number_from,
      "to": m_to.module_numbers[0],
    }));

    return [
      ...accu,
      ...newEdges,
    ];
  }, []);

  edges = withoutRedundantEdges( edges );

  return new DataSet( edges );
}

// @todo add support for relations with a distance
// greater than 2
function withoutRedundantEdges(edges) {
  return edges.reduce((accu, edge, index) => {
    const {
      "to": start,
      "from": end
    } = edge;

    const es1 = edges.filter((e) => e.from === end );
    const es2 = edges.filter((e) => e.to === start );

    if ( !es1.length || !es2.length ) {
      return [ ...accu, edge ];
    }

    const hasCommonNode = es1.some((e1) => (
      es2.findIndex((e2) => e1.to === e2.from ) !== -1
    ));

    if ( hasCommonNode ) {
      return accu;
    }

    return [ ...accu, edge ];
  }, []);
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
  modules,
  degreeProgramId
}) {
  const network = useRef();
  const history = useHistory();

  useEffect(() => {
    if ( !network.current ) {
      return;
    }

    network.current.on("doubleClick", (evt) => {
      const node = evt.nodes[0];

      if ( node ) {
        history.push( `/${ degreeProgramId }/${ node }` );
      }
    });
  }, [ network.current ]);

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
      ref={ network }
    />
  );
}

export default ModuleDependencyGraph;
