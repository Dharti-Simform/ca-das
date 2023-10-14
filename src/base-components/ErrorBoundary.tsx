import React, { ErrorInfo, ReactNode } from "react";

import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

interface ErrorState {
  hasError?: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends React.Component<Props, ErrorState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: {
        name: "",
        message: "",
        stack: "",
      },
      errorInfo: {
        componentStack: "",
      },
    };
  }

  public static getDerivedStateFromError(): ErrorState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  public render(): React.ReactNode {
    const { children } = this.props;
    const { hasError, error, errorInfo } = this.state;
    if (hasError) {
      return (
        <>
          <Link
            to={window.location.pathname}
            onClick={() => {
              window.location.reload();
            }}
          >
            {" "}
            Reload this page
          </Link>

          <h1>
            Sorry.. there was an error {error?.message.toString()}{" "}
            {errorInfo?.componentStack.toString()}
          </h1>
        </>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
