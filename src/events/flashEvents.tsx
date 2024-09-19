import { useEffect } from 'react';
import toast from "react-hot-toast";

const useFlashEvents = (url: string) => {

    useEffect(() => {
        const eventSource = new EventSource(url);

        eventSource.onmessage = (event) => {
            toast(event.data, { position: "top-right"});
        };

        eventSource.onerror = (error) => {
            console.error("EventSource failed:", error);
            eventSource.close();
        };

        return () => {
            eventSource.close();
        };
    }, [url]);

};

export default useFlashEvents;