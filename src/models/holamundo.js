const holamundo = (sequelize, type) => {
    return sequelize.define(
        "holamundo", {
            id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            id_administrador: type.INTEGER,
            titulo: type.STRING(255),
            contenido: type.TEXT,
            fecha_creacion: {
                type: "TIMESTAMP",
                defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
                allowNull: false,
            },
        }, {
            timestamps: false,
        }
    );
};


module.exports = holamundo;