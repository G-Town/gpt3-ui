import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render is no longer supported in React 18. Use createRoot instead.
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<App />);
