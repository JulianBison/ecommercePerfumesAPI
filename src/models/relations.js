import Role from "./Role.js";
import User from "./User.js";
import Product from "./Product.js";
import Order from "./Order.js";
import OrderItem from "./OrderItem.js";

User.belongsTo(Role, { foreignKey: "role_id" });
Role.hasMany(User, { foreignKey: "role_id" });

Order.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Order, {
    foreignKey: "user_id",
    as: "orders",
    onDelete: 'CASCADE'
});
OrderItem.belongsTo(Order, { foreignKey: "order_id" });
Order.hasMany(OrderItem, {
    foreignKey: "order_id",
    as: "items",
    onDelete: 'CASCADE'
});
OrderItem.belongsTo(Product, { foreignKey: "product_id" });
Product.hasMany(OrderItem, { foreignKey: "product_id" });
