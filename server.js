const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const deepl = require('deepl-node');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(cors());

const translator = new deepl.Translator(process.env.API_KEY);

app.post('/translate', async (req, res) => {
    const { text, targetLang } = req.body;

    try {
        const result = await translator.translateText(text, null, targetLang);
        res.json({ translation: result.text });
    } catch (error) {
        console.error('Error during translation:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});