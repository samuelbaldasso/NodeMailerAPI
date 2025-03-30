const express = require("express");
const cors = require("cors");
require("dotenv").config();

const emailRoutes = require('./routes/email-route');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});