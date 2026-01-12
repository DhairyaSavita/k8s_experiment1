const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 GitOps App Deployed Successfully</h1>
    <p>Deployed using Argo CD + GitHub Actions</p>
    <p><b>Version:</b> ${process.env.APP_VERSION || "v1"}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
