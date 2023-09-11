import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

ReactDOM.render(
    <React.StrictMode>
        <NextThemesProvider attribute="class" defaultTheme="dark">
            <NextUIProvider>
                <App />
            </NextUIProvider>
        </NextThemesProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
