import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';


type LoginType = {
    username: string,
    password: string
};

export const LoginPage: React.FC<{}> = () => {

    const [loginData, setLoginData] = useState<LoginType>({
        username: "",
        password: ""
    });

    const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(loginData);
    }

    return (
        <Container maxWidth="sm">
            <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: "100vh" }}>
                <Grid item>
                    <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                        <Typography variant="h4" align="center" sx={{ mt: 1, mb: 1 }}>Welcome!</Typography>
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField onChange={dataLogin} name="username" type="email" margin="normal" fullWidth required label="Email" sx={{ mt: 2, mb: 1.5 }} />
                            <TextField onChange={dataLogin} name="password" type="password" margin="normal" fullWidth required label="Password" sx={{ mt: 1.5, mb: 1.5 }} />
                            <Button fullWidth type="submit" variant="contained" sx={{ mt: 1.5, fontSize: 16 }}>Log in</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}