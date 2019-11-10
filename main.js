const PORT = process.env.PORT || 8443;

var proxy = require("http-proxy");

proxy.createProxyServer({target:"https://inwaiders.enterprises/"}).listen(PORT);