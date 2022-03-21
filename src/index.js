import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './pages/IndexPage';
import {MuiThemeProvider, unstable_createMuiStrictModeTheme as createMuiTheme} from '@material-ui/core/styles';
import './index.css';
import './models/init';

const theme = createMuiTheme();

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <IndexPage/>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
