import React, {
  useRef,
  useEffect
} from "react";
import { Network } from "vis-network/peer";

function VisNetwork({
  children = null,
  data = {},
  options = {}
}) {
  const container = useRef();
  const network = useRef(null);

  useEffect(() => {
    if ( !container.current ) {
      return;
    }

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
  }, [ data, options, container.current ]);

  return (
    <div ref={ container }>{ children }</div>
  );
}

export default VisNetwork;
