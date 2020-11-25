import {
  useRef,
  useEffect,
  forwardRef
} from "react";
const { Network } = import(
  /* webpackChunkName: "vis-network" */
  "vis-network/peer"
);

const VisNetwork = forwardRef(function VisNetwork({
  children = null,
  data = {},
  options = {}
}, ref) {
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

    ref.current = network.current;

    return () => {
      if ( !network.current ) {
        return;
      }

      network.current.destroy();
      network.current = null;
      ref.current = null;
    };
  }, [ container.current ]);

  return (
    <div ref={ container }>{ children }</div>
  );
});

export default VisNetwork;
