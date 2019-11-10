var proxy = require("http-proxy");

proxy.createProxyServer({target:"https://inwaiders.enterprises/"}).listen(443);

proxy.createProxyServer({target:"https://api.telegram.org/"}).listen(8443);