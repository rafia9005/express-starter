import db from "../utils/db.js";

const Auth = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token && token.startsWith("Bearer ")) {
    try {
      const authToken = token.split(" ")[1];
      const { data, error } = await db.auth.getUser(authToken);
      if (error) {
        console.error("Error verifying token:", error.message);
        res.status(401).json({ message: "Unauthorized" });
      } else {
        req.user = data;
        next();
      }
    } catch (err) {
      console.error("Error verifying token:", err.message);
      res.status(401).json({ message: "Unauthorized" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export { Auth };
