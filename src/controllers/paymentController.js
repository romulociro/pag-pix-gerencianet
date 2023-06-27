const gerencianetService = require('../services/gerencianetService');

// Função para obter informações de um pagamento
exports.getPayment = async (req, res) => {
    try {
        const accessToken = await gerencianetService.getAccessToken();

        const dataCob = {
            calendario: {
                expiracao: 3600
            },
            valor: {
                original: '00.01'
            },
            chave: '2c449291-5b3d-4179-a3c6-5099683f6206',
            solicitacaoPagador: 'Cobrança de Serviços Prestados.'
        };

        const cobResponse = await gerencianetService.createCob(dataCob, accessToken);

        res.send(cobResponse.data);
    } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 400) {
            res.status(400).send('Bad Request');
        } else {
            res.status(500).send('Internal Server Error');
        }
    }
};

// Função para obter o QR Code de uma cobrança
exports.getQRCode = async (req, res) => {
    try {
        const accessToken = await gerencianetService.getAccessToken();
        const qrCodeResponse = await gerencianetService.getQRCode(req.params.id, accessToken);

        // Retornar a imagem como uma resposta de tipo "image/png"
        res.set('Content-Type', 'image/png');
        res.send(qrCodeResponse.data);
    } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 400) {
            res.status(400).send('Bad Request');
        } else if (error.response && error.response.status === 404) {
            res.status(404).send('Not Found');
        } else {
            res.status(500).send('Internal Server Error');
        }
    }
};
