import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './pages/IndexPage';
import {ConfirmProvider} from "./providers/confirm.provider";
import {AppThemeProvider} from "./providers/theme.provider";

// Import Effector models
import './models/init';

// Import global styles
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <AppThemeProvider>
            <ConfirmProvider >
                <IndexPage/>
            </ConfirmProvider>
        </AppThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
