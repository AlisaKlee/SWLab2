let socket = null;

export function connectWebSocket(onMessageCallback) {
  const url = import.meta.env.VITE_WEBSOCKET_URL || 'ws://localhost:8080/ws/vitaldaten'; // Stelle sicher, dass dies lokal ist
  socket = new WebSocket(url);

  socket.onopen = () => {
    console.log('✅ WebSocket connected');
    sendMessage({ type: "ping", content: "Test vom Frontend" });
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (onMessageCallback) {
      onMessageCallback(data);
    }
  };

  socket.onerror = (err) => {
    console.error('WebSocket error', err);
  };

  socket.onclose = () => {
    console.log('❌ WebSocket disconnected');
  };
}

export function sendMessage(payload) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(payload));
  } else {
    console.warn('WebSocket not open');
  }
}

export function closeWebSocket() {
  if (socket) {
    socket.close();
  }
}
