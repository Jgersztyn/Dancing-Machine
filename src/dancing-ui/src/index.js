import React from 'react';
import ReactDOM from 'react-dom/client';

const el =  document.getElementById('root');

const root = ReactDOM.createRoot(el);

// Generate and display a basic component
function App() {
    return <h1>Dancing Machine</h1>
}

root.render(<App />);