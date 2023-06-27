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
                original: '124.45'
            },
            chave: '2c449291-5b3d-4179-a3c6-5099683f6206',
            solicitacaoPagador: 'Cobrança de Serviços Prestados.'
        };

        const cobResponse = await gerencianetService.createCob(dataCob, accessToken);

        res.send(cobResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
