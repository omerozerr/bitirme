import React, { useEffect } from "react";
import {
    initiateSocketConnection,
    disconnectSocket,
    subscribeToSensorData,
    createPeerConnection,
} from "./socketService"; // Adjust the import path as necessary

const Sound = () => {
    useEffect(() => {
        initiateSocketConnection();
        const peerConnection = createPeerConnection();

        // Example of subscribing to sensor data
        subscribeToSensorData((err, data) => {
            if (!err) {
                console.log(data);
            }
        });

        return () => {
            disconnectSocket();
            // Close peer connection when component unmounts
            if (peerConnection) {
                peerConnection.close();
            }
        };
    }, []);

    return (
        <div>
            {/* Your component UI here */}
            <h1>Real-Time Communication</h1>
        </div>
    );
};

export default Sound;
