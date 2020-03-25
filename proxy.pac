var tor = "SOCKS5 127.0.0.1:9050";
// var censoredHosts = [ "pikabu.ru", "svalko.org", "rg.ru", "farmanager.com" ]
//3var censoredHosts = [ "7-zip.org" ]
function FindProxyForURL(url, host)
{
	if (dnsDomainIs(host, ".onion")) return tor;
//	if (shExpMatch(host, ".onion")) return tor;
//	for (var censoredHost of censoredHosts) {
//		if (host == censoredHost || dnsDomainIs(host, "." + censoredHost)) return tor;
//	}
	return "DIRECT";
}
