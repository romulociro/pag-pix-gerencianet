const express = require('express');
const paymentController = require('./controllers/paymentController');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

app.get('/', paymentController.getPayment);
app.get('/qrcode/:id', paymentController.getQRCode);

app.post('/webhook(/pix)?', (req, res) => {
    console.log(req.body)
    res.send(200)
});

// Adicione outras rotas e controladores conforme necessário

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
