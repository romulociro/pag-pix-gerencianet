const axios = require('axios');
const certUtils = require('../utils/certUtils.js');

const agent = certUtils.createAgent();

const credentials = certUtils.getEncodedCredentials();

const baseURL = process.env.GN_ENDPOINT;

// Função para obter o token de acesso
exports.getAccessToken = async () => {
    const authResponse = await axios.default.post(
        `${baseURL}/oauth/token`,
        {
            grant_type: 'client_credentials'
        },
        {
            headers: {
                Authorization: `Basic ${credentials}`,
                'Content-Type': 'application/json'
            },
            httpsAgent: agent
        }
    );

    return authResponse.data.access_token;
};

// Função para criar uma cobrança
exports.createCob = async (dataCob, accessToken) => {
    const reqGN = axios.default.create({
        baseURL,
        httpsAgent: agent,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
    });

    const cobResponse = await reqGN.post('/v2/cob', dataCob);

    return cobResponse;
};