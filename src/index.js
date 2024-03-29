import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LangProvider } from './lang-context';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LangProvider>
        <App />
    </LangProvider>
);