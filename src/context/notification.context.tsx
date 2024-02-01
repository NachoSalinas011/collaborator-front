import { AlertColor } from '@mui/material';
import React, { useContext, useState } from "react";
import { Notification } from "../components/notification";

type ContextProps = {
    getError: (message: string) => void;
};

const NotificationContext = React.createContext<ContextProps | null>(null)

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState<AlertColor | undefined>(undefined);

    const handleClose = () => {
        setOpen(false);
    }

    const getError = (message: string) => {
        setSeverity("error");
        setOpen(true);
        setMessage(message);
    };

    const value = {
        getError,
    };

    return (
        <NotificationContext.Provider value={value}>
            <Notification handleClose={handleClose} open={open} severity={severity} message={message} />
            {children}
        </NotificationContext.Provider>
    )
} 

export const UseNotification = () => {
    const context = useContext(NotificationContext)
    if(!context){
        throw new Error("No existe contexto");
    }else{
        return context;
    }
}