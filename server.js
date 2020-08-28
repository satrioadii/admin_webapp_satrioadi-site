const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)
app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(8001);
