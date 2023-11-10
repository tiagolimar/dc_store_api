import { DataTypes } from "sequelize"

const produtoModel = (sequelize, Sequelize)=>{
    const Produto = sequelize.define('produto',{
        nome:{
            type: DataTypes.STRING,
            allowNull: false
        },
        categoria:{
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        desconto:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        precoAntes:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        precoDepois:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        ativo:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        
    })
    return Produto
}