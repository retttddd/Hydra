const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            pathFilter: '/api',
            changeOrigin: true,
            secure: false,
            logLevel: "debug",
            logger: console,
            headers: {
                Connection: 'Keep-Alive'
            },
        })
    );
};

