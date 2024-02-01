import { Alert, AlertColor, Snackbar, Typography } from '@mui/material';

type NotificationProps = {
    open: boolean,
    message: string,
    severity: AlertColor | undefined,
    handleClose: () => void
}

export const Notification: React.FC<NotificationProps> = ({ open, message, severity, handleClose }) => {
    return (
        <Snackbar onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }} autoHideDuration={4000} open={open}>
            <Alert onClose={handleClose} severity={severity}>
                <Typography>{message}</Typography>
            </Alert>
        </Snackbar>
    )
}