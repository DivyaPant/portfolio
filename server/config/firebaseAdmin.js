const admin = require("firebase-admin");

const serviceAccount = require("../firebase-adminsdk.json"); // from Firebase console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;