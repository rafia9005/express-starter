import db from "../../utils/db.js";

async function Login(req, res) {
  const { email, password } = req.body;
  try {
    const { data, error } = await db.auth.signInWithPassword({ email, password });
    if (error) throw error;
    res.json(data.session)
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
}

export { Login };
