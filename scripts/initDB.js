import { sequelize } from "../src/db.js";
import Role from "../src/models/Role.js";

async function init() {
  try {
    await sequelize.sync();


    const roles = [
      { name: "admin", description: "Administrador con todos los permisos" },
      { name: "user", description: "Usuario estándar" },
      { name: "guest", description: "Usuario invitado" },
    ];

    await Role.bulkCreate(roles, { ignoreDuplicates: true });
    console.log("Roles fijos insertados o ya existentes.");
  } catch (error) {
    console.error("Error al sincronizar e insertar roles:", error);
  } finally {
    await sequelize.close();
  }
}

init();
