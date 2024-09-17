import { useEffect } from 'react';
import toast from "react-hot-toast";


// WebSocketProvider component
function Notification(){

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            return;
        }

        const ws = new WebSocket(`ws://localhost:8080/notify/ws?token=${encodeURIComponent(token)}`);

        ws.onopen = () => {
            console.log('WebSocket connection opened');
        };

        ws.onmessage = (event) => {
            console.log('Message from server:', event.data);
            toast(
                event.data,
                {
                    duration: 6000,
                }
            );
        };

        ws.onclose = () => {
            console.log('WebSocket connection closed');
        };



        return () => {
            ws.close();
        };
    }, []);

    return (
        <div>

        </div>

    );
};
export default Notification;