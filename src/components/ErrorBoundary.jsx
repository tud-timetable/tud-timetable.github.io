import {
  Component,
  cloneElement
} from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "error": null,
      "errorInfo": null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      "error": error,
      "errorInfo": errorInfo,
    });

    const { onError } = this.props;

    if ( onError && typeof onError === "function" ) {
      onError({
        "error": error,
        "errorInfo": errorInfo,
      });
    }
  }

  reset() {
    this.setState({
      "error": null,
      "errorInfo": null,
    });
  }

  render() {
    const { children, fallback } = this.props;

    if ( this.state.error ) {
      if ( fallback ) {
        return fallback;
      }

      return null;
    }

    return children;
  }
}

export default ErrorBoundary;
