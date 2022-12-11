const http = require("http")
const server = http.createServer((req, res) => {
    console.log(req.url)
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("hello dhbjhjbxjb");
    res.end();
})

server.listen(3000, () => console.log("port started at 3000"))
