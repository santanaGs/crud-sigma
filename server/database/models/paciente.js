'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paciente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Paciente.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    bairro: DataTypes.STRING,
    cep: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Paciente',
  });
  return Paciente;
};