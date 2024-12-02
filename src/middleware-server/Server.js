const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 5000; // The port your middleware server will run on

// Enable CORS for all incoming requests
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Route to handle registration
app.post("/api/auth/register", async (req, res) => {
  try {
    // Extract user data from the incoming request body
    const { firstName, lastName, email, password, phoneNumber, institution } = req.body;

    // Forward the request to the real API
    const response = await axios.post(
      "https://futo1k-api.onrender.com/api/auth/register",
      {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        institution,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Send back the response from the real API
    res.status(response.status).json(response.data);
  } catch (error) {
    // Handle errors and send back an appropriate response
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: "Server error" });
  }
});

// Start the middleware server
app.listen(PORT, () => {
  console.log(`Middleware server is running on http: localhost:${PORT}`);
});