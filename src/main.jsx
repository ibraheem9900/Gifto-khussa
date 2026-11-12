import { StrictMode, Component } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

class ErrorBoundary extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error) { console.error('Gifto Khussa render error', error); }
  render() {
    if (this.state.error) return <div style={{ padding: 32, fontFamily: 'sans-serif', color: '#7d1f2a' }}><h1>Render error</h1><pre style={{ whiteSpace: 'pre-wrap' }}>{this.state.error.stack || this.state.error.message}</pre></div>;
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(<StrictMode><ErrorBoundary><App /></ErrorBoundary></StrictMode>);
