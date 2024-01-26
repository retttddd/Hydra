const {
  createProxyMiddleware,
  fixRequestBody,
} = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      onProxyReq: fixRequestBody,
      target: process.env.REACT_APP_SERVER_KEY,
      pathFilter: "/api",
      changeOrigin: true,
      secure: false,
      logLevel: "debug",
      logger: console,
      headers: {
        Connection: "Keep-Alive",
      },
    })
  );
};
