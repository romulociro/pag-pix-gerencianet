# Pag Pix GerenciaNet

Este é um aplicativo Node.js para processar pagamentos usando o Pix por meio da API do GerenciaNet.

## Configuração

Antes de executar o aplicativo, é necessário configurar as informações da API do GerenciaNet e os certificados. Siga as etapas abaixo para configurar o ambiente:

1. Renomeie o arquivo `.env_example` para `.env` e preencha os valores das variáveis com suas credenciais da API do GerenciaNet.

2. Certifique-se de ter os certificados .p12 necessários para configurar o ambiente de produção. Coloque os certificados na pasta `certs`.

## Instalação

Siga as etapas abaixo para executar o aplicativo:

1. Clone o repositório para o seu ambiente local.

2. Navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências:

   ```
   yarn install
   ```

3. Após a conclusão da instalação, execute o seguinte comando para iniciar o aplicativo usando o Nodemon:

   ```
   yarn start:dev
   ```

4. O aplicativo será executado localmente no endereço `http://localhost:8000`.

## Uso

Para usar o aplicativo, acesse o endereço `http://localhost:8000` em seu navegador.

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato.

- Nome: [Rômulo Ciro]
- E-mail: [ciro143@gmail.com]

---
