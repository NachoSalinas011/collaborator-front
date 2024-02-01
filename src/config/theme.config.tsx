import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from '@mui/material';
import * as React from "react";

type ThemeProp = {
    children: JSX.Element
};

export enum themePalette {
    background = "#12181b",
    lime = "#C8FA5F",
    font_global = "'JetBrains Mono', monospace"
};

const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: themePalette.background
        },
        primary: {
            main: themePalette.lime
        }
    },
    typography: {
        fontFamily: themePalette.font_global,
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5em"
                }
            }
        }
    }
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}