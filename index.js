const express = require("express");

const data = require("./data");

const app = express();

//console.log(data);

app.get("/users", (req, res) => {
  res.send(data);
  //console.log(data);
});

app.get("/users/:userID", (req, res) => {
  const userID = req.params.userID;
  //   console.log(userID);
  const user = data.find((p) => p.id == userID);
  console.log(user);
  res.send(user);
});

const port = 5001;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
