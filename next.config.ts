const isGithubPages = process.env.GITHUB_PAGES === "true";

module.exports = {
  // output: "export",
  basePath: isGithubPages ? "/ss-envirocare" : "",
  assetPrefix: isGithubPages ? "/ss-envirocare" : "",
};
