const express = require('express');
const paymentController = require('./controllers/paymentController');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

app.get('/', paymentController.getPayment);
app.get('/qrcode/:id', paymentController.getQRCode);
app.get('/payment/:txid/check', paymentController.getPaymentStatus);


// Adicione outras rotas e controladores conforme necessário

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
