// app.js
const express = require('express');
const app = express();
const cors = require('cors'); // Add CORS middleware

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const apiRoutes = require('./routes/apiRoutes');
console.log('apiroutes',apiRoutes)
app.use('/api', apiRoutes);

app.get('/',require(apiRoutes))

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
