import { Container, createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material';

const defaultTheme = createTheme();

export default function Collaborators() {
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline>
                        <Typography>COLLABORATORS YEAA</Typography>
                    </CssBaseline>
                </Container>

            </ThemeProvider>
        </>
    )

}