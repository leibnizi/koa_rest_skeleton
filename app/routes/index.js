const Router = require("koa-router"),
  KoaBody = require("koa-body"),
  {
    getId,
    list,
    createItem,
    createItem2,
    updateItem,
    removeItem
  } = require("../controllers/indexController");

const router = new Router();

router
  .get("/users", list)
  .get("/users/:id", getId)
  .post("/users", KoaBody(), createItem)
  .post(
    "/api/admin/game/memberGame/v1/advanceSettlement/",
    KoaBody(),
    createItem2
  )
  .put("/users/:id", KoaBody(), updateItem)
  .delete("/users/:id", removeItem);

module.exports = {
  routes() {
    return router.routes();
  },
  allowedMethods() {
    return router.allowedMethods();
  }
};
