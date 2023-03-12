const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'https://www.googleapis.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/youtube/v3'
        },
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
      })
    );
  };