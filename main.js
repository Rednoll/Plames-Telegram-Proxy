const PORT = process.env.PORT || 88;
var app = express();

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));

var proxy = require("http-proxy");

proxy.createProxyServer({target:"https://inwaiders.enterprises/"}).listen(PORT);