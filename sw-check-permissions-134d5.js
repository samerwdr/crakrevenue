function getYmid() {
    try {
        return new URL(location.href).searchParams.get('ymid');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
function getVar() {
    try {
        return new URL(location.href).searchParams.get('var');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
self.options = {
    "domain": "p2pdh.com",
    "resubscribeOnInstall": true,
    "zoneId": 10114409,
    "ymid": getYmid(),
    "var": getVar()
}
self.lary = "";
importScripts('https://p2pdh.com/act/files/sw.perm.check.min.js?r=sw');
