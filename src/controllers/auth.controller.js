import { loginUser, registerUser } from "../services/auth.services.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token, user } = await loginUser({ email, password });
    res.json({ token, user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const register = async (req, res) => {
  try {
    const { token, user } = await registerUser(req.body);
    res.status(201).json({ token, user });
  } catch (error) {
    console.error("Error en registro:", error.message);
    res.status(error.status || 500).json({ message: error.message });
  }
};
