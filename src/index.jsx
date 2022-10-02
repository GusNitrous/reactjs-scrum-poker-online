import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectRoutes} from "./routing";
import {AppThemeProvider, ConfirmProvider} from "./providers";
// import CssBaseline from '@material-ui/core/CssBaseline';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import {AppLayout} from "./layout/AppLayout";

// Import Main App styles
import './styles/global.css';

// Import Effector models
import './models/init';

const appName = "Scrummarly";
const description = "Online estimation tool for agile teams";

ReactDOM.render(
        <React.StrictMode>
            <NoSsr>
                <GoogleFontLoader fonts={[{font: 'Montserrat', weights: [200, 400, 700, 800]}]}/>
                <AppThemeProvider>
                    {/*<CssBaseline/>*/}
                    <ConfirmProvider>
                        <ConnectRoutes
                                layout={{
                                    component: AppLayout,
                                    props: {
                                        appName,
                                        description,
                                    }
                                }}
                        />
                    </ConfirmProvider>
                </AppThemeProvider>
            </NoSsr>
        </React.StrictMode>,
        document.getElementById('root')
);
