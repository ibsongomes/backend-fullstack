const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    nome: {
      type: String,
      required: true,
      unique: true
    },
    descricao: {
        type: String,
    },
    preco: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Food", foodSchema);
