const express = require("express");
const { responseData } = require("../constants");
const router = express.Router();

router.get("/api", (req, res) => {
  const data = responseData();
  try {
    data.result = "Pacific API";
    return res.status(200).send(data);
  } catch (err) {
    console.log("오류: ", err);
    data.error = 1;
    data.message = err;
    return res.status(404).send(data);
  }
});

module.exports = router;