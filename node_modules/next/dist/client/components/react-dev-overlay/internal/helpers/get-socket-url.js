"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSocketUrl", {
    enumerable: true,
    get: function() {
        return getSocketUrl;
    }
});
const _normalizedassetprefix = require("../../../../../shared/lib/normalized-asset-prefix");
function getSocketProtocol(assetPrefix) {
    let protocol = window.location.protocol;
    try {
        // assetPrefix is a url
        protocol = new URL(assetPrefix).protocol;
    } catch (e) {}
    return protocol === "http:" ? "ws" : "wss";
}
function getSocketUrl(assetPrefix) {
    const { hostname, port } = window.location;
    const protocol = getSocketProtocol(assetPrefix || "");
    const prefix = (0, _normalizedassetprefix.normalizedAssetPrefix)(assetPrefix);
    // if original assetPrefix is a full URL with protocol
    // we just update to use the correct `ws` protocol
    if (assetPrefix == null ? void 0 : assetPrefix.replace(/^\/+/, "").includes("://")) {
        return protocol + "://" + prefix;
    }
    return protocol + "://" + hostname + ":" + port + prefix;
}

if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', { value: true });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

//# sourceMappingURL=get-socket-url.js.map