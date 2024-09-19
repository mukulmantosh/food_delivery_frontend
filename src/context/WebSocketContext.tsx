import {createContext, useEffect, useState} from "react";
import toast from "react-hot-toast";
import useAuth from "./auth.tsx";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const WebSocketContext = createContext();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const WebSocketProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    const { isAuthenticated } = useAuth();


    useEffect(() => {
        if (!isAuthenticated) {
            console.log("WS::NoAuth");
            return;
        }
        const token = localStorage.getItem('token') as string;
        const ws = new WebSocket(`ws://localhost:8080/notify/ws?token=${encodeURIComponent(token)}`);
        ws.onopen = () => {
            console.log('WS::Connected');
        };
        ws.onmessage = (event) => {
            toast.success(event.data, {
                duration: 4000,
            });
        };
        ws.onclose = () => {
            console.log('WS::Closed');
        };

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setSocket(ws);

        return () => {
            ws.close();
        };
    }, [isAuthenticated]);

    return (
        <WebSocketContext.Provider value={{ socket}}>
            {children}
        </WebSocketContext.Provider>
    );

}
