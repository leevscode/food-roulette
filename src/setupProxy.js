const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/menu/",
    createProxyMiddleware({
      target: "http://192.168.0.144:5003",
      changeOrigin: true,
      // pathRewrite: {
      //   "^/api": "",
      // },
      changeOrigin: true,
    }),
  );
};
