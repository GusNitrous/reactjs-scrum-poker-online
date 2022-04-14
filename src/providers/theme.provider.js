import React from 'react';
import { createGenerateClassName } from "@material-ui/core/styles";
import {unstable_createMuiStrictModeTheme as createTheme} from '@material-ui/core/styles';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {JssProvider} from "react-jss";

export const baseTheme = createTheme();

export const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true
});

export const getAppTheme = () => ({
  MuiButton: {
    root: {
      "&.MuiButton--gradient": {
        transition: "all 0.2s ease-in-out 0s",
        background: 'none',
        backgroundSize: '140% 140%',
        backgroundImage: "linear-gradient(to right, #5175B4, #FF8383)",
        "&:hover": {
            backgroundSize: '100% 100%',
        },
      },
      "&.MuiButton--gradient-label": {
              color: baseTheme.palette.common.white,
              textTransform: "uppercase",
              fontSize: 13,
              fontWeight: 700
        }
    },
    contained: {
      minHeight: 30,
      boxShadow: baseTheme.shadows[0],
      "&$focusVisible": {
        boxShadow: baseTheme.shadows[0]
      },
      "&:active": {
        boxShadow: baseTheme.shadows[0]
      },
      "&$disabled": {
        boxShadow: baseTheme.shadows[0]
      }
    }
  }
});
 
export const AppThemeProvider = ({children, ...props}) => {
    return <JssProvider generateClassName={generateClassName}>
        <MuiThemeProvider
            theme={createTheme({
                typography: {
                    useNextVariants: true
                },
                overrides: getAppTheme(baseTheme)
            })} 
            {...props}
        >
            {children}
        </MuiThemeProvider>
    </JssProvider>
}
