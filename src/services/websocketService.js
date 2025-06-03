import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

let stompClient = null;

export function connectWebSocket(onMessageCallback) {
  const socket = new SockJS(import.meta.env.VITE_WEBSOCKET_URL);
  stompClient = new Client({
    webSocketFactory: () => socket,
    onConnect: () => {
      console.log('✅ WebSocket connected (STOMP)');

      // Empfangen von Nachrichten
      stompClient.subscribe('/topic/vitaldaten', (message) => {
        if (onMessageCallback) {
          onMessageCallback(JSON.parse(message.body));
        }
      });

      // Beispiel: beim Start gleich eine Nachricht senden
      sendMessage({ content: 'Hallo vom Frontend!' });
    },
    onStompError: (frame) => {
      console.error('STOMP error:', frame);
    },
    onDisconnect: () => {
      console.log('❌ WebSocket disconnected');
    }
  });

  stompClient.activate();
}

export function sendMessage(payload) {
  if (stompClient && stompClient.connected) {
    stompClient.publish({
      destination: '/app/send',
      body: JSON.stringify(payload),
    });
  } else {
    console.warn('WebSocket not connected');
  }
}

export function closeWebSocket() {
  if (stompClient) {
    stompClient.deactivate();
  }
}
