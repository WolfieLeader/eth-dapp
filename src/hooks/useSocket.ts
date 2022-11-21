import { useState, useEffect, useRef } from "react";

export const useSocket = (url: string) => {
  const [lastMessage, setLastMessage] = useState<object | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(url);

    wsRef.current = ws;
    wsRef.current.onopen = () => setIsConnected(true);
    wsRef.current.onclose = () => setIsConnected(false);
    wsRef.current.onmessage = (event) => setLastMessage(JSON.parse(event.data));

    return () => {
      if (isConnected) {
        ws.close();
      }
    };
  }, []);

  return { lastMessage, isConnected };
};
