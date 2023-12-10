import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children?: ReactNode;
    fallback?: ReactNode;
}

class ErrorBoundary extends Component<Props> {
    state = {
        hasError: false,
    };

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Error caught in ErrorBoundary:", error, errorInfo);
    }

    render(): ReactNode {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
