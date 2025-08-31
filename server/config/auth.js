const admin = require("./firebaseAdmin");

async function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken; // user info from Firebase
    console.log("Verified user:");
    next();
  } catch (err) {
    res.status(403).json({ error: "Invalid or expired token" });
  }
}

module.exports = verifyToken;

