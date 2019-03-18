export const registerWS = () => {
    const ws = new WebSocket(`ws://${window.location.host}`);
    ws.onopen = (event) => {
        console.log("WS OPENED: ", event);
    };
    ws.onclose = (event) => {
        console.log("WS CLOSED: ", event);
    };
    ws.onerror = (event) => {
        console.log("WS ERROR: ", event);
    };
    ws.onmessage = (event: MessageEvent) => {
        console.log("WS DATA: ", event.data);
    };
};
