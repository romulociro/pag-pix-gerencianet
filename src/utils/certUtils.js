const fs = require('fs');
const path = require('path');
const https = require('https');

const certPath = './certs/producao-467735-PagCert.p12'

// Função para criar o agente HTTPS com o certificado
exports.createAgent = () => {
    const cert = fs.readFileSync(certPath);

    return new https.Agent({
        pfx: cert,
        passphrase: ''
    });
};

// Função para obter as credenciais codificadas
exports.getEncodedCredentials = () => {
    const credentials = `${process.env.GN_CLIENT_ID}:${process.env.GN_CLIENT_SECRET}`;
    return Buffer.from(credentials).toString('base64');
};
