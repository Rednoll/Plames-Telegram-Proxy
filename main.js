const PORT = process.env.PORT || 8443;

var proxy = require("http-proxy");

proxy.createProxyServer({target:"https://inwaiders.enterprises/"}).listen(80);

proxy.createProxyServer({target:"https://api.telegram.org/"}).listen(PORT);