module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  transpileDependencies: [/\bvue-awesome\b/],
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        // changeOrigin: true,
        // ws: true,
        // pathRewrite: {
        //   "^/api": "/documents/dynamic/api/"
        // },
        // bypass: function(req, res) {
        //   console.log(req.path);
        // }
        bypass: function(req, res) {
          if (req.headers.accept.indexOf("html") !== -1) {
            console.log("Skipping proxy for browser request.");
            return "/index.html";
          } else if (process.env.MOCK !== "none") {
            console.log("mocking", req.path);
            const name = req.path
              .split("/api/")[1]
              .split("/")
              .join("_");
            console.log("name:", name);
            var file = name.split("_")[0]; // search
            var detail = req.path.split(file).pop(); // api/search/basic
            console.log("detail", detail);
            if (
              (file === "patent" ||
                file === "fund" ||
                file === "assignee" ||
                file === "paper" ||
                file === "person" ||
                file === "basic" ||
                file === "rank" ||
                file === "tech") &&
              detail.match("search") !== null
            ) {
              detail = file + name.split("_")[2];
              file = "search";
            }
            const mock = require(`./mock/${file}`);
            const result = mock(req.method, detail);
            delete require.cache[require.resolve(`./mock/${file}`)];
            return res.send(result);
          }
          return false;
        }
      }
    }
  }
};
