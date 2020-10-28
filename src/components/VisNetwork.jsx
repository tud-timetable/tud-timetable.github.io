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
    if ( !network.current ) {
      return;
    }

    network.current.setOptions(
      options
    );
  }, [ network.current, options ]);

  useEffect(() => {
    if ( !network.current ) {
      return;
    }

    network.current.setData(
      data
    );
  }, [ network.current, data ]);

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
  }, [ container.current ]);

  return (
    <div ref={ container }>{ children }</div>
  );
}

export default VisNetwork;
