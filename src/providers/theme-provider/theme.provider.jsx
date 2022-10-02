import React from 'react';
import {createGenerateClassName, MuiThemeProvider,} from "@material-ui/core/styles";
import {JssProvider} from "react-jss";
import {appTheme} from "./overrides-theme";

export const generateClassName = createGenerateClassName({
    dangerouslyUseGlobalCSS: true
});

export const AppThemeProvider = ({children, ...props}) => {
    return <JssProvider generateClassName={generateClassName}>
        <MuiThemeProvider theme={appTheme} {...props}>
            {children}
        </MuiThemeProvider>
    </JssProvider>
}
