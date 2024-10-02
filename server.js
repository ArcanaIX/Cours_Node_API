import http from "http";
import chalk from "chalk"
import fs from "fs";

http.createServer((req, res) => {

    res.writeHead(200, "Tout est OK", { "Content-Type": "text/html", "Content-Length" : Buffer.byteLength(fs.readFileSync("./index.html", "utf8")) });
    res.end(fs.readFileSync("./index.html", "utf8"));
}).listen(3000, () => {
    console.log(chalk.green(), "Server started on port 3000");
});