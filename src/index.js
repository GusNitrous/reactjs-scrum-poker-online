import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './pages/IndexPage';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {JssProvider} from "react-jss";
import {ConfirmProvider} from "material-ui-confirm";

// Import global styles and theme
import {generateClassName, createTheme, getTheme, baseTheme} from './styles/theme.js';
import './styles/main.css';

// Import Effector models
import './models/init';

ReactDOM.render(
    <React.StrictMode>
        <JssProvider generateClassName={generateClassName}>
            <MuiThemeProvider
                theme={createTheme({
                    typography: {
                        useNextVariants: true
                    },
                    overrides: getTheme(baseTheme)
                })}>
                <ConfirmProvider 
                    defaultOptions={{
                        dialogProps: {
                            fullWidth: true,
                            maxWidth: "xs"
                        },
                        confirmationButtonProps: {autoFocus: true}
                    }}>
                    <IndexPage/>
                </ConfirmProvider>
            </MuiThemeProvider>
        </JssProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
