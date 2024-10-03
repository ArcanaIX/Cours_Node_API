import http from "http";
import chalk from "chalk"
import fs from "fs";

import writeHead from "./helpers/writeHead.js";

http.createServer((req, res) => {

    if (req.url === "/") {
        writeHead(res, "All good", "text/html", fs.readFileSync("./index.html"));
        res.write(fs.readFileSync("./index.html"));
        res.end()
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


    if (req.url === "/img/chat" && req.method === "GET") {
        const img = fs.readFileSync("./chat.png");
        const filename = "chat.png"
        const file_extension = filename.split('.').pop();
        let ctype = "";

        switch( file_extension ) {
            case "gif":
                ctype="image/gif";
                break;
            case "png":
                ctype="image/png";
                break;
            case "jpeg":
            case "jpg":
                ctype="image/jpeg";
                break;
            case "svg":
                ctype="image/svg+xml";
                break;
            default:
        }

        writeHead(res, "All good", ctype, img);
        res.write(img);
        res.end();
    }



}).listen(3000, () => {
    console.log(chalk.blue("Server started on port 3000"));
});