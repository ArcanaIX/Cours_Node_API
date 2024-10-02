import http from "http";
import chalk from "chalk"
import fs from "fs";

http.createServer((req, res) => {

    //res.writeHead(200, "Tout est OK", { "Content-Type": "text/css,text/html", "Content-Length" : Buffer.byteLength(fs.readFileSync("./index.html", "utf8") + fs.readFileSync("./style.css", "utf8")) });
    //res.write(fs.readFileSync("./style.css", "utf8"));
    //res.end(fs.readFileSync("./index.html", "utf8"));

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(fs.readFileSync("./index.html", "utf-8"));
        res.end();
    }

    if (req.url === "/form.html") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(fs.readFileSync("./form.html", "utf-8"));
        res.end();
    }

    if (req.url === "/style.css") {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(fs.readFileSync("./style.css", "utf-8"));
        res.end();
    }

}).listen(3000, () => {
    console.log(chalk.green(), "Server started on port 3000");
});