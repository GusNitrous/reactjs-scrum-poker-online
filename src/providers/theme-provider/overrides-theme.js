import {unstable_createMuiStrictModeTheme as createTheme} from "@material-ui/core/styles";

export const createAppTheme = createTheme;
export const baseTheme = createAppTheme();

export const createThemeOverrides = (options = baseTheme) => ({
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
                color: options.palette.common.white,
                textTransform: "uppercase",
                fontSize: 13,
                fontWeight: 700
            }
        },
        contained: {
            minHeight: 30,
            boxShadow: options.shadows[0],
            "&$focusVisible": {
                boxShadow: options.shadows[0]
            },
            "&:active": {
                boxShadow: options.shadows[0]
            },
            "&$disabled": {
                boxShadow: options.shadows[0]
            }
        }
    }
});

export const appTheme = createAppTheme({
    typography: {
        fontFamily: "'Montserrat', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        useNextVariants: false,
    },
    overrides: createThemeOverrides()
});
