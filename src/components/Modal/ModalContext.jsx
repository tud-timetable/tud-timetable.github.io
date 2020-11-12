import {
  createContext,
  useContext
} from "react";

function noop() {}

const ModalContext = createContext({
  "onClose": noop,
});

export function useModalContext() {
  return useContext( ModalContext );
}

export default ModalContext;
