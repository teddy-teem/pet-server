const express = require("express");
const health = require("../controllers/health");
const userRouter = require("./users");

const router = express.Router();

router.get("/health", health.check);
router.use("/users", userRouter);

module.exports = router;
