const mqtt = require("mqtt");

// Define MQTT broker details
const brokerUrl =
  "mqtts://e9a5c8d44ce34c2c97e290e0e58983cb.s2.eu.hivemq.cloud:8883";
const clientId = ""; // "web-client-" + Math.random().toString(16).substr(2, 8);
const username = "ShafinAhmed";
const password = "Shafin@me12";

// Create an MQTT client
const client = mqtt.connect(brokerUrl, {
  clientId: clientId,
  username: username,
  password: password,
});

// Handle the 'connect' event
client.on("connect", () => {
  console.log("Connected to MQTT broker");

  // Subscribe to a topic
  const topic2 = "Test2";
  client.subscribe(topic2, (err) => {
    if (!err) {
      console.log("Subscribed to", topic2);
    }
  });

  const topic1 = "Test1";

  // Publish a message to a topic
  client.publish(topic1, "Hello, MQTT!");
});

// Handle the 'message' event
client.on("message", (topic2, message) => {
  console.log(`Received message on topic ${topic2}: ${message.toString()}`);
});

// Handle the 'error' event
client.on("error", (err) => {
  console.error("Error:", err);
});
