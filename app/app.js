const http = require("http"),
  Koa = require("koa"),
  config = require("config"),
  err = require("./helpers/error"),
  { routes, allowedMethods } = require("./routes"),
  app = new Koa(),
  cors = require("@koa/cors");

app.use(err);
app.use(routes());
app.use(allowedMethods());
app.use(cors());

const server = http
  .createServer(app.callback())
  .listen(config.server.port, function() {
    console.log("%s listening at port %d", config.app.name, config.server.port);
  });

module.exports = {
  closeServer() {
    server.close();
  }
};
