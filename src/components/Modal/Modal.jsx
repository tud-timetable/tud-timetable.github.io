import {
  Fragment
} from "react";

import ModalBackdrop from "./ModalBackdrop";

function Modal({
  hidden = false,
  size = null,
  children
}) {
  const classNames = [
    "modal",
  ];

  if ( !hidden ) {
    classNames.push( "show" );
  }

  switch ( size ) {
    case "sm":
      classNames.push( "modal-sm" );
      break;

    case "lg":
      classNames.push( "modal-lg" );
      break;

    case "xl":
      classNames.push( "modal-xl" );
      break;
  }

  return (
    <Fragment>
      <div
        className={ classNames.join( " " ) }
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={ hidden ? "false" : "true" }
      >
        <div className="modal-dialog">
          <div className="modal-content">
            { children }
          </div>
        </div>
      </div>
      <ModalBackdrop hidden={ hidden } />
    </Fragment>
  );
}

export default Modal;
