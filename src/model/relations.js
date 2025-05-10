const Role = require('./Role');
const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');
const OrderDetail = require('./OrderDetail');

/*Declaracion de relaciones*/
User.belongsTo(Role, { foreignKey: 'role_id' });
Role.hasMany(User, { foreignKey: 'role_id' });

Order.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Order, { foreignKey: 'user_id' });

OrderDetail.belongsTo(Order, { foreignKey: 'order_id' });
Order.hasMany(OrderDetail, { foreignKey: 'order_id' });

OrderDetail.belongsTo(Product, { foreignKey: 'product_id' });
Product.hasMany(OrderDetail, { foreignKey: 'product_id' });