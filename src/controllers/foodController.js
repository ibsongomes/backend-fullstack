const Food = require("../models/Food");

async function listarComidas(req, res) {
  try {
    const comidas = await Food.find();
    res.json(comidas);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
}

async function buscarComida(req, res) {
  try {
    const comida = await Food.findById(req.params.id)

    if (!comida) {
      return res.status(404).json({ mensagem: "Comida não encontrada" });
    }

    res.json(comida);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function criarComida(req, res) {
  try {
    const comida = await Food.create(req.body);
    res.status(201).json(comida);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function atualizarComida(req, res) {
  try {
    const comida = await Food.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!comida) {
      return res.status(404).json({ mensagem: "Comida não encontrada" });
    }

    res.json(comida);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function excluirComida(req, res) {
  try {
    const comida = await Food.findByIdAndDelete(req.params.id);

    if (!comida) {
      return res.status(404).json({ mensagem: "Comida não encontrada" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

module.exports = {
  listarComidas,
  buscarComida,
  criarComida,
  atualizarComida,
  excluirComida
};
