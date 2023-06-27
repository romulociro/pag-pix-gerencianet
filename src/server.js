if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const express = require('express')
const axios = require('axios')
const fs = require('fs')
const path = require('path')
const https = require('https')
const { config } = require('dotenv')

const cert = fs.readFileSync(
    path.resolve(__dirname, `../certs/${process.env.GN_CERT}`)
)

const agent = new https.Agent({
    pfx: cert,
    passphrase: ''
})

const credentials = Buffer.from(
    `${process.env.GN_CLIENT_ID}:${process.env.GN_CLIENT_SECRET}`
).toString('base64')

const app = express();

app.get('/', (req, res) => {

    axios({
        method: 'POST',
        url: `${process.env.GN_ENDPOINT}/oauth/token`,
        headers: {
            Authorization: `Basic ${credentials}`,
            'Content-Type': 'application/json'
        },
        httpsAgent: agent,
        data: {
            grant_type: 'client_credentials'
        }
    }).then((response) => {
        const acessToken = response.data?.access_token

        const reqGN = axios.create({
            baseURL: process.env.GN_ENDPOINT,
            httpsAgent: agent,
            headers: {
                Authorization: `Bearer ${acessToken}`,
                'Content-Type': 'application/json'
            }
        })

        const dataCob = {
            calendario: {
                expiracao: 3600
            },
            valor: {
                original: '124.45'
            },
            chave: '2c449291-5b3d-4179-a3c6-5099683f6206',
            solicitacaoPagador: 'Cobrança de Serviços Prestados.'

        }

        reqGN.post('/v2/cob', dataCob, config).then((response) => res.send(response.data))
    })
})

app.listen(8000, () => {
    console.log('running')
})