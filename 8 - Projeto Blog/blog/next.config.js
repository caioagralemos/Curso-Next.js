/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase == PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      compress: true,
      env: {
        nome_conta: 'Caio Lemos (dev)',
        senha_conta: '123456',
      }
    }
  } else {
    return {
      reactStrictMode: true,
      compress: false,
      env: {
        nome_conta: 'Caio_Lemos',
        senha_conta: '121212101#123n)123njqs@#92139012-aqa',
      }
    }
  }
}
