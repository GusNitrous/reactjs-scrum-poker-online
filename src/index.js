import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './pages/IndexPage';
import { createGenerateClassName } from "@material-ui/core/styles";
import {MuiThemeProvider, unstable_createMuiStrictModeTheme as createTheme} from '@material-ui/core/styles';
import {JssProvider} from "react-jss";
import {ConfirmProvider} from "material-ui-confirm";

import './index.css';
import './models/init';

const muiBaseTheme = createTheme();

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true
});

const getTheme = (theme) => ({
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
    // label: {
    //   color: muiBaseTheme.palette.common.white,
    //   textTransform: "none",
    //   fontSize: 15,
    //   fontWeight: 700
    // },
    contained: {
      minHeight: 30,
      boxShadow: muiBaseTheme.shadows[0],
      "&$focusVisible": {
        boxShadow: muiBaseTheme.shadows[0]
      },
      "&:active": {
        boxShadow: muiBaseTheme.shadows[0]
      },
      "&$disabled": {
        boxShadow: muiBaseTheme.shadows[0]
      }
    }
  }
});


ReactDOM.render(
    <React.StrictMode>
        <JssProvider generateClassName={generateClassName}>
            <MuiThemeProvider
                theme={createTheme({
                    typography: {
                        useNextVariants: true
                    },
                    overrides: getTheme(muiBaseTheme)
                })}>
                <ConfirmProvider 
                    defaultOptions={{
                        dialogProps: {
                            fullWidth: true,
                            maxWidth: "xs"
                        },
                        confirmationButtonProps: {autoFocus: true}
                    }}>
                    {/* Use IndexPage component */}
                    <IndexPage/>
                </ConfirmProvider>
            </MuiThemeProvider>
        </JssProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
