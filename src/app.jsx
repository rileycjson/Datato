import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    return (
        <>
            <h1>💖 Hello World!</h1>
            <p>Welcome to your Electron + Vite + React application.</p>
        </>
    );
}

const root = createRoot(document.body);
root.render(<App />);
