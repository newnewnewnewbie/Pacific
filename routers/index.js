const express = require("express");
const { responseData } = require("../constants");
const { apiUrls } = require("../constants/apis");
const router = express.Router();

router.get(apiUrls.index, (req, res) => {
  const data = responseData();
  try {
    return res.status(200).send("Pacific API");
  } catch (err) {
    console.log("오류: ", err);
    data.error = 1;
    data.message = err;
    return res.status(404).send(data);
  }
});

module.exports = router;