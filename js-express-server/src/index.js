const express = require('express');
const logger = require('./middleware/logger');

const app = express();
const PORT = 8001;

app.use(logger);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});