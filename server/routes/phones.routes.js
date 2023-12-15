const router = require("express").Router();
const phones = require("../data/phones.json");

// GET /phones => Return all phones
router.get("/", (req, res, next) => {
  try {
    !phones && res.status(404).json({ errorMessage: "No phones found" });
    res.status(200).json(phones);
  } catch (error) {
    next(error);
  }
});

// GET /phones/:id => Return phone details by id
router.get("/:id", (req, res, next) => {
  try {
    const phoneId = Number(req.params.id);
    const phoneSelected = phones.find((phone) => phone.id === phoneId);
    if (!phoneSelected) {
      res
        .status(404)
        .json({ errorMessage: "The phone selected does not exist" });
    } else {
      res.status(200).json(phoneSelected);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
