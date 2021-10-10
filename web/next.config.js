/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    GOOGLE_LOGIN_API: process.env.GOOGLE_LOGIN_API,
  }
}
