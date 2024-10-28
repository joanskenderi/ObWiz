const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const database = require('./database/mongo');
const userRoutes = require('./routes/user-routes');

dotenv.config();
database.connect();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
