import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Endpoint for contact form submission
app.post('/api/contact', (req, res) => {
    const { name, phone, message } = req.body;

    // In a real application, you would save this to a database 
    // or send an email here.
    console.log('--- New Contact Form Submission ---');
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Message: ${message}`);
    console.log('-----------------------------------');

    res.status(200).json({ success: true, message: 'Message received successfully.' });
});

// Serve frontend build in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('Jeya Hyper Store API Server is running. Please run the frontend via Vite.');
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
