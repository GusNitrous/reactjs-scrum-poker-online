import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './pages/IndexPage';
import {ConfirmProvider} from "./providers/confirm.provider";
import {AppThemeProvider} from "./providers/theme.provider";
import CssBaseline from '@material-ui/core/CssBaseline';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';

// Import Effector models
import './models/init';

ReactDOM.render(
    <React.StrictMode>
        <NoSsr>
            <CssBaseline/>
            <GoogleFontLoader fonts={[{ font: 'Montserrat', weights: [200, 400, 700, 800] }]} />
            <AppThemeProvider>
                <ConfirmProvider >
                    <IndexPage/>
                </ConfirmProvider>
            </AppThemeProvider>
        </NoSsr>
    </React.StrictMode>,
    document.getElementById('root')
);
