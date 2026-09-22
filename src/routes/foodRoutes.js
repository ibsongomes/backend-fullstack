const express = require("express");
const foodController = require("../controllers/foodController");

const router = express.Router();

router.get("/", foodController.listarComidas);
router.get("/:id", foodController.buscarComida);
router.post("/", foodController.criarComida);
router.put("/:id", foodController.atualizarComida);
router.delete("/:id", foodController.excluirComida);

module.exports = router;
