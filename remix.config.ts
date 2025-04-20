export default {
  serverBuildTarget: "netlify",
  server: "./server.js",
  serverBuildPath: "build/server/index.js",
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
    v3_singleFetch: true,
    v3_lazyRouteDiscovery: true,
  },
};
