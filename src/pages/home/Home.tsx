import { Button, Container } from '@mui/material';
import { UseNotification } from '../../context/notification.context';

export const HomePage: React.FC<{}> = () => {
    const { getError } = UseNotification();

    const handleClick = () => {
        getError("Hola mundo me voy a mimir");
    }
    return (
        <>
            <Container sx={{ mt: 9 }} maxWidth="xl">
                <Button onClick={handleClick} fullWidth variant="contained">Hola mundoooo</Button>
            </Container>
        </>
    )
}