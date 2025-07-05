// require('dotenv').config(); // For OpenAI if needed

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const diagnose = require('./diagnosisLogic'); // Rule-based logic

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Health check route for Render root
app.get('/', (req, res) => {
  res.send('✅ Ayurveda Diagnosis Backend is live!');
});

// ✅ Rule-based diagnosis route
app.post('/diagnose', (req, res) => {
  const { prakriti, symptoms, lifestyle } = req.body;
  const result = diagnose(prakriti, symptoms, lifestyle);
  res.json(result);
});

// 🔒 Optional: AI diagnosis route
// app.post('/ai-diagnose', ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));

