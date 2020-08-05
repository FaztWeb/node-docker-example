const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/products", (req, res) => {
  res.render("products");
});

module.exports = router;
