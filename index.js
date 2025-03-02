
import http from "http";
import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// `__dirname` manuell definieren für ES-Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = http.createServer((req, res) => {

    console.log(`📌 Anfrage erhalten: ${req.method} ${req.url}`);

    new URL(req.url, "http://localhost:3000")

    if (req.url === "/" && req.method === "GET") {
        res.writeHead(301, { Location: "/start" });
        res.end();
    }else if (req.url === "/common.js" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/javascript" });
        fs.createReadStream("common.js").pipe(res);
    }else if (req.url === "/cards.js" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/javascript" });
        fs.createReadStream("cards.js").pipe(res);
    }else if (req.url === "/start" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("index.html").pipe(res)
    }else if (req.url === "/readInput.js" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/javascript" });
        fs.createReadStream("readInput.js").pipe(res);
    }else if (req.url === "/gameon" && req.method === "GET") {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("gameOn.html").pipe(res)
    }else if (req.url === "/gameOn.js" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/javascript" });
        fs.createReadStream("gameOn.js").pipe(res);
    }else if (req.url === "/styles/common.css" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/css" });
        fs.createReadStream("styles/common.css").pipe(res);
    } else if (req.url === "/styles/gameOn.css" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/css" });
        fs.createReadStream("styles/gameOn.css").pipe(res);
    } else if (req.url === "/styles/index.css" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/css" });
        fs.createReadStream("styles/index.css").pipe(res);
    }else if (req.url.startsWith("/images/") && req.method === "GET") {
        const imagePath = req.url;
        res.writeHead(200, { "Content-Type": "image/jpeg" });
        fs.createReadStream(__dirname + imagePath).pipe(res);
    }else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("❌ 404 - Seite nicht gefunden");
    }
    })



const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});


