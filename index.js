const express = require("express");

const dotenv = require("dotenv");
dotenv.config(); // .env 환경 변수 로딩
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🎮 캐릭터 관리 API 서버입니다.");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});