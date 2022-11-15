const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/dist/index.html`));
});

app.get('/', (reg, res) => {
	res.send({"name": "Béla"})
	console.log(res.send({"name": "Béla"}));
})

app.use(
  "/public",
  express.static(path.join(`${__dirname}/../frontend/dist`))
);

app.use(
	"/public",
	express.static(path.join(`${__dirname}/../frontend/src`))
  );

app.listen(9000, (_) => console.log("http://127.0.0.1:9000"));