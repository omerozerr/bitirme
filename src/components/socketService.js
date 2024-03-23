// Assuming the above Socket.IO setup is in a file named socket.js

import io from "socket.io-client";
import { useEffect, useState } from "react";

let socket;

export const initiateSocketConnection = () => {
    socket = io("http://localhost:5000");
    console.log(`Connecting socket...`);
};

export const disconnectSocket = () => {
    console.log("Disconnecting socket...");
    if (socket) socket.disconnect();
};

export const subscribeToSensorData = (cb) => {
    if (!socket) return true;
    socket.on("sensor_data", (data) => {
        console.log("Websocket event received!");
        return cb(null, data);
    });
};

export { socket };
