"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizedAssetPrefix", {
    enumerable: true,
    get: function() {
        return normalizedAssetPrefix;
    }
});
function normalizedAssetPrefix(assetPrefix) {
    const escapedAssetPrefix = (assetPrefix == null ? void 0 : assetPrefix.replace(/^\/+/, "")) || false;
    // assetPrefix as a url
    if (escapedAssetPrefix && escapedAssetPrefix.startsWith("://")) {
        return escapedAssetPrefix.split("://", 2)[1];
    }
    // assetPrefix is set to `undefined` or '/'
    if (!escapedAssetPrefix) {
        return "";
    }
    // assetPrefix is a common path but escaped so let's add one leading slash
    return "/" + escapedAssetPrefix;
}

//# sourceMappingURL=normalized-asset-prefix.js.map