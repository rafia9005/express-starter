import db from "../../utils/db.js";

async function Register(req, res) {
  const { name, email, password } = req.body;
  try {
    const { data, error } = await db.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: name
        },
      },
    });
    if (error) throw error;
    res.send(data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export { Register };
