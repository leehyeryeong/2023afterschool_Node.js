const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="post">
    <input type="submit" name="position" value="문과생">
    <input type="submit" name="position" value="이과생">
  </form>
  `);
});

app.post('/', (req, res) => {
  const {
    body: {position},
  } = req;
  res.send(
    `<script>alert("${position}");
     window.location.href = "/";
    </script>`
  )
});

app.listen(3000, () => {
  console.log('3000번 포트에서 서버 시작');
});