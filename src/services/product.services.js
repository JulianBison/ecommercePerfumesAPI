import Product from "../models/Product.js";

export const getAllProducts = async () => {
  return await Product.findAll();
};

export const getProductById = async (id) => {
  return await Product.findByPk(id);
};

export const createProduct = async (data) => {
  return await Product.create(data);
};

export const updateProduct = async (id, data) => {
  const product = await Product.findByPk(id);
  if (!product) return null;
  return await product.update(data);
};

export const deleteProduct = async (id) => {
  const product = await Product.findByPk(id);
  if (!product) return null;
  await product.destroy();
  return product;
};
