import { normalizedAssetPrefix } from "../../../../../shared/lib/normalized-asset-prefix";
function getSocketProtocol(assetPrefix) {
    let protocol = window.location.protocol;
    try {
        // assetPrefix is a url
        protocol = new URL(assetPrefix).protocol;
    } catch (e) {}
    return protocol === "http:" ? "ws" : "wss";
}
export function getSocketUrl(assetPrefix) {
    const { hostname, port } = window.location;
    const protocol = getSocketProtocol(assetPrefix || "");
    const prefix = normalizedAssetPrefix(assetPrefix);
    // if original assetPrefix is a full URL with protocol
    // we just update to use the correct `ws` protocol
    if (assetPrefix == null ? void 0 : assetPrefix.replace(/^\/+/, "").includes("://")) {
        return protocol + "://" + prefix;
    }
    return protocol + "://" + hostname + ":" + port + prefix;
}

//# sourceMappingURL=get-socket-url.js.map