import React from 'react';
import { createRoot } from 'react-dom/client';

import LandingPage from  './pages/LandingPage';

function App() {
    return (
        <>
            <LandingPage />
        </>
    );
}

const root = createRoot(document.body);
root.render(<App />);
