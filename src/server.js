const express = require('express');
const app = express();
const paymentController = require('./controllers/paymentController');

app.get('/', paymentController.getPayment);
// Adicione outras rotas e controladores conforme necessário

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
