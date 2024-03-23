import React, { useEffect, useState } from "react";
import {
    initiateSocketConnection,
    subscribeToSensorData,
    disconnectSocket,
} from "./socketService";

const SensorDataComponent = () => {
    const [sensorData, setSensorData] = useState("");

    useEffect(() => {
        initiateSocketConnection();
        subscribeToSensorData((err, data) => {
            console.log("Sensor data received: ", data);
            if (err) return;
            setSensorData(data.data);
        });

        return () => {
            disconnectSocket();
        };
    }, []);

    return (
        <div>
            <p>Sensor Data: {sensorData}</p>
        </div>
    );
};

export default SensorDataComponent;
