const express = require('express');
const app = express();
const paymentController = require('./controllers/paymentController');
const cors = require('cors');


app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/', paymentController.getPayment);
app.get('/qrcode/:id', paymentController.getQRCode);

// Adicione outras rotas e controladores conforme necessário

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
