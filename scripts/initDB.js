import { sequelize } from "../src/db.js";
import Role from "../src/models/Role.js";

async function init() {
  try {
    await sequelize.sync();
    console.log("Tablas sincronizadas correctamente.");

    const roles = [
      { name: "Sysadmin", description: "Administrador con todos los permisos" },
      { name: "Admin", description: "Administrador de la tienda" },
      { name: "User", description: "Usuario estándar" },
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
