import React from 'react';
import { createGenerateClassName } from "@material-ui/core/styles";
import {unstable_createMuiStrictModeTheme as createTheme} from '@material-ui/core/styles';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {JssProvider} from "react-jss";

export const baseTheme = createTheme();

export const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true
});

export const getTheme = () => ({
  MuiButton: {
    root: {
      "&.MuiButton--chubby": {
        borderRadius: 50
      },
      "&.MuiButton--gradient": {
        boxShadow: '0px 4px 24px rgba(252, 56, 56, 0.4)',
        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
        background: "linear-gradient(to right, #FFC371, #FF5F6D)",
        "&:hover": {
           boxShadow: '0px 4px 24px rgba(252, 56, 56, 0.4)',
        }
      }
    },
    label: {
      color: baseTheme.palette.common.white,
      textTransform: "none",
      fontSize: 15,
      fontWeight: 700
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
    return  <JssProvider generateClassName={generateClassName}>
        <MuiThemeProvider
            theme={createTheme({
                typography: {
                    useNextVariants: true
                },
                overrides: getTheme(baseTheme)
            })} 
            {...props}
        >
            {children}
        </MuiThemeProvider>
    </JssProvider>
}
